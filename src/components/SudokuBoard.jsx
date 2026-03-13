import SudokuCell from './SudokuCell'
import { useGame } from '../context/GameContext'

function makeCellKey(row, col) {
  return `${row}-${col}`
}

export default function SudokuBoard({ mode }) {
  const { state } = useGame()
  const board = state.currentBoard
  const initialBoard = state.initialBoard
  const invalidCells = new Set(state.invalidCells)

  if (!board.length) {
    return null
  }

  const size = mode === 'easy' ? 6 : 9
  const boardClassName = mode === 'easy' ? 'board board-6' : 'board board-9'

  return (
    <div className="board-scroll">
      <div className={boardClassName}>
        {board.map((row, rowIndex) =>
          row.map((value, colIndex) => {
            const isLocked = initialBoard[rowIndex][colIndex] !== 0
            const isInvalid = invalidCells.has(makeCellKey(rowIndex, colIndex))

            return (
              <SudokuCell
                key={`${rowIndex}-${colIndex}`}
                rowIndex={rowIndex}
                colIndex={colIndex}
                value={value}
                isLocked={isLocked}
                isInvalid={isInvalid}
                maxValue={size}
              />
            )
          })
        )}
      </div>
    </div>
  )
}