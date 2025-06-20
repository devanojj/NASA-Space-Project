import { useState, useEffect } from 'react'

const API_BASE = import.meta.env.VITE_API_URL || ''


export default function App() {
  const [apod, setApod] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
 
  useEffect(() => {
    fetch(`${API_BASE}/api/apod`)
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
  }, [])

  if (loading) return <p>Loading NASA’s Image of the Day…</p>
  if (error)   return <p>Error: {error}</p>

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', textAlign: 'center' }}>
      <h1>{apod.title}</h1>
      <img
        src={apod.url}
        alt={apod.title}
        style={{ width: '100%', borderRadius: 8 }}
      />
      <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
        {apod.explanation}
      </p>
      <p style={{ fontSize: '0.8rem', color: '#666' }}>
        © {apod.copyright || 'Public Domain'} – {apod.date}
      </p>
    </div>
  )
}



