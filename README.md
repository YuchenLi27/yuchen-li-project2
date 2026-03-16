Sudoku – React Web Application

This project is a single-player Sudoku web application built using React, React Router, and the Context API for state management. The application allows users to play either an easy (6×6) or normal (9×9) version of Sudoku.

The goal of the project is to demonstrate modern front-end development practices including component-based architecture, state management, and responsive design.

Live Application

Render Deployment:

https://sudoku-react-qv9m.onrender.com

GitHub Repository
https://github.com/YuchenLi27/yuchen-li-project2

Features
Game Modes

The application includes two Sudoku game modes:

Easy Mode

6×6 Sudoku board

Approximately half the board is prefilled

Numbers allowed: 1–6

Normal Mode

9×9 Sudoku board

Around 28–30 cells prefilled

Numbers allowed: 1–9

Each time a user visits the game page, a random puzzle is selected from a predefined puzzle set.

Core Gameplay Features
Editable and Locked Cells

Cells that are initially filled are locked and not editable.
Empty cells allow the player to input values that can be changed later.

Input Validation

The application ensures that:

Only valid numbers are accepted

Invalid placements are detected

Cells violating Sudoku rules are highlighted in red

Rules checked include:

Row uniqueness

Column uniqueness

Subgrid uniqueness

Victory Detection

When the board is correctly completed:

The board locks

A congratulations message appears

The timer stops

Timer

A game timer tracks how long the player has been playing.

The timer:

Starts when a new puzzle loads

Resets when New Game or Reset is pressed

Stops once the puzzle is completed

Reset and New Game

Reset

Restores the puzzle to its original state

Clears user inputs

Resets the timer

New Game

Loads a new random puzzle

Resets the timer

Navigation and Pages

The application includes multiple views accessible through the navigation bar.

Route	Description
/	Home / Welcome page
/games	Game selection page
/games/easy	Easy Sudoku board
/games/normal	Normal Sudoku board
/rules	Game rules
/scores	Mock high scores
/login	Login page
/register	Register page

Some pages (login, register, scores) are mock pages and contain static data.

Technologies Used

React

React Router

Context API

JavaScript (ES6)

CSS

Vite

State Management

Game state is managed using the React Context API with a reducer pattern.

The central game state stores:

mode
initialBoard
currentBoard
solution
invalidCells
isComplete
elapsedTime

Actions include:

START_GAME
UPDATE_CELL
RESET_GAME
TICK

This architecture ensures a unidirectional data flow and avoids passing callbacks deeply through components.

Component Structure

Major components include:

Navbar
Timer
SudokuBoard
SudokuCell

The Sudoku board is composed of many nested SudokuCell components, demonstrating React component composition.

Responsive Design

The application is designed to work on both desktop and mobile devices.

Key responsive features include:

Flexible grid layout

Scrollable Sudoku board on smaller screens

Adaptive spacing and font sizes

Sudoku Board Implementation

The Sudoku board is rendered dynamically using arrays stored in state.

Each board is represented as a 2D array.

Example:

[
 [5,3,0,0,7,0,0,0,0],
 [6,0,0,1,9,5,0,0,0],
 ...
]

Cells containing 0 represent empty spaces.

Invalid Move Detection

When a player enters a number, the application checks:

Row duplicates

Column duplicates

Subgrid duplicates

If conflicts exist, the related cells are added to the invalidCells state and rendered with a red border.

Deployment

The application is deployed using Render Static Sites.

Build configuration:

Build Command:
npm install && npm run build

Publish Directory:
dist

React Router routes are supported using a rewrite rule:

/* → /index.html