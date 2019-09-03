import React from 'react';

import BackgroundPreview from './BackgroundPreview';

function Background({ timePoints }) {

  const showtimePoints = timePoints ?
    timePoints.map(timePoint => <BackgroundPreview timePoint={timePoint} key={timePoint._id} />)
    : <div>'Wait time points..'</div>

  return (
    <div className="background">
      <h2>My Backgound</h2>
      <ul className="time-points">
        {showtimePoints}
      </ul>
    </div>
  );

}

export default React.memo(Background)