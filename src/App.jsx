import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="page">
      <header className="nav">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">◼</span>
          <span className="brand-name">RunningShaadi.com</span>
        </div>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#work">Results</a>
          <button className="nav-cta">Book a Shaadi</button>
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
        <section className="hero">
          <div className="hero-content">
            <h1>Bhagenge aap aur bachayenge hum</h1>
            <p className="hero-sub">
              We are a professional wedding planning team that takes complete responsibility for your journey—from planning every detail to flawlessly executing your wedding.
            </p>
            <div className="hero-actions">
              <button className="primary">Schedule your Shaadi</button>
            </div>
            <div className="hero-metrics">
              <div>
                <strong>0+</strong>
                <span>Client registered</span>
              </div>
              <div>
                <strong>4.9/5</strong>
                <span>average rating</span>
              </div>
              <div>
                <strong>IN 4 days</strong>
                <span>Shadi pakki</span>
              </div>
            </div>
          </div>
          <div className="hero-card">
            <div className="card-top">
              <h3>Service Snapshot</h3>
              <p>Everything you need to make your escape seamless and stress-free.</p>
            </div>
            <ul className="card-list">
              <li>Pickup service from home also for your partner</li>
              <li>Fully secured hotel rooms</li>
              <li>Z+ security from your Family mambers</li>
              <li>Police And legal support</li>
              <li>Future Honey moon package</li>
            </ul>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="section-title">
            <p className="eyebrow">Services</p>
            <h2>What We Offer</h2>
          </div>
          <div className="service-grid">
            <article>
              <h3>Pickup</h3>
              <p>Pickup service from home for you and for your partner both</p>
            </article>
            <article>
              <h3>5 Star Hotel</h3>
              <p>We are providing you 5 star hotel and stay without leaking your identity</p>
            </article>
            <article>
              <h3>Protection</h3>
              <p>We providing you Z+ protaction from your family mambers and also for you partner</p>
            </article>
            <article>
              <h3>Police</h3>
              <p>We gives you police support without leaking your personal information</p>
            </article>
            <article>
              <h3>Legal</h3>
              <p>We manage your all legal matters and help rebuild and strengthen your relationship with your family. </p>
            </article>
            <article>
              <h3>Honeymoon trip</h3>
              <p>We offer to plan your honey moon plan all over india</p>
            </article>
          </div>
        </section>

        <section id="process" className="section process">
          <div className="section-title">
            <p className="eyebrow">Process</p>
            <h2>How can you apply</h2>
          </div>
          <div className="process-steps">
            <div className="step">
              <span>01</span>
              <h3>Schedule</h3>
              <p>Register, fill all information about you and your parterner</p>
            </div>
            <div className="step">
              <span>02</span>
              <h3>Confirmation</h3>
              <p>Upload your legal document and give proof of confirmation of you and your partner</p>
            </div>
            <div className="step">
              <span>03</span>
              <h3>Wait</h3>
              <p>Kindly wait for our team to get in touch with you.</p>
            </div>
            <div className="step">
              <span>04</span>
              <h3>Run</h3>
              <p>Once everything is finalized, we will pick you up.</p>
            </div>
          </div>
        </section>

        <section id="work" className="section results">
          <div className="section-title">
            <p className="eyebrow">Results</p>
            <h2>Our Proven Outcomes.</h2>
          </div>
          <div className="results-grid">
            <div className="result-card">
              <h3>+95%</h3>
              <p>The couple got married smoothly without any complications.</p>
            </div>
            <div className="result-card">
              <h3>2.4x</h3>
              <p>We reach Higher booking rate in 2026</p>
            </div>
            <div className="result-card">
              <h3>14 days</h3>
              <p>Average time to soutout to all matters</p>
            </div>
          </div>
        </section>

        <section className="section testimonials">
          <div className="section-title">
            <p className="eyebrow">Client Love</p>
            <h2>Trusted by many couple</h2>
          </div>
          <div className="testimonial-grid">
            <blockquote>
              “I extend my sincere appreciation to RunningShaadi.com for their support in making my wedding successful.”
              <span>— Aditya Gupta, 12th passout</span>
            </blockquote>
            <blockquote>
              “I appreciate RunningShaadi.com for reducing our stress and making the entire process simple and peaceful.”
              <span>— Rahul Yadav, teacher</span>
            </blockquote>
            <blockquote>
              “My heartfelt thanks to RunningShaadi.com for their guidance and support during a crucial time in our lives.”
              <span>— Priya Singh, Random</span>
            </blockquote>
          </div>
        </section>

      </main>

      <footer className="footer">
        <div>
          <span className="brand-name">RunningShaadi.com</span>
          <p> **Only for experiment and fun**</p>
        </div>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#work">Results</a>
        </div>
        <div className="footer-note">© 2026 GauravNotYours. All rights are not reserved.</div>
      </footer>
    </div>
  )
}

export default App
