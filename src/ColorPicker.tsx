// ColorPicker.tsx
import React, { useState } from 'react';
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

interface Props {
    mycolor: string;
}

const colors = [
    ['#FFFFFF', '#BDBDBD', '#616161', '#000000'],
    ['#FFEB3B', '#FFC107', '#8BC34A', '#4CAF50'],
    ['#FF9800', '#F44336', '#E91E63', '#9C27B0'],
    ['#00BCD4', '#03A9F4', '#2196F3', '#1E88E5']
];



export default function ColorPicker(p: Props) {
    const { mycolor } = p;
    console.log("stephen" + mycolor);
    //const ColorPicker: React.FC = (props:Props) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedColor, setSelectedColor] = useState<string>('');
    const [opacity, setOpacity] = useState<number>(100);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleColorSelect = (color: string) => {
        setSelectedColor(color);
        handleMenuClose();
    };

    const handleOpacityChange = (event: Event, newValue: number | number[]) => {
        setOpacity(newValue as number);
    };

    return (
        <Box>
            <IconButton onClick={handleMenuOpen}>
                <PaletteIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{ padding: 2 }}
            >
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1 }}>
                    {colors.flat().map((color, index) => (
                        
                        <MenuItem
                            key={index}
                            
                    sx={{ backgroundColor: color, width: mycolor==color?'50px':'30px', height: '30px', borderRadius: '50%' }}

                    onClick={() => handleColorSelect(color)}
            />
          ))}

                </Box>
                <Box sx={{ marginTop: 2 }}>
                    <Typography level="h2">Custom Colors</Typography>
                    <Button variant="outlined" sx={{ width: '100%', justifyContent: 'left', marginTop: 1 }}>
                        <Box sx={{ width: 30, height: 30, backgroundColor: 'grey.300', borderRadius: '50%', marginRight: 1 }}>+</Box>
                        Add Custom Color
                    </Button>
                </Box>
                <Box sx={{ marginTop: 2 }}>
                    <Typography level="h2">Opacity</Typography>
                    <Slider
                        value={opacity}
                        onChange={handleOpacityChange}
                        aria-labelledby="opacity-slider"
                        sx={{ color: selectedColor }}
                    />
                </Box>
            </Menu>
        </Box>
    );
};

//export default ColorPicker;