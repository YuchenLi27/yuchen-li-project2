export default function RulesPage() {
  return (
    <section className="card">
      <h1>Rules</h1>
      <ol className="rules-list">
        <li>Each row must contain each number exactly once.</li>
        <li>Each column must contain each number exactly once.</li>
        <li>Each sub-grid must contain each number exactly once.</li>
        <li>If a number breaks the rules, that square should be considered incorrect.</li>
        <li>Complete the entire board correctly to win the game.</li>
      </ol>

      <div className="credits">
        <h2>Credits</h2>
        <p>Made by: Yuchen Li</p>
        <p>
          GitHub: <a href="https://github.com/YuchenLi27/Sudoku" target="_blank" rel="noreferrer">github.com/yourname</a>
        </p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/yuchen-li-ycl/" target="_blank" rel="noreferrer">linkedin.com/in/yourname</a>
        </p>
        <p>
          Email: <a href="yuyuchenchen27@gmail.com">yourname@example.com</a>
        </p>
      </div>
    </section>
  )
}