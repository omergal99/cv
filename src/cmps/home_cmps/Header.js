import React from 'react';

function Header() {

  return (
    <div className="header">
      <h1>שלום! אני עומר</h1>
      <div className="my-picture">
        <div className="wrap-color">
          <div className="wrap-img">
            <img src="assets/img/profile/omer.jpg" alt="Propile" />
          </div>
        </div>
      </div>
      <h2>מפתח אפליקציות ואתרים <span style={{ display: 'inline-block' }}>Fullstack Developer</span></h2>
      <p>מוזמנים להסתכל 😋</p>
    </div>
  );
}

export default React.memo(Header)