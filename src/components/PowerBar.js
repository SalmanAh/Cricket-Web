import React, { useState, useEffect, useRef } from 'react';
import './PowerBar.css';

const PowerBar = ({ battingStyle, onOutcome }) => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [isMoving, setIsMoving] = useState(true);
  const animationRef = useRef(null);
  const startTimeRef = useRef(Date.now());

  // Probability distributions for different batting styles
  const probabilities = {
    aggressive: {
      wicket: 0.40,
      0: 0.10,
      1: 0.10,
      2: 0.10,
      3: 0.05,
      4: 0.10,
      6: 0.15
    },
    defensive: {
      wicket: 0.20,
      0: 0.25,
      1: 0.25,
      2: 0.15,
      3: 0.10,
      4: 0.03,
      6: 0.02
    }
  };

  const currentProbs = probabilities[battingStyle];

  // Create cumulative probability ranges
  const ranges = [];
  let cumulative = 0;
  
  ['wicket', '0', '1', '2', '3', '4', '6'].forEach(outcome => {
    const prob = currentProbs[outcome];
    ranges.push({
      outcome: outcome === 'wicket' ? 'wicket' : parseInt(outcome),
      start: cumulative,
      end: cumulative + prob,
      probability: prob
    });
    cumulative += prob;
  });

  // Animate slider movement
  useEffect(() => {
    if (!isMoving) return;

    const animate = () => {
      const elapsed = Date.now() - startTimeRef.current;
      // Slider completes one cycle in 2 seconds
      const position = (elapsed % 2000) / 2000;
      setSliderPosition(position);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isMoving]);

  // Handle click to stop slider and determine outcome
  const handleClick = () => {
    if (!isMoving) return;
    
    setIsMoving(false);
    
    // Determine outcome based on slider position
    const outcome = ranges.find(range => 
      sliderPosition >= range.start && sliderPosition < range.end
    );
    
    if (outcome) {
      setTimeout(() => {
        onOutcome(outcome.outcome);
      }, 300);
    }
  };

  return (
    <div className="power-bar-container">
      <h3 className="power-bar-title">
        {battingStyle === 'aggressive' ? 'Aggressive' : 'Defensive'} Batting
      </h3>
      <p className="power-bar-instruction">Click to play your shot!</p>
      
      <div className="power-bar" onClick={handleClick}>
        {ranges.map((range, index) => (
          <div
            key={index}
            className={`power-segment segment-${range.outcome}`}
            style={{ width: `${range.probability * 100}%` }}
          >
            <span className="segment-label">
              {range.outcome === 'wicket' ? 'OUT' : range.outcome}
            </span>
          </div>
        ))}
        
        {/* Slider */}
        <div 
          className="slider" 
          style={{ left: `${sliderPosition * 100}%` }}
        >
          <div className="slider-arrow"></div>
        </div>
      </div>
      
      {/* Probability labels */}
      <div className="probability-labels">
        <span>0</span>
        {ranges.slice(0, -1).map((range, index) => (
          <span key={index} style={{ left: `${range.end * 100}%` }}>
            {range.end.toFixed(2)}
          </span>
        ))}
        <span>1.00</span>
      </div>
    </div>
  );
};

export default PowerBar;
