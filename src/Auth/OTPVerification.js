"use client"

import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
// import { Mail } from "lucide-react"
import "./otp-verification.css"

function OTPVerification() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const inputRefs = useRef([])
  const [error, setError] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // Focus the first input when component mounts
    inputRefs.current[0]?.focus()
  }, [])

  const handleChange = (index, value) => {
    if (isNaN(value) || value.length > 1) return

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index, e) => {
    // Handle backspace to go to previous input
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text").trim()

    // Check if pasted content is a 6-digit number
    if (/^\d{6}$/.test(pastedData)) {
      const digits = pastedData.split("")
      setOtp(digits)

      // Focus the last input
      inputRefs.current[5]?.focus()
    }
  }

  const verifyOtp = async () => {
    const enteredOtp = otp.join("")

    if (!email.trim()) {
      setError("Email is required.")
      return
    }

    if (enteredOtp.length !== 6) {
      setError("Please enter a valid 6-digit OTP.")
      return
    }

    setError(null)
    setIsSubmitting(true)

    try {
      const response = await axios.post("http://localhost:5000/verify-otp", {
        email,
        otp: enteredOtp,
      })
      alert(response.data.message)
      navigate("/CreatePassword")
    } catch (err) {
      console.error("Error during OTP verification:", err)
      setError(err.response?.data?.message || "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="otp-container">
      <div className="otp-card">
        {/* Left Side - Form */}
        <div className="otp-left">
          <h2 className="otp-title">OTP VERIFICATION</h2>
          <p className="otp-subtitle">Enter the OTP sent to your email to proceed.</p>

          {error && <p className="error-message">{error}</p>}

          <div className="input-container">
            <label>Email Address</label>
            <div className="input-with-icon">
              {/* <Mail className="input-icon" size={18} /> */}
              <input
                type="email"
                placeholder="Enter your email"
                className="otp-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="otp-field-label">Enter OTP</div>
          <div className="otp-box" onPaste={handlePaste}>
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(el) => (inputRefs.current[index] = el)}
                className="otp-digit"
              />
            ))}
          </div>

          <button type="button" className="otp-button" onClick={verifyOtp} disabled={isSubmitting}>
            {isSubmitting ? "VERIFYING..." : "VERIFY OTP"}
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="otp-right">
          <div className="illustration-container">
            <img
              src="/assets/otp.jpg"
              alt="Otp"
              className="otp-image"

            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OTPVerification

