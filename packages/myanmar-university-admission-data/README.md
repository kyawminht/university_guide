# myanmar-university-admission-data

Open-source Myanmar university admission data: universities, locations, majors, subject combinations, and required marks by year.

## Install

```bash
npm install myanmar-university-admission-data
```

## Use the data

```js
import {
  universities,
  getUniversities,
  availableYears
} from 'myanmar-university-admission-data'

console.log(universities)          // newest year
console.log(getUniversities(2025)) // a specific year
console.log(availableYears)        // years included in this release
```

Each university looks like this:

```js
{
  id: "medicine-1-yangon",
  nameMy: "ဆေးတက္ကသိုလ်(၁)၊ ရန်ကုန်",
  nameEn: "University of Medicine 1, Yangon",
  requiredMarks: 450,
  subjectCombination: "6-subjects",
  locationMy: "ရန်ကုန်မြို့",
  locationEn: "Yangon",
  majors: [
    {
      nameMy: "ဆေးပညာ",
      nameEn: "Medicine",
      code: "MBBS",
      requiredMarks: 450
    }
  ],
  specialRequirements: "Interview required."
}
```

`requiredMarks: null` means there is no fixed mark; entry is competitive.

Example: find universities a student can apply to.

```js
const myMarks = 460

const canApply = universities.filter((university) => {
  return university.requiredMarks === null || university.requiredMarks <= myMarks
})
```

## Use JSON

```js
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const data = require('myanmar-university-admission-data/json')
```

A specific year:

```js
const data2025 = require('myanmar-university-admission-data/json/2025')
```

JSON files also live in `node_modules/myanmar-university-admission-data/dist/data/`.

## Use a year override file

```js
import overrides2025 from 'myanmar-university-admission-data/years/2025'
```

## Update the data

The data is maintained in the main repository:

https://github.com/kyawminht/university_guide

See `CONTRIBUTING.md` there for how to add marks for a new exam year.

## License

- Code: MIT
- Data: CC BY 4.0. Attribution: University Guide contributors, based on the official Myanmar University Admission Guide.
