import React from 'react';
import './CricketField.css';

const CricketField = ({ gameState, lastOutcome }) => {
  return (
    <div className="cricket-field">
      {/* Crowd stands */}
      <div className="crowd-top"></div>
      
      {/* Playing field */}
      <div className="field-area">
        {/* Pitch */}
        <div className="pitch">
          {/* Stumps */}
          <div className={`stumps stumps-left ${gameState === 'result' && lastOutcome === 'wicket' ? 'stumps-broken' : ''}`}>
            <div className="stump"></div>
            <div className="stump"></div>
            <div className="stump"></div>
          </div>
          
          {/* Batsman */}
          <div className={`batsman ${gameState === 'shotPlayed' ? 'batting-animation' : ''} ${gameState === 'result' && lastOutcome === 'wicket' ? 'wicket-animation' : ''}`}>
            <div className="batsman-body"></div>
            <div className="bat"></div>
          </div>
          
          {/* Ball */}
          <div className={`ball 
            ${gameState === 'bowling' ? 'bowling-animation' : ''} 
            ${gameState === 'batting' ? 'ball-at-batsman' : ''}
            ${gameState === 'shotPlayed' && lastOutcome !== 'wicket' ? 'ball-hit' : ''} 
            ${gameState === 'shotPlayed' && lastOutcome === 'wicket' ? 'ball-hit-wicket' : ''}`}>
          </div>
        </div>
      </div>
      
      {/* Result display */}
      {gameState === 'result' && lastOutcome !== null && (
        <div className="result-display">
          {lastOutcome === 'wicket' ? (
            <span className="wicket-text">OUT!</span>
          ) : lastOutcome === 4 || lastOutcome === 6 ? (
            <span className="boundary-text">{lastOutcome === 4 ? 'FOUR!' : 'SIX!'}</span>
          ) : (
            <span className="runs-text">{lastOutcome} {lastOutcome === 1 ? 'Run' : 'Runs'}</span>
          )}
        </div>
      )}
    </div>
  );
};

export default CricketField;
