import { BlockPicker } from "react-color";
import { useState } from "react";

function ColorPicker3() {
 
  //creating state to store our color and also set color using onChange event for block picker
  const [blockPickerColor, setBlockPickerColor] = useState("#37d67a");

  return (
    <div className="App">
      <div className="blockpicker">
        <h6>Color Picker</h6>
        {/* Div to display the color  */}
        <div
          style={{
            backgroundColor: `${blockPickerColor}`,
            width: 100,
            height: 50,
            border: "2px solid white",
          }}
        ></div>
        {/* Block Picker from react-color and handling color on onChange event */}
        <BlockPicker
          color={blockPickerColor}
          onChange={(color) => {
            setBlockPickerColor(color.hex);
          }}
        />
      </div>
    </div>
  );
}

export default ColorPicker3;