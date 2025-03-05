import React from 'react';
import './TiltedScroll.scss';

const TiltedScroll = () => {
  const items = [
    { id: "1", text: "React" },
    { id: "2", text: "Unity" },
    { id: "3", text: "Flutter" },
    { id: "4", text: "FastAPI" },
    { id: "5", text: "MongoDB" },
    { id: "6", text: "AWS" },
    { id: "7", text: "HuggingFace" },
    { id: "8", text: "Oracle Cloud" },
  ];

  return (
    <div className="tilted-scroll">
      <div className="scroll-container">
        {items.map((item) => (
          <div key={item.id} className="scroll-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TiltedScroll;
