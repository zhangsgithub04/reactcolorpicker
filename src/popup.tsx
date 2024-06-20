import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, ClickAwayListener, Box } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { CssVarsProvider, Button } from '@mui/joy';

const PopUp = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isMenuOpen = Boolean(anchorEl);

  return (

     
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

  );
};

export default PopUp;