# 2D Cricket Web Application - Project Documentation

**Student Name:** [Your Name]  
**Roll Number:** [Your Roll Number]  
**Section:** [Your Section]

---

## Project Overview

This is a single-player 2D cricket batting game built using React, HTML, CSS, and JavaScript. The game features a probability-based power bar system where outcomes are determined by the position of a moving slider rather than pure randomness.

---

## Screenshots Guide

### Required Screenshots (with sticky note showing Name, Roll Number, Section):

1. **Aggressive Batting in Action**
   - Select "Aggressive" batting style
   - Click "Play Ball"
   - Take screenshot when power bar is visible
   - Show the red wicket zone (40%) prominently

2. **Defensive Batting in Action**
   - Select "Defensive" batting style
   - Click "Play Ball"
   - Take screenshot when power bar is visible
   - Show the smaller wicket zone (20%)

3. **Power Bar Visible During Gameplay**
   - Capture the power bar with the moving slider
   - Show all color-coded segments clearly
   - Display probability labels at the bottom

4. **Scoreboard Updates Reflecting Game Progress**
   - Take screenshot after playing several balls
   - Show runs scored, wickets fallen, overs completed
   - Display balls remaining and wickets left

5. **Game Over Screen**
   - Play until game ends (12 balls or 2 wickets)
   - Capture the "Game Over" popup
   - Show final score and "Restart Game" button

---

## Game Logic and Working Mechanism

### Core Game Flow

1. **Initialization**
   - Game starts with 0 runs, 0 wickets, 0 balls played
   - Total of 12 balls (2 overs) and 2 wickets available
   - Player selects batting style (Aggressive or Defensive)

2. **Ball Delivery Sequence**
   - Player clicks "Play Ball" button
   - Bowling animation plays (ball travels toward batsman)
   - Power bar appears with moving slider
   - Player clicks to stop slider
   - Outcome determined by slider position
   - Batting animation plays
   - Score updates and commentary displays
   - Game resets for next ball

3. **Game End Conditions**
   - All 12 balls completed, OR
   - All 2 wickets lost
   - Game Over screen displays with final score

### State Management

The application uses React hooks for state management:

```javascript
- runs: Total runs scored
- wickets: Total wickets fallen
- ballsPlayed: Number of balls bowled
- battingStyle: 'aggressive' or 'defensive'
- gameState: 'ready', 'bowling', 'batting', 'result', 'gameOver'
- lastOutcome: Result of the last ball
- showPowerBar: Controls power bar visibility
```

### Component Architecture

1. **App.js** - Main game controller
   - Manages all game state
   - Handles game flow logic
   - Coordinates between components

2. **CricketField.js** - Visual cricket ground
   - Displays pitch, batsman, ball, stumps
   - Handles bowling and batting animations
   - Shows result display

3. **Scoreboard.js** - Score display
   - Shows runs/wickets
   - Displays overs and balls
   - Shows remaining balls and wickets

4. **PowerBar.js** - Probability-based power bar
   - Calculates probability segments
   - Animates slider movement
   - Determines outcome based on position

5. **BattingStyleSelector.js** - Style selection UI
   - Allows choosing Aggressive or Defensive
   - Displays style characteristics
   - "Play Ball" button to start delivery

6. **Commentary.js** - Dynamic commentary
   - Displays context-based commentary
   - Randomly selects from multiple statements
   - Different messages for each outcome

---

## Mapping of Probabilities to Power Bar

### Probability Distributions

#### Aggressive Batting
```
Outcome    Probability    Power Bar Range
Wicket     0.40 (40%)     0.00 - 0.40
0 Runs     0.10 (10%)     0.40 - 0.50
1 Run      0.10 (10%)     0.50 - 0.60
2 Runs     0.10 (10%)     0.60 - 0.70
3 Runs     0.05 (5%)      0.70 - 0.75
4 Runs     0.10 (10%)     0.75 - 0.85
6 Runs     0.15 (15%)     0.85 - 1.00
Total      1.00 (100%)
```

#### Defensive Batting
```
Outcome    Probability    Power Bar Range
Wicket     0.20 (20%)     0.00 - 0.20
0 Runs     0.25 (25%)     0.20 - 0.45
1 Run      0.25 (25%)     0.45 - 0.70
2 Runs     0.15 (15%)     0.70 - 0.85
3 Runs     0.10 (10%)     0.85 - 0.95
4 Runs     0.03 (3%)      0.95 - 0.98
6 Runs     0.02 (2%)      0.98 - 1.00
Total      1.00 (100%)
```

### How Mapping Works

1. **Cumulative Range Calculation**
   ```javascript
   const ranges = [];
   let cumulative = 0;
   
   ['wicket', '0', '1', '2', '3', '4', '6'].forEach(outcome => {
     const prob = currentProbs[outcome];
     ranges.push({
       outcome: outcome,
       start: cumulative,
       end: cumulative + prob,
       probability: prob
     });
     cumulative += prob;
   });
   ```

2. **Visual Representation**
   - Each segment width = probability × 100%
   - Wicket (Aggressive): 40% of bar width
   - 6 Runs (Aggressive): 15% of bar width
   - Color-coded for easy identification

3. **Outcome Determination**
   ```javascript
   const outcome = ranges.find(range => 
     sliderPosition >= range.start && sliderPosition < range.end
   );
   ```
   - Slider position is a value between 0 and 1
   - Find which range contains the slider position
   - Return the corresponding outcome

### Example Scenario

**Aggressive Batting:**
- Slider stops at position 0.32
- Check ranges: 0.32 falls in [0.00 - 0.40]
- Outcome: Wicket

**Defensive Batting:**
- Slider stops at position 0.55
- Check ranges: 0.55 falls in [0.45 - 0.70]
- Outcome: 1 Run

---

## Implementation of Animations

### 1. Bowling Animation

**CSS Implementation:**
```css
@keyframes bowlBall {
  0% {
    right: 100%;
    top: 30%;
    opacity: 1;
  }
  100% {
    right: 100px;
    top: 50%;
    opacity: 1;
  }
}

.bowling-animation {
  animation: bowlBall 1.5s ease-in;
}
```

**How it works:**
- Ball starts from right edge (100%)
- Travels to batsman position (100px from right)
- Takes 1.5 seconds to complete
- Triggered when gameState changes to 'bowling'

### 2. Batting Animation

**CSS Implementation:**
```css
@keyframes batSwing {
  0% {
    transform: rotate(-45deg);
  }
  50% {
    transform: rotate(20deg);
  }
  100% {
    transform: rotate(-45deg);
  }
}

.batting-animation .bat {
  animation: batSwing 0.5s ease-in-out;
}
```

**How it works:**
- Bat rotates from -45° to 20° and back
- Simulates batting stroke
- Takes 0.5 seconds
- Triggered when player clicks on power bar

### 3. Wicket Animation

**CSS Implementation:**
```css
@keyframes wicketFall {
  0% {
    transform: translateY(50%) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(50%) rotate(90deg) translateX(30px);
    opacity: 0.5;
  }
}
```

**How it works:**
- Batsman rotates 90° and moves sideways
- Opacity reduces to show "out"
- Triggered when outcome is 'wicket'

### 4. Result Display Animation

**CSS Implementation:**
```css
@keyframes resultPop {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
}
```

**How it works:**
- Result text scales from 0 to 1.2 to 1
- Creates a "pop" effect
- Shows outcome (runs or wicket)

### 5. Slider Movement Animation

**JavaScript Implementation:**
```javascript
const animate = () => {
  const elapsed = Date.now() - startTimeRef.current;
  const position = (elapsed % 2000) / 2000;
  setSliderPosition(position);
  animationRef.current = requestAnimationFrame(animate);
};
```

**How it works:**
- Uses requestAnimationFrame for smooth 60fps animation
- Slider completes one cycle in 2 seconds
- Position calculated as value between 0 and 1
- Stops when player clicks

---

## Technical Implementation Details

### Technologies Used
- React 18 (Functional Components)
- React Hooks (useState, useEffect, useRef)
- CSS3 (Animations, Gradients, Flexbox)
- JavaScript ES6+
- DOM-based rendering

### Key Features Implemented

✅ 2D cricket ground with visual elements  
✅ Batsman and ball sprites with animations  
✅ Dynamic scoreboard with real-time updates  
✅ Two batting styles with different probabilities  
✅ Probability-based power bar (not random)  
✅ Moving slider with accurate position detection  
✅ Bowling animation (ball travels to batsman)  
✅ Batting animation (bat swing)  
✅ Wicket animation (batsman falls)  
✅ Game progression logic (2 overs, 2 wickets)  
✅ Restart game functionality  
✅ Dynamic commentary system (bonus feature)  
✅ Responsive design for mobile devices  
✅ Clean, modular code structure  
✅ Comprehensive comments and documentation  

### Code Quality Features

1. **Modular Components** - Each component has a single responsibility
2. **Clean Separation** - Logic, UI, and styling are separated
3. **Meaningful Names** - Variables and functions are clearly named
4. **Comments** - Complex logic is well-documented
5. **React Best Practices** - Proper use of hooks and state management
6. **Responsive Design** - Works on various screen sizes

---

## How to Run the Application

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/SalmanAh/Cricket-Web.git
   cd Cricket-Web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open browser and navigate to:
   ```
   http://localhost:3000
   ```

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

---

## GitHub Repository

**Repository URL:** https://github.com/SalmanAh/Cricket-Web.git

### Commit History
The repository contains meaningful commits showing development progress:
- Initial project setup
- Component creation
- Feature implementation
- Styling and animations
- Bug fixes and improvements

---

## Bonus Features Implemented

### 1. Dynamic Commentary System
- Multiple commentary statements for each outcome
- Random selection for variety
- Context-aware messages
- Smooth slide-up animation

### 2. Enhanced UI/UX
- Gradient backgrounds
- Smooth transitions
- Hover effects on buttons
- Visual feedback for interactions

### 3. Responsive Design
- Works on desktop, tablet, and mobile
- Adaptive layouts
- Touch-friendly controls

---

## Testing Checklist

✅ Aggressive batting shows correct probabilities  
✅ Defensive batting shows correct probabilities  
✅ Power bar segments sum to 100%  
✅ Slider movement is smooth and continuous  
✅ Outcome matches slider position accurately  
✅ Bowling animation plays correctly  
✅ Batting animation triggers on shot  
✅ Scoreboard updates after each ball  
✅ Game ends at 12 balls or 2 wickets  
✅ Restart button resets all state  
✅ Commentary displays for each outcome  
✅ Responsive on different screen sizes  

---

## Conclusion

This 2D Cricket Web Application successfully implements all required features including probability-based gameplay, animations, and dynamic scoring. The code is well-structured, documented, and follows React best practices. The application provides an engaging cricket batting experience with realistic game mechanics.

---

**Repository:** https://github.com/SalmanAh/Cricket-Web.git  
**Developed using:** React, HTML5, CSS3, JavaScript ES6+
