import React, { useState, useEffect } from 'react';
import './Commentary.css';

const Commentary = ({ outcome }) => {
  const [comment, setComment] = useState('');

  // Commentary statements for each outcome
  const commentaryData = {
    wicket: [
      "Oh no! That's a wicket! The batsman is walking back.",
      "OUT! What a delivery! The stumps are shattered!",
      "Caught! The fielder takes a brilliant catch!"
    ],
    0: [
      "Dot ball! No runs scored on that delivery.",
      "Solid defense! The ball is blocked safely.",
      "Good bowling! The batsman couldn't score."
    ],
    1: [
      "Single taken! Quick running between the wickets.",
      "One run added to the total.",
      "Good placement! They take a comfortable single."
    ],
    2: [
      "Two runs! Excellent running between the wickets!",
      "They're back for the second! Good cricket.",
      "A couple of runs added to the score."
    ],
    3: [
      "Three runs! Fantastic running!",
      "They've run three! Great fitness on display.",
      "Excellent placement! Three runs taken."
    ],
    4: [
      "FOUR! What a shot! The ball races to the boundary!",
      "Boundary! Perfectly timed stroke!",
      "FOUR runs! That's brilliant batting!"
    ],
    6: [
      "SIX! That's gone all the way! Massive hit!",
      "MAXIMUM! What a shot! Out of the park!",
      "SIX runs! Incredible power! The crowd goes wild!"
    ]
  };

  useEffect(() => {
    const key = outcome === 'wicket' ? 'wicket' : outcome.toString();
    const comments = commentaryData[key] || [];
    
    if (comments.length > 0) {
      // Randomly select a comment
      const randomComment = comments[Math.floor(Math.random() * comments.length)];
      setComment(randomComment);
    }
  }, [outcome]);

  return (
    <div className="commentary">
      <p className="commentary-text">{comment}</p>
    </div>
  );
};

export default Commentary;
