import React from 'react';

function Knowledge() {

  return (
    <div className="knowledge">
    <div className="fields">
      <div className="field">
        <h3>Client</h3>
        <span>React.js</span>
        <span>Vue.js</span>
        {/* <span>Angular</span> */}
      </div>
      <div className="field">
        <h3>Server</h3>
        <span>Node.js</span>
        {/* <span>SQL</span> */}
      </div>
      <div className="field">
        <h3>DataBase</h3>
        <span>MongoDB</span>
        {/* <span>MySQL</span> */}
      </div>
    </div>
    </div>
  );
}

export default React.memo(Knowledge)