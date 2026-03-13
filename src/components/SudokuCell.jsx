import { useGame } from '../context/GameContext'

export default function SudokuCell({ rowIndex, colIndex, value, isLocked, maxValue }) {
  const { dispatch } = useGame()

  function handleChange(event) {
    const rawValue = event.target.value

    if (rawValue === '') {
      dispatch({
        type: 'UPDATE_CELL',
        payload: {
          row: rowIndex,
          col: colIndex,
          value: 0,
        },
      })
      return
    }

    const parsedValue = Number(rawValue)

    if (!Number.isInteger(parsedValue)) {
      return
    }

    if (parsedValue < 1 || parsedValue > maxValue) {
      return
    }

    dispatch({
      type: 'UPDATE_CELL',
      payload: {
        row: rowIndex,
        col: colIndex,
        value: parsedValue,
      },
    })
  }

  return (
    <input
      className={`sudoku-cell ${isLocked ? 'locked' : ''}`}
      type="text"
      inputMode="numeric"
      value={value === 0 ? '' : value}
      onChange={handleChange}
      disabled={isLocked}
      maxLength={1}
    />
  )
}