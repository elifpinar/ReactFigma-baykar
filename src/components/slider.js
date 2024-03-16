import React, { useState } from 'react';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [
    { id: 1, header: "Header 1", text: "Text 1" },
    { id: 2, header: "Header 2", text: "Text 2" },
    { id: 3, header: "Header 3", text: "Text 3" },
    { id: 4, header: "Header 4", text: "Text 4" },
    { id: 5, header: "Header 5", text: "Text 5" }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  return (
    <div className="slider-container" style={{ display: 'flex' }}>
      {data.map((item, index) => (
        <div className="card" key={item.id} style={{ flex: 1, border: '1px solid #ccc', margin: '0 5px', padding: '10px' }}>
          <h2>{item.header}</h2>
          <p>{item.text}</p>
        </div>
      ))}
      <button className="prev-btn" onClick={prevSlide}>{"<"}</button>
      <button className="next-btn" onClick={nextSlide}>{">"}</button>
    </div>
  );
};

export default Slider;
