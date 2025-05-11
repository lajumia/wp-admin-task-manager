import React from 'react';


const Circle = ({ percent, color, label }) => {
  const radius = 36;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className="circle-wrapper">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#ddd"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="circle-center">{percent}%</div>
      <p className="circle-label">
        <span className="dot" style={{ backgroundColor: color }}></span>
        {label}
      </p>
    </div>
  );
};

export default function TaskStatus() {
  return (
    <div className="task-status-card">
      <h3><span role="img" aria-label="icon">🗂️</span> Task Status</h3>
      <div className="status-circles">
        <Circle percent={84} color="green" label="Completed" />
        <Circle percent={46} color="blue" label="In Progress" />
        <Circle percent={13} color="red" label="Not Started" />
      </div>
    </div>
  );
}
