import { SketchPicker, BlockPicker, ChromePicker} from "react-color";
import { useState } from "react";

function ColorPicker4() {
  //creating state to store our color and also set color using onChange event for sketch picker
  const [sketchPickerColor, setSketchPickerColor] = useState({
    r: "241",
    g: "112",
    b: "19",
    a: "1",
  });
  // destructuring rgba from state
  const { r, g, b, a } = sketchPickerColor;


  
  //creating state to store our color and also set color using onChange event for block picker
  const [blockPickerColor, setBlockPickerColor] = useState("#37d67a");

  return (
    <div
      className="App"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <div className="sketchpicker">
        <h6>Sketch Picker</h6>
        {/* Div to display the color  */}
        <div
          style={{
            backgroundColor: `rgba(${r},${g},${b},${a})`,
            width: 100,
            height: 50,
            border: "2px solid white",
          }}
        ></div>
        {/* Sketch Picker from react-color and handling color on onChange event */}
        <SketchPicker
  onChange={(color) => {
    setSketchPickerColor({
      r: color.rgb.r.toString(),
      g: color.rgb.g.toString(),
      b: color.rgb.b.toString(),
      a: color.rgb.a !== undefined ? color.rgb.a.toString() : '1', 
    });
  }}
  //color={sketchPickerColor}
/>

<div className="sketchpicker">
        <h6>Sketch Picker</h6>
        {/* Div to display the color  */}
        <div
          style={{
            backgroundColor: `rgba(${r},${g},${b},${a})`,
            width: 100,
            height: 50,
            border: "2px solid white",
          }}
        ></div>
        {/* Sketch Picker from react-color and handling color on onChange event */}


{/*  <SketchPicker
          onChange={(color) => {
            setSketchPickerColor(color.rgb);
          }}
          color={sketchPickerColor}
        />
        */}


<ChromePicker
  onChange={(color) => {
    setSketchPickerColor({
      r: color.rgb.r.toString(),
      g: color.rgb.g.toString(),
      b: color.rgb.b.toString(),
      a: color.rgb.a !== undefined ? color.rgb.a.toString() : '1', 
    });
  }}
  //color={sketchPickerColor}
/>

      </div>
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
    </div>
  );
}

export default ColorPicker4;