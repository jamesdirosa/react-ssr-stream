import React from 'react';
import './styles.css';
export const Button = ({ primary, children, onClick, disabled, startIcon }) => {
  let className = undefined;
  if (primary) {
    className = 'background-primary';
  }
  if (disabled) {
    className = 'disabled';
  }
  return (
    <button
      disabled={disabled}
      className={disabled ? 'disabled' : undefined}
      onClick={onClick}
    >
      {startIcon ? (
        <span style={{ marginRight: 4 }}>{startIcon}</span>
      ) : undefined}
      <span style={{ margin: 'auto' }}>{children}</span>
    </button>
  );
};
