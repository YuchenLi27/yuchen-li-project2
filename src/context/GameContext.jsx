import { createContext, useContext, useReducer } from 'react'
import { getRandomPuzzle } from '../utils/puzzles'

const GameContext = createContext()

function cloneBoard(board) {
  return board.map((row) => [...row])
}

const initialState = {
  mode: 'easy',
  initialBoard: [],
  currentBoard: [],
  solution: [],
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
      }
    }

    case 'UPDATE_CELL': {
      const { row, col, value } = action.payload

      const nextBoard = cloneBoard(state.currentBoard)
      nextBoard[row][col] = value

      return {
        ...state,
        currentBoard: nextBoard,
      }
    }

    case 'RESET_GAME': {
      return {
        ...state,
        currentBoard: cloneBoard(state.initialBoard),
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