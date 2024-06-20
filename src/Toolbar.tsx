import React, { useEffect, useRef, useState } from 'react';

interface ToolbarProps {
    object: fabric.Object;
  }
  
const Toolbar: React.FC<ToolbarProps> = ({ object }) => {
  
    const handleDelete = () => {
      object.canvas?.remove(object);
      object.canvas?.renderAll();
    };
  
    const handleChangeColor = () => {
      object.set('fill', 'blue');
      object.canvas?.renderAll();
    };

    const handleChangeColor2 = () => {
      object.set('fill', 'blue');
      object.canvas?.renderAll();
    };
  
    return (
      <div className="toolbar">
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleChangeColor}>Change Color</button>
        <button onClick={handleChangeColor2}>Change Color via Pallete</button>
        
        {/* Add more buttons and functionalities as needed */}
      </div>
    );
  };
  

  export default Toolbar;
  