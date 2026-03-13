import { Link } from 'react-router-dom'

const games = [
  {
    id: 1,
    name: 'Easy Sudoku',
    author: 'A. Tan',
    description: 'A 6x6 puzzle with half of the board filled in.',
    path: '/games/easy',
  },
  {
    id: 2,
    name: 'Normal Sudoku',
    author: 'M. Rivera',
    description: 'A 9x9 puzzle with about 28 to 30 starting cells.',
    path: '/games/normal',
  },
]

export default function GamesPage() {
  return (
    <section>
      <div className="page-header">
        <h1>Game Selection</h1>
        <p>Select a mode to start a new Sudoku puzzle.</p>
      </div>

      <div className="grid-2">
        {games.map((game) => (
          <article key={game.id} className="card game-card">
            <div className="game-card-top">
              <h2>{game.name}</h2>
              <span className="game-chip">{game.name.includes('Easy') ? '6x6' : '9x9'}</span>
            </div>

            <p><strong>Author:</strong> {game.author}</p>
            <p>{game.description}</p>

            <div className="button-row">
              <Link to={game.path} className="btn">Start Game</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}