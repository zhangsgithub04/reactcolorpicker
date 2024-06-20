import { useState } from 'react';
import { SketchPicker } from 'react-color';
import {
    Box,
 
    IconButton,
    Menu,
    MenuItem,
    Typography,
    Slider,
    Button
} from '@mui/joy';

import PaletteIcon from '@mui/icons-material/Palette';

export default function ColorPicker2()  {
  const [color, setColor] = useState("#333");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);


  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
};

const handleMenuClose = () => {
    setAnchorEl(null);
};


  return (
    <div>
        <IconButton onClick={handleMenuOpen}>
            <PaletteIcon />
        </IconButton>


<Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{ padding: 2 }}
            >

      <SketchPicker 
      
                color={color}
                onChangeComplete={ (color:any)=>setColor(color.hex) }
           />
           </Menu>

           </div>
  )
}
