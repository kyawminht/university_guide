// Yangon University

export const yangonUniversities = [
// ==================== YANGON UNIVERSITY ====================
{
  id: "yangon-university",
  nameMy: "ရန်ကုန်တက္ကသိုလ်",
  nameEn: "University of Yangon",
  requiredMarks: 240,
  subjectCombination: "6-subjects",
  locationMy: "ရန်ကုန်မြို့",
  locationEn: "Yangon",
  type: "သိပ္ပံနှင့်ဝိဇ္ဇာ - ရန်ကုန်",
  icon: "🏛️",
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements: "တက္ကသိုလ်ဝင်စာမေးပွဲ အောင်မြင်ရမည်။",
  majors: [
    // Arts Majors (B.A)
    { nameMy: "မြန်မာစာ", nameEn: "Myanmar", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "မြန်မာမှုပညာ", nameEn: "Myanmar Studies", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "အင်္ဂလိပ်စာ", nameEn: "English", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ပထဝီဝင်", nameEn: "Geography", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ပတ်ဝန်းကျင်ဆိုင်ရာ လေ့လာမှုပညာ", nameEn: "Environmental Studies", code: "B.ES", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "သမိုင်း", nameEn: "History", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ဒဿနိကေဗဒ", nameEn: "Philosophy", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "စိတ်ပညာ", nameEn: "Psychology", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "အရှေ့တိုင်းပညာ", nameEn: "Oriental Studies", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "နိုင်ငံတကာဆက်ဆံရေးပညာ", nameEn: "International Relations", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "နိုင်ငံရေးသိပ္ပံ", nameEn: "Political Science", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "မနုဿဗေဒ", nameEn: "Anthropology", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    
    // Archaeology
    { nameMy: "ရှေးဟောင်းသုတေသနပညာ", nameEn: "Archaeology", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    
    // Library Science
    { nameMy: "စာကြည့်တိုက်နှင့် သုတပညာ", nameEn: "Library and Information Science", code: "B.A", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    
    // Law
    { nameMy: "ဥပဒေပညာ", nameEn: "Law", code: "LLB", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 5 },
    
    // Science Majors (B.Sc)
    { nameMy: "ဓာတုဗေဒ", nameEn: "Chemistry", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ဇီဝဓာတုဗေဒ", nameEn: "Biochemistry", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ကုန်ထုတ်ဓာတုဗေဒ", nameEn: "Industrial Chemistry", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ရူပဗေဒ", nameEn: "Physics", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "သင်္ချာ", nameEn: "Mathematics", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "သတ္တဗေဒ", nameEn: "Zoology", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ရုက္ခဗေဒ", nameEn: "Botany", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "အဏုဇီဝဗေဒ", nameEn: "Microbiology", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ဘူမိဗေဒ", nameEn: "Geology", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    { nameMy: "ကွန်ပျူတာသိပ္ပံ", nameEn: "Computer Science", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    
    // Fisheries
    { nameMy: "ငါးလုပ်ငန်းနှင့် ရေသတ္တဝါမွေးမြူရေးပညာ", nameEn: "Fisheries Science", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    
    // Environmental
    { nameMy: "ပတ်ဝန်းကျင်နှင့် ရေပညာ", nameEn: "Environmental and Water Science", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    
    // GIS & Remote Sensing
    { nameMy: "ပထဝီဝင်သတင်းအချက်အလက်စနစ်နှင့် အာရုံခံမှု", nameEn: "Geographic Information Systems and Remote Sensing", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    
    // Engineering Physics
    { nameMy: "အင်ဂျင်နီယာပညာရပ်ဆိုင်ရာ ရူပဗေဒ", nameEn: "Engineering Physics", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    
    // Applied Entomology
    { nameMy: "အသုံးချအင်းဆက်ဗေဒ", nameEn: "Applied Entomology", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    
    // Environmental Science
    { nameMy: "ပတ်ဝန်းကျင်သိပ္ပံ", nameEn: "Environmental Science", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 },
    
    // Food Science
    { nameMy: "အစားအစာသိပ္ပံ", nameEn: "Food Science", code: "B.Sc", subjectCombination: "6-subjects", requiredMarks: 240, durationYears: 4 }
  ]
},
]
