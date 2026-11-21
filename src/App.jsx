import { useState, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import Header from './components/layout/Header'
import SEOContent from './components/layout/SEOContent'
import Hero from './components/sections/Hero'
import MarksInput from './components/sections/MarksInput'
import FilterBar from './components/sections/FilterBar'
import ResultsList from './components/sections/ResultsList'
import WarningBanner from './components/sections/WarningBanner'
import Footer from './components/layout/Footer'
import UniversityCard from './components/university/UniversityCard'
import { universities } from './data/universities'
import { filterUniversities, getUniqueTypes } from './lib/utils'

export default function App() {
  const [marks, setMarks] = useState({
  '6-subjects': 240,
  '4-subjects': 240,
  '2-subjects': 0
})

  const [filter, setFilter] = useState('all')
  const [marksMode, setMarksMode] = useState('6-subjects')
  const [selectedUniversity, setSelectedUniversity] = useState(null)
  
  const eligibleUniversities = marks !== null 
    ? filterUniversities(universities, marks, filter, marksMode)
    : []
    
  const allTypes = marks !== null 
    ? getUniqueTypes(filterUniversities(universities, marks, 'all', marksMode))
    : []
    
  const totalEligible = marks !== null 
    ? filterUniversities(universities, marks, 'all', marksMode).length 
    : 0



const handleMarksSubmit = useCallback((newMarks) => {
  setMarks(prev => ({
    '6-subjects': newMarks,
    '4-subjects': prev?.['4-subjects'] ?? 240,
    '2-subjects': prev?.['2-subjects'] ?? 0
  }))
}, [])

const handleFourSubjectSubmit = useCallback((newMarks) => {
  setMarks(prev => ({
    '6-subjects': prev?.['6-subjects'] ?? 240,
    '4-subjects': newMarks,
    '2-subjects': prev?.['2-subjects'] ?? 0
  }))
}, [])

  const handleFilterChange = useCallback((newFilter) => {
    setFilter(newFilter)
  }, [])

  const handleMarksModeChange = useCallback((newMode) => {
    setMarksMode(newMode)
    setFilter('all')
  }, [])

  const handleUniversitySelect = useCallback((university) => {
    setSelectedUniversity(university)
  }, [])

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Myanmar University Admission Checker",
            "alternateName": "တက္ကသိုလ်ဝင်ခွင့် စစ်ဆေးရန်",
            "url": "https://yourdomain.com/myanmar-university-admission",
            "description": "Check which Myanmar universities you qualify for based on your Grade 12 matriculation exam total marks.",
            "applicationCategory": "EducationalApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "MMK"
            },
            "inLanguage": ["my", "en"]
          })}
        </script>
      </Helmet>
      
      <SEOContent />
      
      <div className="max-w-2xl mx-auto pb-20">
     
        <Hero />
        
        <main className="px-4">
          <MarksInput 
            onMarksSubmit={handleMarksSubmit}
            onFourSubjectSubmit={handleFourSubjectSubmit}
            onModeChange={handleMarksModeChange}
            onUniversitySelect={handleUniversitySelect}
            marks={marks}
            initialSixSubjectMarks={marks?.['6-subjects'] ?? 240}
            initialFourSubjectMarks={marks?.['4-subjects'] ?? 240}
          />
          
          {selectedUniversity && (
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2 px-1">
                <h3 className="text-sm font-semibold text-app-text dark:text-dark-text">
                  ရှာဖွေထားသော တက္ကသိုလ် — လိုအပ်ချက် {selectedUniversity.requiredMarks ?? 'ယှဉ်ပြိုင်'}
                </h3>
                <button
                  type="button"
                  onClick={() => setSelectedUniversity(null)}
                  className="text-xs text-app-muted hover:text-app-text dark:hover:text-dark-text"
                  aria-label="ပိတ်ရန်"
                >
                  ✕ ပိတ်ရန်
                </button>
              </div>
              <UniversityCard university={selectedUniversity} userMarks={marks} />
            </div>
          )}
          
          {marks !== null && (
            <>
              <WarningBanner marks={marks['6-subjects']} />
              
              <FilterBar
                currentFilter={filter}
                onFilterChange={handleFilterChange}
                types={allTypes}
                totalEligible={totalEligible}
              />
              
              <ResultsList 
                universities={eligibleUniversities}
                totalEligible={totalEligible}
                marks={marks}
                marksMode={marksMode}
              />
            </>
          )}
        </main>
        
        <Footer />
      </div>
    </>
  )
}
