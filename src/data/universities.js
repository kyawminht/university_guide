import {
  ACTIVE_YEAR,
  BASE_YEAR,
  LATEST_YEAR,
  availableYears,
  getUniversities
} from './admission-years/index.js'
import { baseUniversities } from './universities/index.js'

export {
  ACTIVE_YEAR,
  BASE_YEAR,
  LATEST_YEAR,
  availableYears,
  getUniversities,
  baseUniversities
}
export { hasAlternativePath, getUserMarksForUniversity } from './universities/helpers.js'

export const universities = getUniversities(ACTIVE_YEAR)
