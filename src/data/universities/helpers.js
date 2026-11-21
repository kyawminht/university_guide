export const hasAlternativePath = (university) => {
  return university.subjectCombination === "6-subjects-or-2" && university.alternativePath;
};

export const getUserMarksForUniversity = (university, userMarks) => {
  if (university.subjectCombination === "4-subjects") {
    return userMarks["4-subjects"] || 0;
  } else if (university.subjectCombination === "6-subjects-or-2") {
    const totalMarks = userMarks["6-subjects"] || 0;
    const twoSubjectsMarks = userMarks["2-subjects"] || 0;
    return {
      primary: totalMarks,
      alternative: twoSubjectsMarks,
      primaryRequired: university.requiredMarks,
      alternativeRequired: university.alternativePath?.requiredMarks || null
    };
  }
  return userMarks["6-subjects"] || 0;
};
