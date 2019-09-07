import React from 'react';

function Header() {

  return (
    <div className="header">
      <h1>Hello! I'm Omer</h1>
      <div className="my-picture">
        <div className="wrap-color">
          <div className="wrap-img">
            <img src="assets/img/profile/omer.jpg" alt="Propile" />
          </div>
        </div>
      </div>
      <h2>Full-stack Developer</h2>
      <p>React.js <span>Hooks & Redux</span> - Node.js - MongoDB</p>
    </div>
  );
}

export default React.memo(Header)