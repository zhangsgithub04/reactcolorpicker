import React,{ useState } from 'react';
import { CompactPicker } from 'react-color';

const ColorPicker5 = () => {
/** 支持16进制颜色和rgb哦 */
// const [color, setColor] = useState('rgb(255,255,255)')
const [color, setColor] = useState('#fff')

/** 
colorObj属性如下
hex: "#ffffff"
hsl: {h: 0, s: 0, l: 1, a: 1}
hsv: {h: 0, s: 0, v: 1, a: 1}
oldHue: 0
rgb: {r: 255, g: 255, b: 255, a: 1}
source: "hex"
*/
const onChangeColor = (colorObj: any) => {
	setColor(colorObj.hex)
}

/** onChangeCompeleteColor 我测试发现无法触发，可能是这个组件无onChangeComplete，大家可以用其它组件试试看 */
const onChangeCompeleteColor = (colorObj:any) => {
	console.log(colorObj)
}

return <CompactPicker color={color} onChange={onChangeColor} onChangeComplete={onChangeCompeleteColor } /> 
}

export default ColorPicker5;