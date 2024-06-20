// App.tsx
import React from 'react';

import { CssBaseline, Container } from '@mui/joy';
import ColorPicker from './ColorPicker'; // Adjust the path as needed

const ShowColorPicker: React.FC = () => {
  return (
    //<Container>
      //<CssBaseline />
    <div>
      <ColorPicker  mycolor='#8BC34A'/>
      {/* Other components can go here */}
    
    
      </div>
      
      //</Container>
  );
};

export default ShowColorPicker;
