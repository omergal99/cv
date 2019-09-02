import React from 'react';

import Header from '../cmps/home_cmps/Header';
import Main from '../cmps/home_cmps/Main';
import Footer from '../cmps/home_cmps/Footer';

function Home() {

  return (
    <div className="home">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default React.memo(Home)