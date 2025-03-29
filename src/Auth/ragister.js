"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom"
// import { Eye } from "lucide-react"
import "./RegistrationForm.css"

export default function RegistrationForm() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    mobileNumber: "",
    address: "",
    department: "",
    password: "",
    confirm_password: "",
  })

  const [errors, setErrors] = useState({
    mobileNumber: "",
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const departments = ["HR", "Docmention", "Support", "Testing", "Sales", "Registration"]

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === "mobileNumber") {
      if (!/^\d{0,10}$/.test(value)) return
      setErrors({ ...errors, mobileNumber: value.length !== 10 ? "Mobile number must be 10 digits" : "" })
    }

    if (name === "email") {
      setErrors({ ...errors, email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Invalid email format" })
    }

    if (name === "confirm_password" || name === "password") {
      setErrors({
        ...errors,
        password: formData.password === value || formData.confirm_password === value ? "" : "Passwords do not match",
      })
    }

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.mobileNumber.length !== 10) {
      setErrors({ ...errors, mobileNumber: "Mobile number must be 10 digits" })
      return
    }

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setErrors({ ...errors, email: "Invalid email format" })
      return
    }

    if (formData.password !== formData.confirm_password) {
      setErrors({ ...errors, password: "Passwords do not match" })
      return
    }

    try {
      const response = await axios.post("http://localhost:5000/insert", formData)
      console.log("Registration Successful:", response.data)
      navigate("/")
    } catch (error) {
      console.error("Error registering employee:", error)
    }
  }

  return (
    <div className="registration-wrapper">
      <div className="registration-container">
        {/* Left Side - Registration Form */}
        <div className="registration-left">
          <h2 className="registration-title">REGISTER</h2>
          <p className="registration-subtitle">Create your account</p>

          <form onSubmit={handleSubmit}>
            <div className="input-row">
              <div className="input-container">
                <label>First Name</label>
                <input
                  type="text"
                  name="FirstName"
                  placeholder="Enter first name"
                  value={formData.FirstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-container">
                <label>Last Name</label>
                <input
                  type="text"
                  name="LastName"
                  placeholder="Enter last name"
                  value={formData.LastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-container">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            <div className="input-container">
              <label>Mobile Number</label>
              <input
                type="text"
                name="mobileNumber"
                placeholder="Enter mobile number"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
              {errors.mobileNumber && <p className="error-message">{errors.mobileNumber}</p>}
            </div>

            <div className="input-container">
              <label>Address</label>
              <input
                type="text"
                name="address"
                placeholder="Enter address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-container">
              <label>Department</label>
              <select name="department" value={formData.department} onChange={handleChange} required>
                <option value="">Select Department</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-container">
              <label>Password</label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
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
                  name="confirm_password"
                  placeholder="Confirm password"
                  value={formData.confirm_password}
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
              {errors.password && <p className="error-message">{errors.password}</p>}
            </div>

            <button type="submit" className="register-button">
              REGISTER NOW
            </button>
          </form>

          <p className="login-link">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>

        {/* Right Side - Image Section */}
        <div className="registration-right">
          <div className="illustration-container">
            <img
              src="/assets/register.jpg"
              alt="Register Illustration"
              className="registration-image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

