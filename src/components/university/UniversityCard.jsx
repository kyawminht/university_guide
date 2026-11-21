import { useState } from 'react'
import UniversityHeader from './UniversityHeader'
import MajorItem from './MajorItem'

export default function UniversityCard({ university, userMarks = {} }) {
  const [expanded, setExpanded] = useState(false)
  const safeUserMarks = userMarks || {}
  
  const eligibleMajors = (university.majors || []).map(major => {
    let requiredMark = major.requiredMarks ?? university.requiredMarks
    
    if (requiredMark === null || requiredMark === undefined) {
      return { ...major, req: 'ယှဉ်ပြိုင်', userMarks: null, ok: 'competitive' }
    }
    
    let userMark = 0
    const subjectCombination = major.subjectCombination || university.subjectCombination
    
    if (subjectCombination === '4-subjects') {
      userMark = safeUserMarks['4-subjects'] || 0
    } else if (subjectCombination === '2-subjects') {
      userMark = safeUserMarks['2-subjects'] || 0
    } else {
      userMark = safeUserMarks['6-subjects'] || 0
    }
    
    return { 
      ...major, 
      req: requiredMark, 
      userMarks: userMark, 
      ok: userMark >= requiredMark 
    }
  })
  
  const eligibleCount = eligibleMajors.filter(m => m.ok === true).length
  const totalMajors = eligibleMajors.length
  
  if (!university) return null
  
  return (
    <article className="bg-white dark:bg-dark-card border border-app-border dark:border-dark-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
      <UniversityHeader university={university} userMarks={safeUserMarks} />
      
      {totalMajors > 0 && (
        <>
          <div className="h-px bg-app-border dark:bg-dark-border mx-4" />
          
          <div className="flex-1 min-h-0 flex flex-col">
            <div className="p-4 pb-0">
              <button
                onClick={() => setExpanded(!expanded)}
                className="w-full flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <h4 className="text-xs text-app-muted font-semibold">
                    ဘာသာရပ်များ ({totalMajors})
                  </h4>
                 
                </div>
              </button>
            </div>
            
            <div 
              className={`transition-all duration-300 ${
                expanded ? 'max-h-80' : 'max-h-36'
              } overflow-y-auto`}
            >
              <div className="p-4 pt-2 space-y-1">
                {eligibleMajors.map((major, index) => (
                  <MajorItem key={index} major={major} />
                ))}
              </div>
            </div>
            
            {!expanded && totalMajors > 3 && (
              <div className="px-4 pb-3 pt-0">
                <button
                  onClick={() => setExpanded(true)}
                  className="w-full text-xs text-center text-app-accent hover:underline py-1"
                >
                  + {totalMajors - 3} ထပ်ကြည့်ရန်
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </article>
  )
}
