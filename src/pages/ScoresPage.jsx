const scores = [
  { username: 'PixelFox', completed: 21 },
  { username: 'NightGrid', completed: 18 },
  { username: 'BlueTiger', completed: 15 },
  { username: 'SudokuStar', completed: 12 },
  { username: 'NovaPlayer', completed: 9 },
]

export default function ScoresPage() {
  return (
    <section className="card">
      <h1>High Scores</h1>
      <p>Mock leaderboard data for the Sudoku app.</p>

      <div className="table-wrap">
        <table className="score-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>Completed Games</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((player, index) => (
              <tr key={player.username}>
                <td>{index + 1}</td>
                <td>{player.username}</td>
                <td>{player.completed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}