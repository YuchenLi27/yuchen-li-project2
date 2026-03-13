import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <section className="hero card home-hero">
      <div className="hero-badge">Single Player Sudoku</div>
      <h1>Sudoku</h1>
      <p>
        Welcome to a React Sudoku app with easy and normal modes.
        Read the rules or head to the game selection page to start playing.
      </p>

      <div className="button-row">
        <Link to="/games" className="btn">Go to Games</Link>
        <Link to="/rules" className="btn btn-secondary">View Rules</Link>
      </div>
    </section>
  )
}