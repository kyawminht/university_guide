import { useState, useMemo } from 'react'
import { universities } from '../../data/universities'

export default function MarksInput({ 
  onMarksSubmit, 
  onFourSubjectSubmit, 
  onModeChange,
  initialSixSubjectMarks = 240, 
  initialFourSubjectMarks = 240 
}) {
const [sixSubjectValue, setSixSubjectValue] = useState(initialSixSubjectMarks || 240)
const [fourSubjectValue, setFourSubjectValue] = useState(initialFourSubjectMarks || 240)
  const [activeTab, setActiveTab] = useState('total')
  const [error, setError] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // Handle 6-subject change - triggers filter in real-time
  const handleSixSubjectChange = (value) => {
    const numValue = parseInt(value) || 0
    if (numValue >= 240 && numValue <= 600) {
      setSixSubjectValue(numValue)
      setError('')
      if (onMarksSubmit) {
        onMarksSubmit(numValue)
      }
    } else if (value === '') {
      setSixSubjectValue('')
    } else if (numValue < 240) {
      setSixSubjectValue(240)
      if (onMarksSubmit) {
        onMarksSubmit(240)
      }
    } else if (numValue > 600) {
      setSixSubjectValue(600)
      if (onMarksSubmit) {
        onMarksSubmit(600)
      }
    }
  }

  // Handle slider change for 6-subject - real-time filtering
  const handleSixSubjectSlider = (e) => {
    const value = parseInt(e.target.value)
    setSixSubjectValue(value)
    if (onMarksSubmit) {
      onMarksSubmit(value)
    }
  }

  // Handle 4-subject change - triggers filter in real-time
  const handleFourSubjectChange = (value) => {
    const numValue = parseInt(value) || 0
    if (numValue >= 240 && numValue <= 400) {
      setFourSubjectValue(numValue)
      setError('')
      if (onFourSubjectSubmit) {
        onFourSubjectSubmit(numValue)
      }
    } else if (value === '') {
      setFourSubjectValue('')
    } else if (numValue < 240) {
      setFourSubjectValue(240)
      if (onFourSubjectSubmit) {
        onFourSubjectSubmit(240)
      }
    } else if (numValue > 400) {
      setFourSubjectValue(400)
      if (onFourSubjectSubmit) {
        onFourSubjectSubmit(400)
      }
    }
  }

  // Handle slider change for 4-subject - real-time filtering
  const handleFourSubjectSlider = (e) => {
    const value = parseInt(e.target.value)
    setFourSubjectValue(value)
    if (onFourSubjectSubmit) {
      onFourSubjectSubmit(value)
    }
  }

  // Search universities by Burmese or English name
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return []
    const query = searchQuery.toLowerCase()
    return universities
      .filter(uni => 
        uni.nameMy?.toLowerCase().includes(query) ||
        uni.nameEn?.toLowerCase().includes(query) ||
        uni.locationMy?.toLowerCase().includes(query) ||
        uni.locationEn?.toLowerCase().includes(query)
      )
      .slice(0, 8)
  }, [searchQuery])

  const toggleSearch = () => {
    setShowSearch(!showSearch)
    setSearchQuery('')
  }

  return (
    <div className="bg-white dark:bg-dark-card border border-app-border dark:border-dark-border rounded-xl p-5 mb-4 shadow-sm mt-8">
      {/* Tab Selection */}
      <div className="flex gap-2 mb-4 border-b border-app-border dark:border-dark-border pb-2">
        <button
          onClick={() => {
            setActiveTab('total')
            setError('')
            onModeChange?.('6-subjects')
          }}
          className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-all ${
            activeTab === 'total'
              ? 'text-app-accent border-b-2 border-app-accent'
              : 'text-app-muted hover:text-app-text'
          }`}
        >
          📚 စုစုပေါင်းအမှတ် (၆ဘာသာ)
        </button>
        <button
          onClick={() => {
            setActiveTab('subjects')
            setError('')
            onModeChange?.('4-subjects')
          }}
          className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-all ${
            activeTab === 'subjects'
              ? 'text-app-accent border-b-2 border-app-accent'
              : 'text-app-muted hover:text-app-text'
          }`}
        >
          💻 နည်းပညာတက္ကသိုလ်များ (၄ဘာသာ)
        </button>
      </div>

      {/* 6-Subject Total Input */}
      {activeTab === 'total' && (
        <div>
          <label className="block text-sm text-app-muted dark:text-dark-muted mb-2">
            သင်ရရှိသော စုစုပေါင်းအမှတ် (စုစုပေါင်း ၆ဘာသာ)
          </label>
          
          <div className="flex gap-2 items-stretch">
            <button
              type="button"
              onClick={() => handleSixSubjectChange(Math.max(240, (parseInt(sixSubjectValue) || 240) - 1))}
              className="h-[52px] w-12 flex items-center justify-center border-1.5 border-app-border dark:border-dark-border rounded-lg bg-app-bg dark:bg-dark-bg text-app-text dark:text-dark-text hover:border-app-accent hover:text-app-accent transition-colors text-xl font-bold"
              aria-label="အမှတ် လျှော့ရန်"
            >
              −
            </button>
            <input
              type="number"
              min="240"
              max="600"
              value={sixSubjectValue}
              onChange={(e) => handleSixSubjectChange(e.target.value)}
              placeholder="ဥပမာ — 480"
              className="flex-1 h-[52px] border-1.5 border-app-border dark:border-dark-border rounded-lg px-4 font-bold text-xl bg-app-bg dark:bg-dark-bg text-app-text dark:text-dark-text focus:border-app-accent outline-none transition-colors"
            />
            <button
              type="button"
              onClick={() => handleSixSubjectChange(Math.min(600, (parseInt(sixSubjectValue) || 240) + 1))}
              className="h-[52px] w-12 flex items-center justify-center border-1.5 border-app-border dark:border-dark-border rounded-lg bg-app-bg dark:bg-dark-bg text-app-text dark:text-dark-text hover:border-app-accent hover:text-app-accent transition-colors text-xl font-bold"
              aria-label="အမှတ် တိုးရန်"
            >
              +
            </button>
            <button
              type="button"
              onClick={toggleSearch}
              className={`h-[52px] w-12 flex items-center justify-center border-1.5 border-app-border dark:border-dark-border rounded-lg transition-colors ${
                showSearch 
                  ? 'bg-app-accent text-white border-app-accent' 
                  : 'bg-app-bg dark:bg-dark-bg text-app-text dark:text-dark-text hover:border-app-accent hover:text-app-accent'
              }`}
              aria-label="တက္ကသိုလ် ရှာဖွေရန်"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Search Box with Animation */}
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${showSearch ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="တက္ကသိုလ်အမည် ရိုက်ထည့်ပါ..."
                className="w-full h-12 border-1.5 border-app-border dark:border-dark-border rounded-lg px-4 pr-10 text-base bg-app-bg dark:bg-dark-bg text-app-text dark:text-dark-text focus:border-app-accent outline-none transition-colors"
                autoFocus={showSearch}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-app-muted hover:text-app-text"
                >
                  ✕
                </button>
              )}
            </div>
            
            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="mt-2 bg-white dark:bg-dark-card border border-app-border dark:border-dark-border rounded-lg shadow-lg max-h-64 overflow-y-auto">
                {searchResults.map((uni) => (
                  <div
                    key={uni.id}
                    className="px-4 py-3 hover:bg-app-bg dark:hover:bg-dark-bg cursor-pointer border-b border-app-border dark:border-dark-border last:border-0 transition-colors"
                  >
                    <div className="font-medium text-app-text dark:text-dark-text">{uni.nameMy}</div>
                    <div className="text-sm text-app-muted dark:text-dark-muted">{uni.nameEn} • {uni.locationMy}</div>
                  </div>
                ))}
              </div>
            )}
            
            {searchQuery && searchResults.length === 0 && (
              <div className="mt-2 text-center text-app-muted dark:text-dark-muted py-4">
                တက္ကသိုလ် မတွေ့ပါ
              </div>
            )}
          </div>

          {/* Slider with 240-600 range */}
          <div className="flex items-center gap-3 mt-3">
            <span className="text-xs font-medium text-app-muted">၂၄၀</span>
            <input
              type="range"
              min="240"
              max="600"
              step="1"
              value={sixSubjectValue || 240}
              onChange={handleSixSubjectSlider}
              className="flex-1 accent-app-accent h-2"
              aria-label="အမှတ် slider"
            />
            <span className="text-xs font-medium text-app-muted">၆၀၀</span>
            <span className="text-sm font-bold text-app-accent min-w-[40px] text-right">
              {sixSubjectValue || '—'}
            </span>
          </div>
          
        </div>
      )}

      {/* 4-Subject Input - Simplified */}
      {activeTab === 'subjects' && (
        <div>
          <div className="mb-3">
            <p className="text-sm font-medium text-app-text mb-1">
              နည်းပညာတက္ကသိုလ်များအတွက် အမှတ်
            </p>
            <p className="text-xs text-app-muted">
              ရူပ + ဓာတု + သင်္ချာ + အင်္ဂလိပ် (၄ဘာသာ) ပေါင်းအမှတ်
            </p>
          </div>
          
          <div className="flex gap-2 items-stretch">
            <button
              type="button"
              onClick={() => handleFourSubjectChange(Math.max(240, (parseInt(fourSubjectValue) || 240) - 1))}
              className="h-[52px] w-12 flex items-center justify-center border-1.5 border-app-border dark:border-dark-border rounded-lg bg-app-bg dark:bg-dark-bg text-app-text dark:text-dark-text hover:border-app-accent hover:text-app-accent transition-colors text-xl font-bold"
              aria-label="အမှတ် လျှော့ရန်"
            >
              −
            </button>
            <input
              type="number"
              min="240"
              max="400"
              value={fourSubjectValue}
              onChange={(e) => handleFourSubjectChange(e.target.value)}
              placeholder="ဥပမာ — 320"
              className="flex-1 h-[52px] border-1.5 border-app-border dark:border-dark-border rounded-lg px-4 font-bold text-xl bg-app-bg dark:bg-dark-bg text-app-text dark:text-dark-text focus:border-app-accent outline-none transition-colors"
            />
            <button
              type="button"
              onClick={() => handleFourSubjectChange(Math.min(400, (parseInt(fourSubjectValue) || 240) + 1))}
              className="h-[52px] w-12 flex items-center justify-center border-1.5 border-app-border dark:border-dark-border rounded-lg bg-app-bg dark:bg-dark-bg text-app-text dark:text-dark-text hover:border-app-accent hover:text-app-accent transition-colors text-xl font-bold"
              aria-label="အမှတ် တိုးရန်"
            >
              +
            </button>
            <button
              type="button"
              onClick={toggleSearch}
              className={`h-[52px] w-12 flex items-center justify-center border-1.5 border-app-border dark:border-dark-border rounded-lg transition-colors ${
                showSearch 
                  ? 'bg-app-accent text-white border-app-accent' 
                  : 'bg-app-bg dark:bg-dark-bg text-app-text dark:text-dark-text hover:border-app-accent hover:text-app-accent'
              }`}
              aria-label="တက္ကသိုလ် ရှာဖွေရန်"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Search Box with Animation */}
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${showSearch ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="တက္ကသိုလ်အမည် ရိုက်ထည့်ပါ..."
                className="w-full h-12 border-1.5 border-app-border dark:border-dark-border rounded-lg px-4 pr-10 text-base bg-app-bg dark:bg-dark-bg text-app-text dark:text-dark-text focus:border-app-accent outline-none transition-colors"
                autoFocus={showSearch}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-app-muted hover:text-app-text"
                >
                  ✕
                </button>
              )}
            </div>
            
            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="mt-2 bg-white dark:bg-dark-card border border-app-border dark:border-dark-border rounded-lg shadow-lg max-h-64 overflow-y-auto">
                {searchResults.map((uni) => (
                  <div
                    key={uni.id}
                    className="px-4 py-3 hover:bg-app-bg dark:hover:bg-dark-bg cursor-pointer border-b border-app-border dark:border-dark-border last:border-0 transition-colors"
                  >
                    <div className="font-medium text-app-text dark:text-dark-text">{uni.nameMy}</div>
                    <div className="text-sm text-app-muted dark:text-dark-muted">{uni.nameEn} • {uni.locationMy}</div>
                  </div>
                ))}
              </div>
            )}
            
            {searchQuery && searchResults.length === 0 && (
              <div className="mt-2 text-center text-app-muted dark:text-dark-muted py-4">
                တက္ကသိုလ် မတွေ့ပါ
              </div>
            )}
          </div>

          {/* Slider with 240-400 range */}
          <div className="flex items-center gap-3 mt-3">
            <span className="text-xs font-medium text-app-muted">၂၄၀</span>
            <input
              type="range"
              min="240"
              max="400"
              step="1"
              value={fourSubjectValue || 240}
              onChange={handleFourSubjectSlider}
              className="flex-1 accent-app-accent h-2"
              aria-label="နည်းပညာတက္ကသိုလ် အမှတ် slider"
            />
            <span className="text-xs font-medium text-app-muted">၄၀၀</span>
            <span className="text-sm font-bold text-app-accent min-w-[40px] text-right">
              {fourSubjectValue || '—'}
            </span>
          </div>
        </div>
      )}

      {error && (
        <p className="mt-3 text-sm text-red-500" role="alert">
          ⚠️ {error}
        </p>
      )}
    </div>
  )
}
