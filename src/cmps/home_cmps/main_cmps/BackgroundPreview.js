import React from 'react';

function BackgroundPreview({ timePoint }) {

  return (
    <li className="time-point">
      <h3 className="title">{timePoint.title}</h3>
      <div className="hexagon">
        <div className="text flex space-center align-center">
          <h3>{timePoint.subtitle}
          </h3>
        </div>
      </div>
      <div className="description">
        <label>{timePoint.description}</label>
      </div>
    </li>
  );
}

export default React.memo(BackgroundPreview)