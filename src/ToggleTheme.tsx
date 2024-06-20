// ToggleTheme.tsx
import React from 'react';
import { useColorScheme } from '@mui/joy/styles';
import { Button } from '@mui/joy';

const ToggleTheme: React.FC = () => {
  const { mode, setMode } = useColorScheme();
 setMode('dark');
 let prevMode: any=mode;

  const handleToggleColorScheme = () => {
   prevMode === 'light' ? 'dark' : 'light';
    setMode(prevMode);
  };

  return (
    <Button onClick={handleToggleColorScheme} variant="outlined">
      Switch to {mode === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  );
};

export default ToggleTheme;