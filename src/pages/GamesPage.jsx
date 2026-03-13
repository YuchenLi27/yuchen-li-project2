import { Link } from 'react-router-dom'

const games = [
  {
    id: 1,
    name: 'Easy Sudoku',
    author: 'A. Tan',
    description: 'A 6x6 board with half the cells filled in.',
    path: '/games/easy',
  },
  {
    id: 2,
    name: 'Normal Sudoku',
    author: 'M. Rivera',
    description: 'A classic 9x9 board with 28–30 starting cells.',
    path: '/games/normal',
  },
]

export default function GamesPage() {
  return (
    <section>
      <div className="page-header">
        <h1>Game Selection</h1>
        <p>Choose a mode to start a new puzzle.</p>
      </div>

      <div className="grid-2">
        {games.map((game) => (
          <article key={game.id} className="card game-card">
            <h2>{game.name}</h2>
            <p><strong>Author:</strong> {game.author}</p>
            <p>{game.description}</p>
            <Link to={game.path} className="btn">Open Game</Link>
          </article>
        ))}
      </div>
    </section>
  )
}