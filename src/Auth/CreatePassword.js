import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
// import { Mail, Eye } from "lucide-react"
import "./CreatePassword.css"

export default function CreatePasswordForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    setLoading(true)
    try {
      await axios.post("http://localhost:5000/CreatePassword", formData)
      setSuccess("Password created successfully! Redirecting...")
      setTimeout(() => navigate("/login"), 1500)
    } catch (error) {
      setError("Failed to create password. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="create-password-container">
      <div className="create-password-box">
        {/* Left Side - Form */}
        <div className="create-password-form">
          <h2 className="create-password-title">RESET PASSWORD</h2>
          <p className="create-password-subtitle">Set a strong password for your account</p>

          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}

          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Email</label>
              <div className="input-with-icon">
                {/* <Mail className="input-icon" size={18} /> */}
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-container">
              <label>New Password</label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter new password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                  {/* <Eye size={18} /> */}
                </button>
              </div>
            </div>

            <div className="input-container">
              <label>Confirm Password</label>
              <div className="password-input-wrapper">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm new password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {/* <Eye size={18} /> */}
                </button>
              </div>
            </div>

            <button type="submit" className="create-password-button" disabled={loading}>
              {loading ? "CREATING..." : "CREATE PASSWORD"}
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="create-password-image">
          <div className="illustration-container">
            <img
              src="/assets/resetpassword.jpg"
              alt="Reset Password"

            />
          </div>
        </div>
      </div>
    </div>
  )
}

