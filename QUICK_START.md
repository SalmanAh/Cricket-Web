# 🏏 Quick Start Guide

## Running the Application

```bash
cd cricket-game
npm start
```

The application will automatically open at **http://localhost:3000**

---

## How to Play

1. **Select Batting Style**
   - Click ⚡ **Aggressive** for high-risk, high-reward
   - Click 🛡️ **Defensive** for safe, steady runs

2. **Play Ball**
   - Click the green "Play Ball" button
   - Watch the bowling animation

3. **Time Your Shot**
   - Power bar appears with moving slider
   - Click anywhere on the bar to stop the slider
   - Your outcome depends on where the slider stops

4. **Score Runs**
   - Continue playing until 12 balls or 2 wickets
   - Try to score as many runs as possible!

5. **Restart**
   - Click "Restart Game" when game ends

---

## Understanding the Power Bar

### Aggressive Mode (⚡)
- **40% Wicket** (Red) - High risk!
- **15% Six** (Purple) - Big reward!
- **10% Four** (Orange)
- Smaller zones for 0, 1, 2, 3 runs

### Defensive Mode (🛡️)
- **20% Wicket** (Red) - Lower risk
- **25% Zero** (Gray) - Safe
- **25% Single** (Green) - Steady runs
- Very small zones for 4 and 6

---

## Key Features

✅ **Probability-Based** - Not random! Slider position determines outcome  
✅ **Two Batting Styles** - Different risk/reward profiles  
✅ **Smooth Animations** - Bowling, batting, and result displays  
✅ **Dynamic Commentary** - Context-aware messages  
✅ **Live Scoreboard** - Real-time updates  
✅ **Responsive Design** - Works on mobile and desktop  

---

## Project Files

```
cricket-game/
├── src/
│   ├── App.js                          # Main game logic
│   ├── components/
│   │   ├── CricketField.js             # Cricket ground & animations
│   │   ├── Scoreboard.js               # Score display
│   │   ├── PowerBar.js                 # Probability-based power bar
│   │   ├── BattingStyleSelector.js     # Style selection
│   │   └── Commentary.js               # Dynamic commentary
│   └── [CSS files for each component]
├── README.md                           # Technical documentation
├── PROJECT_DOCUMENTATION.md            # Complete project explanation
├── SCREENSHOT_GUIDE.md                 # How to take screenshots
└── SUBMISSION_CHECKLIST.md             # What to submit
```

---

## GitHub Repository

**URL:** https://github.com/SalmanAh/Cricket-Web.git

**Commits:** 11+ meaningful commits showing development progress

---

## Technologies

- React 18
- JavaScript ES6+
- CSS3 (Animations, Flexbox, Gradients)
- HTML5

---

## Troubleshooting

### Port already in use?
```bash
lsof -ti:3000 | xargs kill -9
npm start
```

### Dependencies issue?
```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

### Git issues?
```bash
git status
git pull origin main
git push origin main
```

---

## For Your Viva

Be prepared to explain:

1. **How the power bar works**
   - Cumulative probability ranges
   - Slider position detection
   - Outcome determination logic

2. **Probability distributions**
   - Aggressive: 40% wicket, 15% six
   - Defensive: 20% wicket, 2% six
   - All probabilities sum to 1.0

3. **Animations**
   - CSS keyframes for bowling/batting
   - RequestAnimationFrame for slider
   - State-based animation triggers

4. **React concepts**
   - useState for game state
   - useEffect for game end detection
   - useRef for animation control

5. **Game flow**
   - State transitions: ready → bowling → batting → result
   - Score updates and ball counting
   - Game end conditions

---

## Need Help?

Check these files:
- `README.md` - Technical details
- `PROJECT_DOCUMENTATION.md` - Complete explanation
- `SCREENSHOT_GUIDE.md` - Screenshot instructions
- `SUBMISSION_CHECKLIST.md` - What to submit

---

**Enjoy the game! 🏏**
