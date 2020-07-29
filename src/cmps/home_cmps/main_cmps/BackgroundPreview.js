import React from 'react';

function BackgroundPreview({ timePoint }) {

  return (
    <li className="time-point">
      <h3 className="title">{timePoint.title}</h3>
      <div className="hexagon" style={{ filter: timePoint.filter, 
        transform: `rotate(-${timePoint.rotateDeg}deg)`,backgroundPosition: timePoint.bcPosition }}>
        <div className="text flex space-center align-center"
          style={{ transform: `rotate(${timePoint.rotateDeg}deg)` }}>
          <h3 className="sub-title">{timePoint.subtitle}</h3>
        </div>
      </div>
      <div className="description">
        <p>{timePoint.description}</p>
      </div>
    </li>
  );
}

export default React.memo(BackgroundPreview)
