# Sudoku Game (React + Context API)

## Overview

This project is a single-player Sudoku game built using React and the Context API for state management. It includes two difficulty levels (Easy and Normal), dynamic puzzle generation, validation logic, and a clean multi-page UI using React Router.

The application demonstrates core React principles, state management with reducers, and interactive UI behavior.

---

## Features

### Game Modes

* **Easy Mode (6x6)**

  * Half of the board is pre-filled
* **Normal Mode (9x9)**

  * 28–30 cells pre-filled

Each game is randomly generated on load.

---

### Core Gameplay

* Editable and non-editable cells
* Input validation (only valid numbers allowed)
* Real-time rule checking:

  * Row
  * Column
  * Subgrid
* Invalid cells are highlighted in red
* Cells can be updated or cleared
* Board locks upon completion
* Completion message displayed

---

### Game Controls

* **New Game**: Generates a new puzzle
* **Reset**: Resets board to original state
* **Hint**: Highlights a cell with exactly one valid solution
* **Timer**: Tracks elapsed time

---

### State Management

* Implemented using **React Context + useReducer**
* Centralized game state includes:

  * Current board
  * Initial board
  * Solution
  * Invalid cells
  * Timer
  * Completion state

---

### Bonus Features

#### Local Storage Persistence

* Game state is saved automatically after each move
* State is restored when the page reloads
* Cleared on reset or completion

#### Backtracking Algorithm

* Sudoku boards are generated using backtracking
* Ensures each puzzle has a **unique solution**

#### Hint System

* Highlights a cell that has only one valid value
* Based on rule validation logic

---

## Routing

| Page           | Path            |
| -------------- | --------------- |
| Home           | `/`             |
| Game Selection | `/games`        |
| Easy Game      | `/games/easy`   |
| Normal Game    | `/games/normal` |
| Rules          | `/rules`        |
| High Scores    | `/scores`       |
| Login          | `/login`        |
| Register       | `/register`     |

---

## Tech Stack

* React
* React Router
* Context API + useReducer
* CSS

---

## Deployment

Deployed on Render
👉 (Add your Render link here)

---

## How to Run Locally

```bash
npm install
npm run dev
```

---

## Author

* Live Application
* Render Deployment:

https://sudoku-react-qv9m.onrender.com

GitHub Repository
https://github.com/YuchenLi27/yuchen-li-project2

