import React from 'react';
import './BattingStyleSelector.css';

const BattingStyleSelector = ({ battingStyle, setBattingStyle, onPlayBall }) => {
  return (
    <div className="batting-style-selector">
      <h3>Select Batting Style</h3>
      
      <div className="style-buttons">
        <button
          className={`style-btn ${battingStyle === 'aggressive' ? 'active' : ''}`}
          onClick={() => setBattingStyle('aggressive')}
        >
          <span className="style-icon">⚡</span>
          <span className="style-name">Aggressive</span>
          <span className="style-desc">High Risk, High Reward</span>
        </button>
        
        <button
          className={`style-btn ${battingStyle === 'defensive' ? 'active' : ''}`}
          onClick={() => setBattingStyle('defensive')}
        >
          <span className="style-icon">🛡️</span>
          <span className="style-name">Defensive</span>
          <span className="style-desc">Low Risk, Steady Runs</span>
        </button>
      </div>
      
      <button className="play-ball-btn" onClick={onPlayBall}>
        Play Ball
      </button>
    </div>
  );
};

export default BattingStyleSelector;
