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

  // return (
  //   <div className="background">
  //     <h2>My Backgound</h2>
  //     <div className="time-points">
  //       <div className="time-point">
  //         <h3 className="title">{timePoints.title}</h3>
  //         <div className="hexagon">
  //           <div className="text flex space-center align-center">
  //             <h3>{timePoints.subtitle}
  //             </h3>
  //           </div>
  //         </div>
  //         <div className="description">
  //           <label>{timePoints.description}</label>
  //         </div>
  //       </div>
  //       <div className="time-point">
  //         <h3 className="title">תיכון</h3>
  //         <div className="hexagon">
  //           <div className="text flex space-center align-center">
  //             <h3>10 יחידות מחשבים</h3>
  //           </div>
  //         </div>
  //         <div className="description">
  //           <label>הסבר על 10 יחידות מחשבים</label>
  //         </div>
  //       </div>
  //       <div className="time-point">
  //         <h3 className="title">תיכון</h3>
  //         <div className="hexagon">
  //           <div className="text flex space-center align-center">
  //             <h3>10 יחידות מחשבים</h3>
  //           </div>
  //         </div>
  //         <div className="description">
  //           <label>הסבר על 10 יחידות מחשבים</label>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default React.memo(Background)