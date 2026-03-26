import React, { useState, useEffect } from 'react';
import './App.css';
import CricketField from './components/CricketField';
import Scoreboard from './components/Scoreboard';
import PowerBar from './components/PowerBar';
import BattingStyleSelector from './components/BattingStyleSelector';
import Commentary from './components/Commentary';

function App() {
  // Game state
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [ballsPlayed, setBallsPlayed] = useState(0);
  const [battingStyle, setBattingStyle] = useState('aggressive');
  const [gameState, setGameState] = useState('ready'); // ready, bowling, batting, result, gameOver
  const [lastOutcome, setLastOutcome] = useState(null);
  const [showPowerBar, setShowPowerBar] = useState(false);

  const TOTAL_BALLS = 12; // 2 overs
  const TOTAL_WICKETS = 2;

  // Check if game is over
  useEffect(() => {
    if (wickets >= TOTAL_WICKETS || ballsPlayed >= TOTAL_BALLS) {
      setGameState('gameOver');
      setShowPowerBar(false);
    }
  }, [wickets, ballsPlayed]);

  // Handle ball delivery
  const handlePlayBall = () => {
    if (gameState === 'ready') {
      setGameState('bowling');
      setShowPowerBar(false);
      
      // After bowling animation, show power bar
      setTimeout(() => {
        setGameState('batting');
        setShowPowerBar(true);
      }, 1500);
    }
  };

  // Handle shot outcome from power bar
  const handleShotOutcome = (outcome) => {
    setShowPowerBar(false);
    setLastOutcome(outcome);
    
    // Update game state based on outcome
    if (outcome === 'wicket') {
      setWickets(wickets + 1);
    } else {
      setRuns(runs + outcome);
    }
    
    setBallsPlayed(ballsPlayed + 1);
    
    // Show result animation
    setGameState('result');
    
    // Reset for next ball
    setTimeout(() => {
      setGameState('ready');
      setLastOutcome(null);
    }, 2000);
  };

  // Restart game
  const handleRestart = () => {
    setRuns(0);
    setWickets(0);
    setBallsPlayed(0);
    setBattingStyle('aggressive');
    setGameState('ready');
    setLastOutcome(null);
    setShowPowerBar(false);
  };

  const overs = Math.floor(ballsPlayed / 6);
  const ballsInOver = ballsPlayed % 6;

  return (
    <div className="App">
      <div className="game-container">
        <Scoreboard 
          runs={runs}
          wickets={wickets}
          overs={overs}
          balls={ballsInOver}
          totalBalls={TOTAL_BALLS}
          totalWickets={TOTAL_WICKETS}
        />
        
        <CricketField 
          gameState={gameState}
          lastOutcome={lastOutcome}
        />
        
        {gameState === 'ready' && (
          <BattingStyleSelector 
            battingStyle={battingStyle}
            setBattingStyle={setBattingStyle}
            onPlayBall={handlePlayBall}
          />
        )}
        
        {showPowerBar && gameState === 'batting' && (
          <PowerBar 
            battingStyle={battingStyle}
            onOutcome={handleShotOutcome}
          />
        )}
        
        {lastOutcome !== null && (
          <Commentary outcome={lastOutcome} />
        )}
        
        {gameState === 'gameOver' && (
          <div className="game-over">
            <h2>Game Over!</h2>
            <p className="final-score">Final Score: {runs}/{wickets}</p>
            <p className="overs-played">Overs: {overs}.{ballsInOver}</p>
            <button className="restart-btn" onClick={handleRestart}>
              Restart Game
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
