import React from 'react';

function Footer() {

  return (
    <div className="footer">
      <div className="chapters">
        <div className="chapter">
          <h3>רשתות חברתיות</h3>
          <span>Facebook</span>
          <span>Instegram</span>
          <span>Twitter</span>
        </div>
        <div className="chapter">
          <h3>צור קשר</h3>
          <span>omergal9999a@gmail.com</span>
          <span>050-9214695</span>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Footer)