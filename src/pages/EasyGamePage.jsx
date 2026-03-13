import { useEffect } from 'react'
import { useGame } from '../context/GameContext'
import SudokuBoard from '../components/SudokuBoard'

export default function EasyGamePage() {
  const { dispatch } = useGame()

  useEffect(() => {
    dispatch({
      type: 'START_GAME',
      payload: { mode: 'easy' },
    })
  }, [dispatch])

  function handleNewGame() {
    dispatch({
      type: 'START_GAME',
      payload: { mode: 'easy' },
    })
  }

  function handleReset() {
    dispatch({ type: 'RESET_GAME' })
  }

  return (
    <section className="card">
      <h1>Easy Game</h1>
      <p>6x6 Sudoku board with preset puzzles.</p>

      <div className="game-topbar">
        <div className="timer-box">Time: 00:00</div>
      </div>

      <SudokuBoard mode="easy" />

      <div className="button-row">
        <button className="btn" onClick={handleNewGame}>New Game</button>
        <button className="btn btn-secondary" onClick={handleReset}>Reset</button>
      </div>
    </section>
  )
}