# University Admission Data Guide

This data is open source. You can use it in your own project, or help update it when a new exam year is published.

## Files

- `src/data/universities.js` - the file you import.
- `src/data/universities/` - university details, split by category.
- `src/data/admission-years/` - marks for each year.

## Use the data in your project

```js
import {
  universities,
  getUniversities,
  availableYears
} from './src/data/universities.js'

console.log(universities)          // newest year
console.log(getUniversities(2025)) // a specific year
console.log(availableYears)        // years that are ready
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

## Update the data for a new year

Only edit the new year file. Do not edit the full university list.

1. Copy the template:

   ```bash
   cp src/data/admission-years/TEMPLATE.js src/data/admission-years/2027.js
   ```

2. Open `2027.js` and keep only the universities and majors that changed.

   ```js
   export default {
     year: 2027,
     source: "Official 2027 admission guide",
     universities: {
       "medicine-1-yangon": {
         requiredMarks: 460,
         majors: {
           MBBS: 460
         }
       }
     }
   }
   ```

   Anything you do not write here keeps the marks from the previous year.

3. Add the new file to the list in `src/data/admission-years/index.js`:

   ```js
   import overrides2027 from './2027.js'

   export const yearFiles = [
     overrides2025,
     overrides2027
   ]
   ```

4. Run the checks:

   ```bash
   npm install
   npm run validate:data
   npm run build
   ```

5. Open a pull request. Include the official guide link in the pull request.

The newest year in `yearFiles` is used automatically.

## Rules for a year file

- The university key must match an `id` in `src/data/universities/`.
- A major key must match that major's `code` or `nameEn`.
- A number is short for `requiredMarks`.
- You can skip universities that did not change.
- Use the official guide as your source.

Example with different change types:

```js
export default {
  year: 2027,
  source: "Official 2027 admission guide",
  universities: {
    // change the university mark only
    "medicine-mandalay": {
      requiredMarks: 465
    },

    // change the university mark and its major marks
    ucsy: {
      requiredMarks: 455,
      alternativePath: 145,
      majors: {
        "B.C.Sc.": 455,
        "B.C.Tech.": 455
      }
    },

    // change one major only
    ytu: {
      majors: {
        "B.E.(Civil)": 310
      }
    }
  }
}
```

## Fix or add a university

1. Open the matching file in `src/data/universities/` (`medical.js`, `technology.js`, `computer.js`, and so on).
2. Add the university with a unique `id`.
3. Give every major a `code` or `nameEn`.
4. Run `npm run validate:data`.
5. Open a pull request.

Do not rename an `id` after it is published. Year files use it.

## Pull request checklist

- [ ] The marks match the official guide.
- [ ] The source is included in the pull request or the year file.
- [ ] Only the new year file or one university category changed.
- [ ] `npm run validate:data` passes.
- [ ] `npm run build` passes.
- [ ] No app code was changed.

## License

By contributing, you agree that your work is shared under the MIT License in this repository.
