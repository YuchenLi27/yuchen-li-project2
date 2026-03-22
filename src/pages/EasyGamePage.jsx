import { useEffect } from 'react'
import { useGame } from '../context/GameContext'
import SudokuBoard from '../components/SudokuBoard'
import Timer from '../components/Timer'

export default function EasyGamePage() {
  const { state, dispatch } = useGame()

  useEffect(() => {
    if (!state.currentBoard.length || state.mode !== 'easy') {
      dispatch({
        type: 'START_GAME',
        payload: { mode: 'easy' },
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
    localStorage.removeItem('sudoku-game-state')
    dispatch({ type: 'RESET_GAME' })
  }

  function handleHint() {
    dispatch({ type: 'SET_HINT' })
  }

  return (
    <section className="game-page">
      <div className="game-header">
        <h1>Easy Game</h1>
        <Timer />
      </div>

      <p>6x6 Sudoku board with preset puzzles.</p>

      {state.isComplete && (
        <p className="success-message">
          Congratulations! You completed the easy Sudoku.
        </p>
      )}

      {!state.isComplete && state.hintCell === null && (
        <p className="hint-message">
          Press Hint to highlight a square that has exactly one valid answer.
        </p>
      )}

      <div className="board-scroll">
        <SudokuBoard mode="easy" />
      </div>

      <div className="game-actions">
        <button onClick={handleNewGame}>New Game</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleHint} disabled={state.isComplete}>
          Hint
        </button>
      </div>
    </section>
  )
}