import { useEffect } from 'react'
import { useGame } from '../context/GameContext'
import SudokuBoard from '../components/SudokuBoard'
import Timer from '../components/Timer'

export default function EasyGamePage() {
  const { state, dispatch } = useGame()

  useEffect(() => {
    dispatch({
      type: 'START_GAME',
      payload: { mode: 'easy' },
    })
  }, [dispatch])

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch({ type: 'TICK' })
    }, 1000)

    return () => clearInterval(intervalId)
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
        <Timer />
      </div>

      {state.isComplete && (
        <div className="win-message">
          Congratulations! You completed the easy Sudoku.
        </div>
      )}

      <SudokuBoard mode="easy" />

      <div className="button-row">
        <button className="btn" onClick={handleNewGame}>New Game</button>
        <button className="btn btn-secondary" onClick={handleReset}>Reset</button>
      </div>
    </section>
  )
}