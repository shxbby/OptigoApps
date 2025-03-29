import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import { Mail } from "lucide-react"
import "./ForgotPassword.css"

function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!email || !emailPattern.test(email)) {
      setError("Please enter a valid email address.")
      return
    }

    setError("")
    setIsSubmitting(true)

    try {
      const response = await fetch("http://localhost:5000/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()
      if (response.ok) {
        alert(data.message)
        navigate("/OTPVerification")
      } else {
        setError(data.message)
      }
    } catch (error) {
      console.error("Error:", error)
      setError("An error occurred. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="forgot-container">
      <div className="forgot-card">
        {/* Left Side - Form */}
        <div className="forgot-left">
          <h2 className="forgot-title">FORGOT PASSWORD</h2>
          <p className="forgot-subtitle">Enter your email and we'll send you a reset link.</p>

          {error && <p className="error-message">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Email Address</label>
              <div className="input-with-icon">
                {/* <Mail className="input-icon" size={18} /> */}
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="forgot-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="forgot-button" disabled={isSubmitting}>
              {isSubmitting ? "SENDING..." : "SEND EMAIL"}
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="forgot-right">
          <div className="illustration-container">
            <img
              src="/assets/Fpass.jpg"
              alt="Fpassword"
              className="forgot-image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword

