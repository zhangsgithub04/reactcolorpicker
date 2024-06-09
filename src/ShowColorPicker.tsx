// App.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, Container } from '@mui/joy';
import ColorPicker from './ColorPicker'; // Adjust the path as needed

const ShowColorPicker: React.FC = () => {
  return (
    <Container>
      <CssBaseline />
      <ColorPicker  mycolor='#616161'/>
      {/* Other components can go here */}
    </Container>
  );
};

export default ShowColorPicker;
