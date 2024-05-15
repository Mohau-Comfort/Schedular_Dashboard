import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {
  const { setIsClicked, initialState } = useStateContext();

  const buttonStyle = {
    backgroundColor: bgColor,
    color: color,
    borderRadius: borderRadius,
    width: width // Assuming width is passed as a string like 'full' or 'auto'
  };

  const handleButtonClick = () => {
    setIsClicked(initialState);
  };

  const buttonClassName = `text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`;

  return (
    <button type="button" onClick={handleButtonClick} style={buttonStyle} className={buttonClassName}>
      {icon} {text}
    </button>     
  );
};

export default Button;
