import React from 'react';
import { Menu, MenuItem, MenuDivider, MenuButton } from '@mui/joy/Menu';
import Button from '@mui/joy/Button';
 
const PopupMenu = () => {
  return (
    <Menu>
      <MenuButton component={Button} variant="solid" startIcon="dashboard">
        控制面板
      </MenuButton>
      <MenuItem>项目</MenuItem>
      <MenuItem>用户</MenuItem>
      <MenuDivider />
      <MenuItem>设置</MenuItem>
    </Menu>
  );
};
 
export default PopupMenu;