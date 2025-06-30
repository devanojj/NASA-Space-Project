import { useState, useEffect } from 'react'

const API_BASE = import.meta.env.VITE_API_URL || ''

export default function App() {
  const [apod, setApod] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [date, setDate] = useState('')

  const fetchApod = (selectedDate = '') => {
    setLoading(true)
    setError(null)
    const url = selectedDate
      ? `${API_BASE}/api/apod?date=${selectedDate}`
      : `${API_BASE}/api/apod`
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`API error: ${res.status}`)
        return res.json()
      })
      .then(data => {
        setApod(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setError(err.message)
        setLoading(false)
      })
  }

  // Fetch today's APOD on mount
  useEffect(() => {
    fetchApod()
  }, [])

  // When date changes, fetch APOD for that date
  useEffect(() => {
    if (date) fetchApod(date)
  }, [date])

  return (
    <div className="app-container">
      <h1>NASA Astronomy Picture of the Day</h1>
      <input
        type="date"
        value={date}
        max={new Date().toISOString().split('T')[0]}
        onChange={e => setDate(e.target.value)}
      />
      {loading && <p>Loading NASA’s Image of the Day…</p>}
      {error && <p>Error: {error}</p>}
      {apod && !loading && !error && (
        <div>
          <h2>{apod.title}</h2>
          <img
            src={apod.url}
            alt={apod.title}
          />
          <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
            {apod.explanation}
          </p>
        </div>
      )}
    </div>
  )
}


