import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav">
        <NavLink to="/" className="brand">
          Sudoku
        </NavLink>

        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/games">Games</NavLink>
          <NavLink to="/games/easy">Easy</NavLink>
          <NavLink to="/games/normal">Normal</NavLink>
          <NavLink to="/rules">Rules</NavLink>
          <NavLink to="/scores">Scores</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      </nav>
    </header>
  )
}