import { useState } from 'react'

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
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
        <h1>Login</h1>
        <p>
          Enter your username and password to continue.
        </p>
      </div>

      <form className="form-layout" onSubmit={handleSubmit}>
        <label className="form-group" htmlFor="login-username">
          <span>Username</span>
          <input
            id="login-username"
            name="username"
            type="text"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>

        <label className="form-group" htmlFor="login-password">
          <span>Password</span>
          <input
            id="login-password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
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