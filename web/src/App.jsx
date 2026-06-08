import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Account from './pages/Account'
import Settings from './pages/Settings'
import './App.css'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
  // Check if user saved dark mode preference
  const isDark = localStorage.getItem('darkMode') === 'true'
  setDarkMode(isDark)
  
  // Apply dark mode if user previously chose it
  if (isDark) {
    document.documentElement.classList.add('dark')
  } else {
    // Make sure dark class is removed (light mode)
    document.documentElement.classList.remove('dark')
  }
}, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode)
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/account" element={<Account />} />
          <Route path="/settings" element={<Settings darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        </Routes>
      </Layout>
    </Router>
  )
}