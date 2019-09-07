import React from 'react';

import BackgroundPreview from './BackgroundPreview';

function Background({ timePoints }) {

  const showTimePoints = timePoints ?
    timePoints.map(timePoint => <BackgroundPreview timePoint={timePoint} key={timePoint._id} />)
    : <div>'Wait time points..'</div>

  return (
    <div className="background">
      <div className="bc-image"></div>
      <h2>מה הרקע שלי?</h2>
      <ul className="time-points">
        {showTimePoints}
      </ul>
    </div>
  );

}

export default React.memo(Background)