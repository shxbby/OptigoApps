import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"
// import { Eye } from "lucide-react"
import "./LoginForm.css"

export default function LoginForm() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  })

  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (credentials.password !== credentials.confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    try {
      const response = await axios.post("http://localhost:5000/login", credentials)
      console.log("Login Successful:", response.data)

      setSuccess("Login successful! Redirecting...")
      localStorage.setItem("user", JSON.stringify(response.data))
      setTimeout(() => navigate("/Home"), 1500)
    } catch (error) {
      console.error("Error logging in:", error)
      setError("Invalid credentials. Please try again.")
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Left Side - Login Form */}
        <div className="login-left">
          <h2 className="login-title">LOGIN</h2>
          <p className="login-subtitle">How to get started task</p>

          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}

          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                value={credentials.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-container">
              <label>Password</label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
                <button type="button" className="password-toggle" onClick={togglePasswordVisibility}>
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
                  placeholder="Confirm your password"
                  value={credentials.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <button type="button" className="password-toggle" onClick={toggleConfirmPasswordVisibility}>
                  {/* <Eye size={18} /> */}
                </button>
              </div>
            </div>

            <button type="submit" className="login-button">
              LOGIN NOW
            </button>

            <p className="forgot-password">
              <Link to="/ForgotPassword">Forgot Password?</Link>
            </p>
          </form>

          <p className="register-link">
            Don't have an account? <Link to="/ragister">Register here</Link>
          </p>
        </div>

        {/* Right Side - Image Section */}
        <div className="login-right">
          <div className="illustration-container">
        <img
          src="/assets/login.jpg"
          alt="Login Illustration"
        />
          </div>
        </div>
      </div>
    </div>
  )
}

