import React from 'react';
import Header from './commons/Header';
import Loggin from './Loggin';
import Hotel from './commons/InfoHotel';
import { Box } from '@mui/material';



export function Home() {
  return (
    <div>
      <div style={{ margin: '5px' }}>
        <Header />
      </div>

      <div style={{ marginTop: '150px', padding: '20px' }}>
        <Box
          sx={{
            display: 'grid',
            columnGap: 3,
            rowGap: 2,
            gridTemplateColumns: 'repeat(3, 2fr)',
          }}
        >
          <Hotel />   
          <Hotel />  
          <Hotel />     
        </Box>
      </div>
    </div>
  );
}

export default Home;