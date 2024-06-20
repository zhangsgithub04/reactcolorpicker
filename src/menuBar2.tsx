import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, ClickAwayListener, Box } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { CssVarsProvider, Button } from '@mui/joy';

const MenuBar2 = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isMenuOpen = Boolean(anchorEl);

  return (
    <CssVarsProvider>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Box flexGrow={1}>
            <Button variant="outlined">Example Button</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <ClickAwayListener onClickAway={handleClose}>
        <Menu
          anchorEl={anchorEl}
          open={isMenuOpen}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: '200px',
              width: '250px',
            },
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </ClickAwayListener>
    </CssVarsProvider>
  );
};

export default MenuBar2;