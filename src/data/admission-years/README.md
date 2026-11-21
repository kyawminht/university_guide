# Admission years

This folder stores the marks for each exam year.

`2025` is the base year. Every later year file lists only what changed.

## Add a new year

1. Copy `TEMPLATE.js` to `<year>.js`.
2. Keep only the universities and majors that changed.
3. Add the file to the list in `index.js`.
4. Run `npm run validate:data`.

Example:

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

Marks you do not write stay the same as the previous year.

See `CONTRIBUTING.md` in the project root for the full guide.
