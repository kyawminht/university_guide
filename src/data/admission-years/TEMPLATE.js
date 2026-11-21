/**
 * Copy this file to `<year>.js` when a new admission guide is published.
 * Only keep the universities and majors whose requirements changed; any
 * value that is not listed automatically falls back to the previous year.
 *
 * Key rules:
 * - Top-level university keys are the `id` values from `src/data/universities/`.
 * - `majors` keys are a major `code` or `nameEn` from that university.
 * - A number is shorthand for `requiredMarks`.
 */
export default {
  year: 2027,
  source: "Official 2027 admission guide URL or publication name",
  universities: {
    "medicine-1-yangon": {
      requiredMarks: 460,
      majors: {
        MBBS: 460
      }
    },
    ucsy: {
      requiredMarks: 470,
      alternativePath: 150,
      majors: {
        "B.C.Sc.": 470,
        "B.C.Tech.": 470
      }
    }
  }
}
