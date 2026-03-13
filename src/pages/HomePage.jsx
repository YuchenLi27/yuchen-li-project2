import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <section className="hero card">
      <div className="hero-badge">React + Context Sudoku</div>
      <h1>Sudoku</h1>
      <p>
        A single-player Sudoku app with easy and normal modes, built with React,
        React Router, and Context API.
      </p>

      <div className="button-row">
        <Link to="/games" className="btn">Play Now</Link>
        <Link to="/rules" className="btn btn-secondary">Read Rules</Link>
      </div>
    </section>
  )
}