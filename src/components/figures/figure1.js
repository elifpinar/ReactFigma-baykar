import React from 'react';

const FigureYellow1 = ({children}) => {
  const customStyle = {
    width: '367px',
    height: '372px',
    top: '131px',
    left: '925px',
    borderRadius: '50px',
    gap: '10px',
    background: '#FBBF24',
    zIndex: 10,
  
  };

  return (
    <div style={customStyle}>
            {children}
            <img src="images/nike1.png" alt="Description of your image" style={{ position: 'absolute', top: '-50px', left: '-100px', width: '600px', height: '388px', objectFit: 'cover' }} />
    </div>
  );
}

export default FigureYellow1;
