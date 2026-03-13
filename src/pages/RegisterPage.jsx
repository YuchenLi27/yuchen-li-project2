export default function LoginPage() {
  return (
    <section className="card form-card">
      <h1>Login</h1>
      <p>Enter your username and password to continue.</p>

      <form className="form-layout">
        <label className="form-group">
          <span>Username</span>
          <input type="text" placeholder="Enter username" />
        </label>

        <label className="form-group">
          <span>Password</span>
          <input type="password" placeholder="Enter password" />
        </label>

        <button type="submit" className="btn">Login</button>
      </form>
    </section>
  )
}