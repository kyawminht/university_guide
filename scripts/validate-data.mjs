import { baseUniversities } from '../src/data/universities/index.js'
import {
  ACTIVE_YEAR,
  availableYears,
  getUniversities,
  yearFiles
} from '../src/data/admission-years/index.js'

const errors = []

function fail(message) {
  errors.push(message)
}

function isMark(value) {
  return typeof value === 'number' && Number.isFinite(value) && value >= 0 && value <= 600
}

function checkMarks(label, value) {
  if (value === undefined || value === null) return
  if (!isMark(value)) fail(`${label}: expected a mark between 0 and 600, got ${JSON.stringify(value)}`)
}

const universitiesById = new Map()
const majorKeysByUniversityId = new Map()

for (const university of baseUniversities) {
  if (!university.id) {
    fail(`University without id: ${JSON.stringify(university.nameEn)}`)
    continue
  }

  if (universitiesById.has(university.id)) {
    fail(`Duplicate university id: ${university.id}`)
  }

  universitiesById.set(university.id, university)
  checkMarks(`${university.id}.requiredMarks`, university.requiredMarks)

  const majorKeys = new Set()
  for (const major of university.majors || []) {
    checkMarks(`${university.id}.${major.code || major.nameEn}.requiredMarks`, major.requiredMarks)
    if (major.code) majorKeys.add(major.code)
    if (major.nameEn) majorKeys.add(major.nameEn)
  }
  majorKeysByUniversityId.set(university.id, majorKeys)
}

for (const file of yearFiles) {
  const year = file.year

  if (!Number.isInteger(year)) {
    fail(`Year file has invalid year: ${JSON.stringify(year)}`)
    continue
  }

  if (!file.universities || typeof file.universities !== 'object' || Array.isArray(file.universities)) {
    fail(`${year}.js: "universities" must be an object`)
    continue
  }

  for (const [universityId, patch] of Object.entries(file.universities)) {
    const university = universitiesById.get(universityId)

    if (!university) {
      fail(`${year}.js: unknown university id "${universityId}"`)
      continue
    }

    if (!patch || typeof patch !== 'object' || Array.isArray(patch)) {
      fail(`${year}.js: "${universityId}" must be an object`)
      continue
    }

    checkMarks(`${year}.js ${universityId}.requiredMarks`, patch.requiredMarks)

    if (patch.alternativePath !== undefined) {
      if (typeof patch.alternativePath === 'number') {
        checkMarks(`${year}.js ${universityId}.alternativePath`, patch.alternativePath)
      } else {
        checkMarks(`${year}.js ${universityId}.alternativePath.requiredMarks`, patch.alternativePath?.requiredMarks)
      }
    }

    if (patch.subjectRequirements !== undefined) {
      for (const [name, requirement] of Object.entries(patch.subjectRequirements || {})) {
        checkMarks(`${year}.js ${universityId}.subjectRequirements.${name}.marks`, requirement?.marks)
      }
    }

    if (patch.majors !== undefined) {
      if (!patch.majors || typeof patch.majors !== 'object' || Array.isArray(patch.majors)) {
        fail(`${year}.js ${universityId}.majors must be an object`)
        continue
      }

      for (const [majorKey, value] of Object.entries(patch.majors)) {
        if (!majorKeysByUniversityId.get(universityId)?.has(majorKey)) {
          fail(`${year}.js: "${universityId}" has no major with code or name "${majorKey}"`)
          continue
        }

        if (typeof value === 'number') {
          checkMarks(`${year}.js ${universityId}.${majorKey}`, value)
        } else {
          checkMarks(`${year}.js ${universityId}.${majorKey}.requiredMarks`, value?.requiredMarks)
        }
      }
    }
  }
}

const applied = getUniversities(ACTIVE_YEAR)
if (applied.length !== baseUniversities.length) {
  fail(`getUniversities(${ACTIVE_YEAR}) returned ${applied.length} entries, expected ${baseUniversities.length}`)
}

for (const university of applied) {
  for (const major of university.majors || []) {
    checkMarks(`${university.id}.${major.code || major.nameEn}.requiredMarks (applied)`, major.requiredMarks)
  }
}

if (errors.length > 0) {
  console.error(`Data validation failed with ${errors.length} error(s):`)
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log(`Data OK: ${baseUniversities.length} universities, years: ${availableYears.join(', ')} (active ${ACTIVE_YEAR})`)
