import { useState } from 'react'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    verifyPassword: '',
  })

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <section className="card form-card">
      <div className="page-header">
        <h1>Register</h1>
        <p>
          Create an account with a username and password.
        </p>
      </div>

      <form className="form-layout" onSubmit={handleSubmit}>
        <label className="form-group" htmlFor="register-username">
          <span>Username</span>
          <input
            id="register-username"
            name="username"
            type="text"
            placeholder="Choose a username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>

        <label className="form-group" htmlFor="register-password">
          <span>Password</span>
          <input
            id="register-password"
            name="password"
            type="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>

        <label className="form-group" htmlFor="register-verify-password">
          <span>Verify Password</span>
          <input
            id="register-verify-password"
            name="verifyPassword"
            type="password"
            placeholder="Re-enter your password"
            value={formData.verifyPassword}
            onChange={handleChange}
          />
        </label>

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </section>
  )
}