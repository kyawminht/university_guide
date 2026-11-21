import { baseUniversities } from '../universities/index.js'
import overrides2025 from './2025.js'

export const BASE_YEAR = 2025

export const yearFiles = [
  overrides2025
  // import and add the next year here, for example:
  // import overrides2026 from './2026.js'
  // import overrides2027 from './2027.js'
]

export const availableYears = yearFiles
  .map((file) => file.year)
  .sort((a, b) => a - b)

export const LATEST_YEAR = availableYears[availableYears.length - 1] || BASE_YEAR

// Change this only if the newest published guide should not be the default.
export const ACTIVE_YEAR = LATEST_YEAR

function mergePatches(existing = {}, patch = {}) {
  const merged = { ...existing }

  for (const [key, value] of Object.entries(patch)) {
    if (key === 'majors' && value && typeof value === 'object' && !Array.isArray(value)) {
      const majors = { ...(existing.majors || {}) }
      for (const [majorKey, majorPatch] of Object.entries(value)) {
        const base = typeof majors[majorKey] === 'number'
          ? { requiredMarks: majors[majorKey] }
          : (majors[majorKey] || {})
        const next = typeof majorPatch === 'number'
          ? { requiredMarks: majorPatch }
          : (majorPatch || {})
        majors[majorKey] = { ...base, ...next }
      }
      merged.majors = majors
      continue
    }

    if (key === 'alternativePath') {
      const base = typeof existing.alternativePath === 'number'
        ? { requiredMarks: existing.alternativePath }
        : (existing.alternativePath || {})
      const next = typeof value === 'number' ? { requiredMarks: value } : (value || {})
      merged.alternativePath = { ...base, ...next }
      continue
    }

    if (key === 'subjectRequirements' && value && typeof value === 'object' && !Array.isArray(value)) {
      const requirements = { ...(existing.subjectRequirements || {}) }
      for (const [name, requirement] of Object.entries(value)) {
        requirements[name] = { ...(requirements[name] || {}), ...(requirement || {}) }
      }
      merged.subjectRequirements = requirements
      continue
    }

    merged[key] = value
  }

  return merged
}

function collectOverrides(year) {
  const result = {}

  for (const file of yearFiles) {
    if (file.year > year) continue

    for (const [universityId, patch] of Object.entries(file.universities || {})) {
      result[universityId] = mergePatches(result[universityId], patch)
    }
  }

  return result
}

function applyMajorPatch(major, patch) {
  if (typeof patch === 'number') {
    return { ...major, requiredMarks: patch }
  }

  return { ...major, ...patch }
}

function applyUniversityPatch(university, patch) {
  const next = { ...university }

  for (const [key, value] of Object.entries(patch)) {
    if (key === 'majors') {
      next.majors = (university.majors || []).map((major) => {
        const majorPatch = value[major.code] ?? value[major.nameEn]
        return majorPatch === undefined ? major : applyMajorPatch(major, majorPatch)
      })
      continue
    }

    if (key === 'alternativePath') {
      const pathPatch = typeof value === 'number' ? { requiredMarks: value } : value
      next.alternativePath = { ...(university.alternativePath || {}), ...pathPatch }
      continue
    }

    if (key === 'subjectRequirements' && value && typeof value === 'object') {
      const base = university.subjectRequirements || {}
      const names = new Set([...Object.keys(base), ...Object.keys(value)])
      next.subjectRequirements = Object.fromEntries(
        [...names].map((name) => [name, { ...(base[name] || {}), ...(value[name] || {}) }])
      )
      continue
    }

    next[key] = value
  }

  return next
}

/**
 * Return the university catalog for a given admission year.
 *
 * Overrides are cumulative: a value defined in 2026 remains active in 2027
 * unless the 2027 file changes it again.
 *
 * @param {number} [year=ACTIVE_YEAR]
 * @returns {Array}
 */
export function getUniversities(year = ACTIVE_YEAR) {
  const overrides = collectOverrides(Number(year))

  return baseUniversities.map((university) =>
    overrides[university.id]
      ? applyUniversityPatch(university, overrides[university.id])
      : university
  )
}
