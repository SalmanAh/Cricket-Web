# 2D Cricket Web Application

A single-player 2D cricket batting game built with React, featuring probability-based gameplay mechanics.

## Features

- **Two Batting Styles**:
  - Aggressive: High risk (40% wicket chance), high reward (25% boundary chance)
  - Defensive: Low risk (20% wicket chance), low reward (5% boundary chance)

- **Probability-Based Power Bar System**:
  - Visual representation of outcome probabilities
  - Moving slider determines the result based on position
  - No random selection - outcome strictly depends on slider position

- **Game Mechanics**:
  - 2 overs (12 balls total)
  - 2 wickets limit
  - Possible outcomes: 0, 1, 2, 3, 4, 6 runs, or Wicket

- **Animations**:
  - Bowling animation (ball travels toward batsman)
  - Batting animation (bat swing on shot)
  - Result display animations

- **Dynamic Commentary**:
  - Multiple commentary statements for each outcome
  - Randomly selected after each ball

- **Responsive Design**:
  - Works on desktop and mobile devices

## Probability Distributions

### Aggressive Batting
| Outcome | Probability |
|---------|-------------|
| Wicket  | 0.40 (40%)  |
| 0 Runs  | 0.10 (10%)  |
| 1 Run   | 0.10 (10%)  |
| 2 Runs  | 0.10 (10%)  |
| 3 Runs  | 0.05 (5%)   |
| 4 Runs  | 0.10 (10%)  |
| 6 Runs  | 0.15 (15%)  |
| **Total** | **1.00** |

### Defensive Batting
| Outcome | Probability |
|---------|-------------|
| Wicket  | 0.20 (20%)  |
| 0 Runs  | 0.25 (25%)  |
| 1 Run   | 0.25 (25%)  |
| 2 Runs  | 0.15 (15%)  |
| 3 Runs  | 0.10 (10%)  |
| 4 Runs  | 0.03 (3%)   |
| 6 Runs  | 0.02 (2%)   |
| **Total** | **1.00** |

## How the Power Bar Works

1. The power bar is divided into segments proportional to each outcome's probability
2. A slider continuously moves across the bar from left to right
3. When you click to play the shot, the slider stops
4. The outcome is determined by which segment the slider is in
5. Example: If slider stops at position 0.32 in Aggressive mode, it's in the Wicket zone (0-0.40)

## Installation & Running

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

The application will open at `http://localhost:3000`

## How to Play

1. Select your batting style (Aggressive or Defensive)
2. Click "Play Ball" to start the delivery
3. Watch the bowling animation
4. When the power bar appears with the moving slider, click to play your shot
5. The slider position determines your outcome
6. Continue until all overs are completed or wickets are lost
7. Click "Restart Game" to play again

## Project Structure

```
src/
├── components/
│   ├── CricketField.js       # Cricket ground and animations
│   ├── CricketField.css
│   ├── Scoreboard.js          # Score display
│   ├── Scoreboard.css
│   ├── PowerBar.js            # Probability-based power bar
│   ├── PowerBar.css
│   ├── BattingStyleSelector.js # Style selection UI
│   ├── BattingStyleSelector.css
│   ├── Commentary.js          # Dynamic commentary
│   └── Commentary.css
├── App.js                     # Main game logic
├── App.css
└── index.js
```

## Technologies Used

- React (Functional Components & Hooks)
- CSS3 (Animations & Gradients)
- JavaScript ES6+
- DOM-based rendering

## Game Logic Implementation

### State Management
- Uses React hooks (useState, useEffect, useRef) for state management
- Tracks runs, wickets, balls played, batting style, and game state

### Power Bar Logic
- Calculates cumulative probability ranges for each outcome
- Slider position (0-1) is mapped to probability segments
- Outcome determined by finding which range contains the slider position

### Animations
- CSS keyframe animations for bowling, batting, and results
- Smooth transitions using React state changes
- RequestAnimationFrame for slider movement

## Code Quality

- Modular component structure
- Clear separation of concerns
- Meaningful variable and function names
- Comprehensive comments explaining probability logic
- Clean, readable code following React best practices

## Author

Created for CS-4032 Web Programming Assignment #02
