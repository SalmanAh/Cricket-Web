import React from 'react';
import './Scoreboard.css';

const Scoreboard = ({ runs, wickets, overs, balls, totalBalls, totalWickets }) => {
  const ballsRemaining = totalBalls - (overs * 6 + balls);
  
  return (
    <div className="scoreboard">
      <div className="score-item">
        <span className="score-label">Runs</span>
        <span className="score-value">{runs}/{wickets}</span>
      </div>
      
      <div className="score-item">
        <span className="score-label">Overs</span>
        <span className="score-value">{overs}.{balls}</span>
      </div>
      
      <div className="score-item">
        <span className="score-label">Balls Left</span>
        <span className="score-value">{ballsRemaining}</span>
      </div>
      
      <div className="score-item">
        <span className="score-label">Wickets Left</span>
        <span className="score-value">{totalWickets - wickets}</span>
      </div>
    </div>
  );
};

export default Scoreboard;
