import { createContext, useContext, useReducer } from 'react'
import { getRandomPuzzle } from '../utils/puzzles'

const GameContext = createContext()

function cloneBoard(board) {
  return board.map((row) => [...row])
}

function getSubgridSize(mode) {
  if (mode === 'easy') {
    return { subRows: 2, subCols: 3 }
  }

  return { subRows: 3, subCols: 3 }
}

function cellKey(row, col) {
  return `${row}-${col}`
}

function getInvalidCells(board, mode) {
  const invalid = new Set()
  const size = board.length
  const { subRows, subCols } = getSubgridSize(mode)

  for (let row = 0; row < size; row += 1) {
    for (let col = 0; col < size; col += 1) {
      const value = board[row][col]

      if (value === 0) continue

      for (let otherCol = 0; otherCol < size; otherCol += 1) {
        if (otherCol !== col && board[row][otherCol] === value) {
          invalid.add(cellKey(row, col))
          invalid.add(cellKey(row, otherCol))
        }
      }

      for (let otherRow = 0; otherRow < size; otherRow += 1) {
        if (otherRow !== row && board[otherRow][col] === value) {
          invalid.add(cellKey(row, col))
          invalid.add(cellKey(otherRow, col))
        }
      }

      const startRow = Math.floor(row / subRows) * subRows
      const startCol = Math.floor(col / subCols) * subCols

      for (let r = startRow; r < startRow + subRows; r += 1) {
        for (let c = startCol; c < startCol + subCols; c += 1) {
          if ((r !== row || c !== col) && board[r][c] === value) {
            invalid.add(cellKey(row, col))
            invalid.add(cellKey(r, c))
          }
        }
      }
    }
  }

  return [...invalid]
}

function isBoardComplete(board, solution) {
  if (!board.length || !solution.length) return false

  for (let row = 0; row < board.length; row += 1) {
    for (let col = 0; col < board[row].length; col += 1) {
      if (board[row][col] !== solution[row][col]) {
        return false
      }
    }
  }

  return true
}

const initialState = {
  mode: 'easy',
  initialBoard: [],
  currentBoard: [],
  solution: [],
  invalidCells: [],
  isComplete: false,
  elapsedTime: 0,
}

function gameReducer(state, action) {
  switch (action.type) {
    case 'START_GAME': {
      const { mode } = action.payload
      const { puzzle, solution } = getRandomPuzzle(mode)

      return {
        mode,
        initialBoard: cloneBoard(puzzle),
        currentBoard: cloneBoard(puzzle),
        solution: cloneBoard(solution),
        invalidCells: [],
        isComplete: false,
        elapsedTime: 0,
      }
    }

    case 'UPDATE_CELL': {
      if (state.isComplete) return state

      const { row, col, value } = action.payload
      const nextBoard = cloneBoard(state.currentBoard)
      nextBoard[row][col] = value

      const invalidCells = getInvalidCells(nextBoard, state.mode)
      const isComplete =
        invalidCells.length === 0 && isBoardComplete(nextBoard, state.solution)

      return {
        ...state,
        currentBoard: nextBoard,
        invalidCells,
        isComplete,
      }
    }

    case 'RESET_GAME': {
      const resetBoard = cloneBoard(state.initialBoard)

      return {
        ...state,
        currentBoard: resetBoard,
        invalidCells: [],
        isComplete: false,
        elapsedTime: 0,
      }
    }

    case 'TICK': {
      if (state.isComplete || !state.currentBoard.length) {
        return state
      }

      return {
        ...state,
        elapsedTime: state.elapsedTime + 1,
      }
    }

    default:
      return state
  }
}

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState)

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  )
}

export function useGame() {
  return useContext(GameContext)
}