import { useGame } from '../context/GameContext'

export default function SudokuCell({
  rowIndex,
  colIndex,
  value,
  isLocked,
  isInvalid,
  maxValue,
}) {
  const { state, dispatch } = useGame()

  function handleChange(event) {
    if (state.isComplete) {
      return
    }

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

    if (!/^\d$/.test(rawValue)) {
      return
    }

    const parsedValue = Number(rawValue)

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

  const className = [
    'sudoku-cell',
    isLocked ? 'locked' : '',
    isInvalid ? 'invalid' : '',
    state.isComplete ? 'complete' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <input
      className={className}
      type="text"
      inputMode="numeric"
      value={value === 0 ? '' : value}
      onChange={handleChange}
      disabled={isLocked || state.isComplete}
      maxLength={1}
    />
  )
}