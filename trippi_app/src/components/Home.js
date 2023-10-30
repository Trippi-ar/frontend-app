import React from 'react';
import Header from './commons/Header';
import Loggin from './Loggin';
import BasicCard from './commons/FichaHotel';
import Hotel from './commons/InfoHotel';
function Home() {
  return (
    <div>
      <di>
      <Header/>
      </di>
      

      <h1>Hotel Visualizer</h1>
      <p>Welcome to our hotel publication visualizer!</p>
      <Hotel/>
      <Hotel/>
      <Hotel/>
      <Hotel/>
      <Hotel/>
      

    </div>
  );
}

export default Home;