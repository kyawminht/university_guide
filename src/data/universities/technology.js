const fourSubjectRequirement = "Physics + Chemistry + Mathematics + English (4 subjects) total marks";

const fourSubjectEngineeringMajors = (requiredMarks, durationYears = 5, degreePrefix = "B.E.") => [
  { nameMy: "မြို့ပြအင်ဂျင်နီယာ", nameEn: "Civil Engineering", code: `${degreePrefix}(Civil)`, subjectCombination: "4-subjects", requiredMarks, durationYears },
  { nameMy: "အီလက်ထရွန်းနစ်အင်ဂျင်နီယာ", nameEn: "Electronic Engineering", code: `${degreePrefix}(Electronics)`, subjectCombination: "4-subjects", requiredMarks, durationYears },
  { nameMy: "လျှပ်စစ်စွမ်းအားအင်ဂျင်နီယာ", nameEn: "Electrical Power Engineering", code: `${degreePrefix}(Electrical Power)`, subjectCombination: "4-subjects", requiredMarks, durationYears },
  { nameMy: "စက်မှုအင်ဂျင်နီယာ", nameEn: "Mechanical Engineering", code: `${degreePrefix}(Mechanical)`, subjectCombination: "4-subjects", requiredMarks, durationYears }
];

const createFourSubjectUniversity = ({
  id,
  nameMy,
  nameEn,
  locationMy,
  locationEn,
  type = "technology",
  icon = "👨🏼‍💻",
  requiredMarks = 240,
  majors = fourSubjectEngineeringMajors(requiredMarks),
  specialRequirements = `${fourSubjectRequirement} ${requiredMarks}+`
}) => ({
  id,
  nameMy,
  nameEn,
  requiredMarks,
  subjectCombination: "4-subjects",
  locationMy,
  locationEn,
  type,
  icon,
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements,
  majors
});

const additionalTechnologicalUniversities = [
  ["tu-monywa", "နည်းပညာတက္ကသိုလ် (မုံရွာ)", "Technological University (Monywa)", "မုံရွာမြို့", "Monywa"],
  ["tu-kalay", "နည်းပညာတက္ကသိုလ် (ကလေး)", "Technological University (Kalay)", "ကလေးမြို့", "Kalay"],
  ["tu-sagaing", "နည်းပညာတက္ကသိုလ် (စစ်ကိုင်း)", "Technological University (Sagaing)", "စစ်ကိုင်းမြို့", "Sagaing"],
  ["tu-kyaukse", "နည်းပညာတက္ကသိုလ် (ကျောက်ဆည်)", "Technological University (Kyaukse)", "ကျောက်ဆည်မြို့", "Kyaukse"],
  ["tu-meiktila", "နည်းပညာတက္ကသိုလ် (မိတ္ထီလာ)", "Technological University (Meiktila)", "မိတ္ထီလာမြို့", "Meiktila"],
  ["tu-yamethin", "နည်းပညာတက္ကသိုလ် (ရမည်းသင်း)", "Technological University (Yamethin)", "ရမည်းသင်းမြို့", "Yamethin"],
  ["tu-magway", "နည်းပညာတက္ကသိုလ် (မကွေး)", "Technological University (Magway)", "မကွေးမြို့", "Magway"],
  ["tu-pakokku", "နည်းပညာတက္ကသိုလ် (ပခုက္ကူ)", "Technological University (Pakokku)", "ပခုက္ကူမြို့", "Pakokku"],
  ["tu-taunggyi", "နည်းပညာတက္ကသိုလ် (တောင်ကြီး)", "Technological University (Taunggyi)", "တောင်ကြီးမြို့", "Taunggyi"],
  ["tu-loikaw", "နည်းပညာတက္ကသိုလ် (လွိုင်ကော်)", "Technological University (Loikaw)", "လွိုင်ကော်မြို့", "Loikaw"],
  ["tu-taungoo", "နည်းပညာတက္ကသိုလ် (တောင်ငူ)", "Technological University (Taungoo)", "တောင်ငူမြို့", "Taungoo"],
  ["tu-pyay", "ပြည်နည်းပညာတက္ကသိုလ်", "Pyay Technological University", "ပြည်မြို့", "Pyay"],
  ["tu-sittwe", "နည်းပညာတက္ကသိုလ် (စစ်တွေ)", "Technological University (Sittwe)", "စစ်တွေမြို့", "Sittwe"],
  ["tu-yangon-west", "ရန်ကုန်အနောက်ပိုင်းနည်းပညာတက္ကသိုလ်", "West Yangon Technological University", "ရန်ကုန်မြို့", "Yangon"],
  ["tu-hmawbi", "နည်းပညာတက္ကသိုလ် (မှော်ဘီ)", "Technological University (Hmawbi)", "မှော်ဘီမြို့", "Hmawbi"],
  ["tu-thanlyin", "နည်းပညာတက္ကသိုလ် (သန်လျင်)", "Technological University (Thanlyin)", "သန်လျင်မြို့", "Thanlyin"],
  ["tu-pathein", "နည်းပညာတက္ကသိုလ် (ပုသိမ်)", "Technological University (Pathein)", "ပုသိမ်မြို့", "Pathein"],
  ["tu-hinthada", "နည်းပညာတက္ကသိုလ် (ဟင်္သာတ)", "Technological University (Hinthada)", "ဟင်္သာတမြို့", "Hinthada"],
  ["tu-hpa-an", "နည်းပညာတက္ကသိုလ် (ဘားအံ)", "Technological University (Hpa-an)", "ဘားအံမြို့", "Hpa-an"],
  ["tu-mawlamyine", "နည်းပညာတက္ကသိုလ် (မော်လမြိုင်)", "Technological University (Mawlamyine)", "မော်လမြိုင်မြို့", "Mawlamyine"]
].map(([id, nameMy, nameEn, locationMy, locationEn]) =>
  createFourSubjectUniversity({ id, nameMy, nameEn, locationMy, locationEn })
);

const governmentTechnicalColleges = [
  ["gtc-shwebo", "အစိုးရနည်းပညာကောလိပ် (ရွှေဘို)", "Government Technical College (Shwebo)", "ရွှေဘိုမြို့", "Shwebo"],
  ["gtc-mandalay", "အစိုးရနည်းပညာကောလိပ် (မန္တလေး)", "Government Technical College (Mandalay)", "မန္တလေးမြို့", "Mandalay"],
  ["gtc-kyaukpadaung", "အစိုးရနည်းပညာကောလိပ် (ကျောက်ပန်းတောင်း)", "Government Technical College (Kyaukpadaung)", "ကျောက်ပန်းတောင်းမြို့", "Kyaukpadaung"],
  ["gtc-south-dagon", "အစိုးရနည်းပညာကောလိပ် (တောင်ဒဂုံ)", "Government Technical College (South Dagon)", "ရန်ကုန်မြို့", "Yangon"]
].map(([id, nameMy, nameEn, locationMy, locationEn]) =>
  createFourSubjectUniversity({
    id,
    nameMy,
    nameEn,
    locationMy,
    locationEn,
    type: "အစိုးရနည်းပညာကောလိပ်",
    icon: "🔧",
    majors: [
      { nameMy: "မြို့ပြအင်ဂျင်နီယာ", nameEn: "Civil Engineering", code: "B.Tech(Civil)", subjectCombination: "4-subjects", requiredMarks: 240, durationYears: 4 },
      { nameMy: "လျှပ်စစ်စွမ်းအားအင်ဂျင်နီယာ", nameEn: "Electrical Power Engineering", code: "B.Tech(Electrical Power)", subjectCombination: "4-subjects", requiredMarks: 240, durationYears: 4 },
      { nameMy: "စက်မှုအင်ဂျင်နီယာ", nameEn: "Mechanical Engineering", code: "B.Tech(Mechanical)", subjectCombination: "4-subjects", requiredMarks: 240, durationYears: 4 }
    ]
  })
);

// Helper function for regular polytechnic universities (non-Naypyitaw)
const createRegularPolytechnicUniversity = ({ id, nameMy, nameEn, locationMy, locationEn }) => ({
  id,
  nameMy,
  nameEn,
  requiredMarks: 240,  // For engineering programs
  subjectCombination: "multiple",
  locationMy,
  locationEn,
  type: "polytechnic",
  icon: "🏭",
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements: "အင်ဂျင်နီယာသင်တန်းများအတွက် ရူပ၊ ဓာတု၊ သင်္ချာ၊ အင်္ဂလိပ် (၄)ဘာသာ ပေါင်းရမှတ် (၂၄၀)နှင့်အထက်။ ကွန်ပျူတာသိပ္ပံနှင့် နည်းပညာသင်တန်းများအတွက် စုစုပေါင်းရမှတ် (၃၂၀)နှင့်အထက်။",
  majors: [
    // Engineering Programs - 4 subjects
    { nameMy: "မြို့ပြအင်ဂျင်နီယာ", nameEn: "Civil Engineering", code: "B.E.(Civil)", subjectCombination: "4-subjects", requiredMarks: 240, durationYears: 5 },
    { nameMy: "အီလက်ထရွန်းနစ်အင်ဂျင်နီယာ", nameEn: "Electronic Engineering", code: "B.E.(Electronics)", subjectCombination: "4-subjects", requiredMarks: 240, durationYears: 5 },
    { nameMy: "လျှပ်စစ်စွမ်းအားအင်ဂျင်နီယာ", nameEn: "Electrical Power Engineering", code: "B.E.(Electrical Power)", subjectCombination: "4-subjects", requiredMarks: 240, durationYears: 5 },
    { nameMy: "စက်မှုအင်ဂျင်နီယာ", nameEn: "Mechanical Engineering", code: "B.E.(Mechanical)", subjectCombination: "4-subjects", requiredMarks: 240, durationYears: 5 },
    // Computer Programs - 6 subjects
    { nameMy: "ကွန်ပျူတာသိပ္ပံဘွဲ့", nameEn: "Computer Science", code: "B.C.Sc.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 },
    { nameMy: "ကွန်ပျူတာနည်းပညာဘွဲ့", nameEn: "Computer Technology", code: "B.C.Tech.", subjectCombination: "6-subjects", requiredMarks: 320, durationYears: 4 }
  ]
});

// ==================== NAYPYITAW STATE POLYTECHNIC UNIVERSITY ====================
const naypyitawPolytechnic = {
  id: "naypyitaw-polytechnic",
  nameMy: "Naypyitaw State Polytechnic University",
  nameEn: "Naypyitaw State Polytechnic University",
  requiredMarks: 300,
  subjectCombination: "multiple",
  locationMy: "နေပြည်တော်",
  locationEn: "Naypyitaw",
  type: "polytechnic",
  icon: "🏭",
  officialWebsite: null,
  lastUpdated: "2025",
  specialRequirements: "အင်ဂျင်နီယာနှင့် ဗိသုကာသင်တန်းများအတွက် ရူပ၊ ဓာတု၊ သင်္ချာ၊ အင်္ဂလိပ် (၄)ဘာသာ ပေါင်းရမှတ် (၃၀၀)နှင့်အထက်။ ကွန်ပျူတာသိပ္ပံနှင့် နည်းပညာအတွက် စုစုပေါင်းရမှတ် (၄၅၀)နှင့်အထက် သို့မဟုတ် အင်္ဂလိပ်+သင်္ချာ (၁၄၀)နှင့်အထက်။",
  majors: [
    // ===== ENGINEERING & ARCHITECTURE PROGRAMS (4 subjects) =====
    { nameMy: "မြို့ပြအင်ဂျင်နီယာ", nameEn: "Civil Engineering", code: "B.E.(Civil)", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 },
    { nameMy: "အီလက်ထရွန်းနစ်အင်ဂျင်နီယာ", nameEn: "Electronic Engineering", code: "B.E.(Electronics)", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 },
    { nameMy: "လျှပ်စစ်စွမ်းအားအင်ဂျင်နီယာ", nameEn: "Electrical Power Engineering", code: "B.E.(Electrical Power)", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 },
    { nameMy: "စက်မှုအင်ဂျင်နီယာ", nameEn: "Mechanical Engineering", code: "B.E.(Mechanical)", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 },
    { nameMy: "ကွန်ပျူတာအင်ဂျင်နီယာနှင့် သတင်းအချက်အလက်နည်းပညာ", nameEn: "Computer Engineering and Information Technology", code: "B.E.(CEIT)", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 },
    { nameMy: "စိုက်ပျိုးရေးအင်ဂျင်နီယာ", nameEn: "Agricultural Engineering", code: "B.E.(Agricultural Engineering)", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 },
    { nameMy: "ဗိသုကာပညာ", nameEn: "Architecture", code: "B.Arch.", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 },
    
    // ===== COMPUTER SCIENCE PROGRAMS (6 subjects OR Eng+Math) =====
    { nameMy: "ကွန်ပျူတာသိပ္ပံဘွဲ့ (ပရိုဂရမ်အင်ဂျင်နီယာ)", nameEn: "Computer Science (Software Engineering)", code: "B.C.Sc.", subjectCombination: "6-subjects-or-2", requiredMarks: 450, alternativeRequiredMarks: 140, durationYears: 4 },
    { nameMy: "ကွန်ပျူတာနည်းပညာဘွဲ့ (ဆက်သွယ်ရေးနှင့်ကွန်ရက်ပညာ)", nameEn: "Computer Technology (Computer Communication and Networks)", code: "B.C.Tech.", subjectCombination: "6-subjects-or-2", requiredMarks: 450, alternativeRequiredMarks: 140, durationYears: 4 }
  ]
};

const polytechnicEngineeringUniversities = [
  naypyitawPolytechnic,  // Add Naypyitaw here
  ...[
    ["polytechnic-myitkyina", "Polytechnic University (မြစ်ကြီးနား)", "Polytechnic University (Myitkyina)", "မြစ်ကြီးနားမြို့", "Myitkyina"],
    ["polytechnic-bhamo", "Polytechnic University (ဗန်းမော်)", "Polytechnic University (Bhamo)", "ဗန်းမော်မြို့", "Bhamo"],
    ["polytechnic-lashio", "Polytechnic University (လားရှိုး)", "Polytechnic University (Lashio)", "လားရှိုးမြို့", "Lashio"],
    ["polytechnic-kyaingtong", "Polytechnic University (ကျိုင်းတုံ)", "Polytechnic University (Kyaingtong)", "ကျိုင်းတုံမြို့", "Kyaingtong"],
    ["polytechnic-pinlon", "Polytechnic University (ပင်လုံ)", "Polytechnic University (Pinlon)", "ပင်လုံမြို့", "Pinlon"],
    ["polytechnic-maubin", "Polytechnic University (မအူပင်)", "Polytechnic University (Maubin)", "မအူပင်မြို့", "Maubin"],
    ["polytechnic-dawei", "Polytechnic University (ထားဝယ်)", "Polytechnic University (Dawei)", "ထားဝယ်မြို့", "Dawei"],
    ["polytechnic-myeik", "Polytechnic University (မြိတ်)", "Polytechnic University (Myeik)", "မြိတ်မြို့", "Myeik"]
  ].map(([id, nameMy, nameEn, locationMy, locationEn]) =>
    createRegularPolytechnicUniversity({ id, nameMy, nameEn, locationMy, locationEn })
  )
];

export const technologyUniversities = [
  // ==================== 3. TECHNOLOGICAL UNIVERSITIES ====================
  {
    id: "ytu",
    nameMy: "ရန်ကုန်နည်းပညာတက္ကသိုလ်",
    nameEn: "Yangon Technological University (YTU)",
    requiredMarks: 300,
    subjectCombination: "4-subjects",
    locationMy: "ရန်ကုန်မြို့",
    locationEn: "Yangon",
    type: "နည်းပညာ",
    icon: "👨🏼‍💻",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "ရူပ၊ ဓာတု၊ သင်္ချာ၊ အင်္ဂလိပ် (၄)ဘာသာ ပေါင်းရမှတ် (၃၀၀)နှင့်အထက်။ အမျိုးသား ၅၅% / အမျိုးသမီး ၄၅%။",
    majors: [
      { nameMy: "မြို့ပြအင်ဂျင်နီယာ", nameEn: "Civil Engineering", code: "B.E.(Civil)", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 },
      { nameMy: "စက်မှုအင်ဂျင်နီယာ", nameEn: "Mechanical Engineering", code: "B.E.(Mechanical)", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 },
      { nameMy: "လျှပ်စစ်စွမ်းအားအင်ဂျင်နီယာ", nameEn: "Electrical Power Engineering", code: "B.E.(Electrical Power)", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 },
      { nameMy: "အီလက်ထရွန်းနစ်အင်ဂျင်နီယာ", nameEn: "Electronic Engineering", code: "B.E.(Electronics)", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 },
      { nameMy: "ကွန်ပျူတာအင်ဂျင်နီယာနှင့် သတင်းအချက်အလက်နည်းပညာ", nameEn: "Computer Engineering and IT", code: "B.E.(CEIT)", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 },
      { nameMy: "မက်ချာထရောနစ်အင်ဂျင်နီယာ", nameEn: "Mechatronic Engineering", code: "B.E.(Mechatronics)", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 },
      { nameMy: "ဗိသုကာပညာ", nameEn: "Architecture", code: "B.Arch.", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 }
    ]
  },
  {
    id: "mtu",
    nameMy: "မန္တလေးနည်းပညာတက္ကသိုလ်",
    nameEn: "Mandalay Technological University (MTU)",
    requiredMarks: 300,
    subjectCombination: "4-subjects",
    locationMy: "မန္တလေးမြို့",
    locationEn: "Mandalay",
    type: "နည်းပညာ",
    icon: "👨🏼‍💻",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "ရူပ၊ ဓာတု၊ သင်္ချာ၊ အင်္ဂလိပ် (၄)ဘာသာ ပေါင်းရမှတ် (၃၀၀)နှင့်အထက်။",
    majors: [
      { nameMy: "မြို့ပြအင်ဂျင်နီယာ", nameEn: "Civil Engineering", code: "B.E.(Civil)", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 },
      { nameMy: "စက်မှုအင်ဂျင်နီယာ", nameEn: "Mechanical Engineering", code: "B.E.(Mechanical)", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 },
      { nameMy: "ဇီဝနည်းပညာ", nameEn: "Biotechnology", code: "B.S.(Biotechnology)", subjectCombination: "4-subjects", requiredMarks: 260, durationYears: 4 }
    ]
  },
  {
    id: "tu-yadanabon-cyber",
    nameMy: "နည်းပညာတက္ကသိုလ် (ရတနာပုံဆိုက်ဘာစီးတီး)",
    nameEn: "Technological University (Yadanabon Cyber City)",
    requiredMarks: 300,
    subjectCombination: "4-subjects",
    locationMy: "မန္တလေးမြို့",
    locationEn: "Mandalay",
    type: "နည်းပညာ",
    icon: "👨🏼‍💻",
    officialWebsite: null,
    lastUpdated: "2025",
    specialRequirements: "ရူပ၊ ဓာတု၊ သင်္ချာ၊ အင်္ဂလိပ် (၄)ဘာသာ ပေါင်းရမှတ် (၃၀၀)နှင့်အထက်။",
    majors: [
      { nameMy: "သတင်းအချက်အလက်နှင့် ဆက်သွယ်ရေးနည်းပညာ", nameEn: "ICT", code: "B.E.(ICT)", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 },
      { nameMy: "ကွန်ပျူတာအင်ဂျင်နီယာ", nameEn: "Computer Engineering", code: "B.E.(CE)", subjectCombination: "4-subjects", requiredMarks: 300, durationYears: 5 }
    ]
  },

  ...additionalTechnologicalUniversities,
  ...governmentTechnicalColleges,
  ...polytechnicEngineeringUniversities,
]
