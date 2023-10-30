import React from 'react';
import Header from './commons/Header';
import Loggin from './Loggin';
import Hotel from './commons/InfoHotel';
import { Box } from '@mui/material';
function Home() {
  return (
    <div>
      <di>
      <Header/>
      </di>
      

      <h1>Hotel Visualizer</h1>
      <p>Welcome to our hotel publication visualizer!</p>
      <Box
      sx={{
        display: 'grid',
        columnGap: 3,
        rowGap: 1,
        gridTemplateColumns: 'repeat(2, 1fr)',
      }}>
      <Hotel/>
      <Hotel/>
      <Hotel/>
      <Hotel/>
      <Hotel/>
      </Box>
     
      

    </div>
  );
}

export default Home;