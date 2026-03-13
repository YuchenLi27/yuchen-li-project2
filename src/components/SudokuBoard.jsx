import SudokuCell from './SudokuCell'
import { useGame } from '../context/GameContext'

export default function SudokuBoard({ mode }) {
  const { state } = useGame()
  const board = state.currentBoard
  const initialBoard = state.initialBoard

  if (!board.length) {
    return null
  }

  const size = mode === 'easy' ? 6 : 9
  const boardClassName = mode === 'easy' ? 'board board-6' : 'board board-9'

  return (
    <div className={boardClassName}>
      {board.map((row, rowIndex) =>
        row.map((value, colIndex) => {
          const isLocked = initialBoard[rowIndex][colIndex] !== 0

          return (
            <SudokuCell
              key={`${rowIndex}-${colIndex}`}
              rowIndex={rowIndex}
              colIndex={colIndex}
              value={value}
              isLocked={isLocked}
              maxValue={size}
            />
          )
        })
      )}
    </div>
  )
}