import React from 'react';

import priority from '../../Controllers/priorityController';
import './card.css';

export default props => {
  const { level, color } = priority(props.priority);

  return (
    <div
      className="dashboard-card"
      style={{ color: color }}
      onClick={props.clicked}
    >
      <h2>Total: {level}</h2>
      <p>{props.count}</p>
    </div>
  );
};
