import { useEffect, useState } from 'react'
import { Link, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ShaadiForm from './pages/ShaadiForm.jsx'
import './App.css'

function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const targetId = location.hash.replace('#', '')
    const targetEl = document.getElementById(targetId)
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location.hash, location.pathname])

  return (
    <div className="page">
      <header className="nav">
        <Link className="brand" to="/">
          <span className="brand-mark" aria-hidden="true">*</span>
          <span className="brand-name">RunningShaadi.com</span>
        </Link>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/#services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/#process" onClick={() => setMenuOpen(false)}>Process</Link>
          <Link to="/#work" onClick={() => setMenuOpen(false)}>Results</Link>
          <Link className="nav-cta" to="/book-shaadi" onClick={() => setMenuOpen(false)}>Book a Shaadi</Link>
        </nav>
        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div>
          <span className="brand-name">RunningShaadi.com</span>
          <p> **Only for experiment and fun**</p>
        </div>
        <div className="footer-links">
          <Link to="/#services">Services</Link>
          <Link to="/#process">Process</Link>
          <Link to="/#work">Results</Link>
        </div>
        <div className="footer-note">(c) 2026 GauravNotYours. All rights are not reserved.</div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/book-shaadi" element={<ShaadiForm />} />
      </Route>
    </Routes>
  )
}

export default App
