import { useState } from 'react'
import { Link } from 'react-router-dom'

function ShaadiForm() {
  const [submitState, setSubmitState] = useState('idle')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    try {
      setSubmitState('submitting')
      const response = await fetch('https://project4-back.vercel.app/api/gg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`)
      }
      setSubmitState('success')
    } catch (error) {
      console.error('Failed to submit form', error)
      setSubmitState('error')
    }
  }

  return (
    <section className="section form-page">
      {submitState === 'success' ? (
        <div className="form-card">
          <div className="form-header">
            <p className="eyebrow">Request received</p>
            <h2>Your request is submitted</h2>
            <p className="form-sub">We will reach you soon.</p>
          </div>
          <div className="form-actions">
            <Link className="primary" to="/">Back to home</Link>
          </div>
        </div>
      ) : (
      <>
        <div className="form-header">
          <p className="eyebrow">Book a Shaadi</p>
          <h2>Tell us about you and your plan</h2>
          <p className="form-sub">
            Share the details and our team will reach out with a safe, private plan within 24 hours.
          </p>
        </div>

        <div className="form-card">
          <form className="shaadi-form" onSubmit={handleSubmit}>
          <section className="form-section">
            <div className="form-section-title">
              <h3>Your details</h3>
              <p>Tell us about you and how to reach you.</p>
            </div>
            <div className="form-grid">
              <label className="form-field">
                <span>Your name</span>
                <input type="text" name="name" placeholder="Your full name" required />
              </label>
              <label className="form-field">
                <span>Date of birth</span>
                <input type="date" name="yourDob" required />
              </label>
              <label className="form-field">
                <span>Phone</span>
                <input type="tel" name="phone" placeholder="+91 98765 43210" required />
              </label>
              <label className="form-field">
                <span>Email</span>
                <input type="email" name="email" placeholder="name@email.com" required />
              </label>
              <label className="form-field">
                <span>City</span>
                <input type="text" name="city" placeholder="Your current city" required />
              </label>
              <label className="form-field">
                <span>Family financial and power status</span>
                <select name="familyStatus" defaultValue="" required>
                  <option value="" disabled>Select one</option>
                  <option value="classic">Weak</option>
                  <option value="secure">Strong</option>
                  <option value="premium">Powerful</option>
                </select>
              </label>
            </div>
          </section>

          <section className="form-section">
            <div className="form-section-title">
              <h3>Partner details</h3>
              <p>Share your partner info</p>
            </div>
            <div className="form-grid">
              <label className="form-field">
                <span>Partner name</span>
                <input type="text" name="partner" placeholder="Partner full name" required />
              </label>
              <label className="form-field">
                <span>Partener's Date of birth</span>
                <input type="date" name="partnerDob" required />
              </label>
              <label className="form-field">
                <span>Partner phone</span>
                <input type="tel" name="partnerPhone" placeholder="+91 98765 43210" required />
              </label>
              <label className="form-field">
                <span>Partner email</span>
                <input type="email" name="partnerEmail" placeholder="partner@email.com" required />
              </label>
              <label className="form-field">
                <span>Partner city</span>
                <input type="text" name="partnerCity" placeholder="Partner city" required />
              </label>
              <label className="form-field">
                <span>Partner's Family financial and power status</span>
                <select name="partnerFamilyStatus" defaultValue="" required>
                  <option value="" disabled>Select one</option>
                  <option value="classic">Weak</option>
                  <option value="secure">Strong</option>
                  <option value="premium">Powerful</option>
                </select>
              </label>
            </div>
          </section>

          <section className="form-section">
            <div className="form-section-title">
              <h3>Other details</h3>
              <p>Help us plan the perfect secure shaadi.</p>
            </div>
            <div className="form-grid">
              <label className="form-field">
                <span>Preferred date</span>
                <input type="date" name="preferredDate" required />
              </label>
              <label className="form-field">
                <span>Budget range</span>
                <select name="budget" defaultValue="" required>
                  <option value="" disabled>Select one</option>
                  <option value="under-50">Under 50k</option>
                  <option value="50-100">50k - 1L</option>
                  <option value="100-250">1L - 2.5L</option>
                  <option value="custom">Custom</option>
                </select>
              </label>
            </div>
            <label className="form-field full">
              <span>Extra details</span>
              <textarea
                name="details"
                rows="4"
                placeholder="Tell us about timing, safety needs, and any legal help required"
                required
              />
            </label>
            <div className="form-field full">
              <span>Honeymoon required</span>
              <div className="radio-group">
                <label className="radio-option">
                  <input type="radio" name="honeymoon" value="yes" required />
                  <span>Yes</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="honeymoon" value="no" required />
                  <span>No</span>
                </label>
              </div>
              <p className="form-note">We charge some extra charges for Honeymoon plan</p>
            </div>
          </section>

          <div className="form-actions">
            <button className="primary" type="submit" disabled={submitState === 'submitting'}>
              {submitState === 'submitting' ? 'Submitting...' : 'Submit request'}
            </button>
            <Link className="ghost" to="/">Back to home</Link>
          </div>

          {submitState === 'error' && (
            <p className="form-note">Sorry, something went wrong. Please try again.</p>
          )}

          <p className="form-note">We keep your information private and never share it without consent.</p>
          </form>
        </div>
      </>
      )}
    </section>
  )
}

export default ShaadiForm
