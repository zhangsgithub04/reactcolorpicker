import React from 'react';
import { Menu, MenuItem, Divider, MenuButton } from '@mui/joy';
import Button from '@mui/joy/Button';
 
const PopupMenu = () => {
  return (
    <Menu>
      <MenuButton component={Button} variant="solid" startIcon="dashboard">
        控制面板
      </MenuButton>
      <MenuItem>项目</MenuItem>
      <MenuItem>用户</MenuItem>
      <Divider />
      <MenuItem>设置</MenuItem>
    </Menu>
  );
};
 
export default PopupMenu;