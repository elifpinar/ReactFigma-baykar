import React from 'react';

class CustomShape extends React.Component {
  render() {
    const customShapeStyle = {
      width: '271px',
      height: '271px',
      top: '176px',
      left: '-35px',
      borderRadius: '50px',
      opacity: '0.75',
      background: '#BE185D',
      position: 'absolute',
      zIndex: '3'
    };

    return (
      <div style={customShapeStyle}>
        {/* İçerik */}
      </div>
    );
  }
}

export default CustomShape;
