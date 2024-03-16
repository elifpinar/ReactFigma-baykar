import React from 'react';

const PerfectCircle = () => {
  return (
    <div
      style={{
        width: '144px',
        height: '144px',
        borderRadius: '100px',
        background: '#121619',
        opacity: '0.75',
        padding: '24px 20px 24px 28px',
        position: 'absolute',
        zIndex: '20',
        marginLeft: '805px',
        marginTop: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <img src='images/vector.png' width='64px' height='72px'/>
      {/*
      
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 60V4L54 32L10 60Z"
          fill="#FBBF24"
        />
      </svg>
      */}
      
    </div>
  );
}

export default PerfectCircle;
