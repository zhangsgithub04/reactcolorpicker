import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import MyToolbar from './menuBar';
import ColorPicker from './ColorPicker'; // Adjust the path as needed

export default function TryFabricjs() {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  let img;

  function prepareGrids():fabric.Path
  {
    var i = 0;
    var gridx = 20;                        // (number) horizontaler Rasterabstand
    var gridy = 20;                        // (number) vertikaler Rasterabstand
    var path = "";                        // (string) Linien für das Raster
    var gridshape = null;            // (fabric.js Object) Angezeigtes Raster
    var snapdistance = 2;            // (number) Faktor für den Abstand zum Einschnappen
    
    if ( (gridx <= 20) || (gridy <= 20) ) {
        snapdistance = 1;
    }


    // vertical lines
 for (i = 0; i < (600 / gridx); i++) {
   path = path + "M " + (i * gridx) + " 0 L " + (i * gridx) + " 400 ";
   path = path + "L " + (i * gridx + 1) + " 400 L " + (i * gridx + 1) + " 0 z ";
   
   }
   
   // horizontal lines
   for (i = 0; i < (400 / gridy); i++) {
   path = path + " M 0 " + (i * gridy) + " L 600 " + (i * gridy);
   path = path + " L 600 " + (i * gridy + 1) + " L 0 " + (i * gridy + 1) + " z ";
   }
   
   // add grid to canvas
   // console.log(path);
   gridshape = new fabric.Path(path);
   gridshape.set({
     fill: "#00f",
     opacity: 0.25, 
     selectable: false,
     evented: false
   });
   return gridshape
  }
  var  newCanvas:any;
  useEffect(() => {
     newCanvas = new fabric.Canvas(canvasRef.current, {
      backgroundColor: '#00fffb',
      width: 768,
      height: 576,
    });
 
    setCanvas(newCanvas as any);
 

    
    const rect = new fabric.Rect({
      left: 100,
      top: 50,
      fill: 'pink',
      width: 60,
      height: 60,
      strokeWidth: 5,
      hasControls: true,
      hasRotatingPoint: true,
      hasBorders: true,
      transparentCorners: true,
      perPixelTargetFind: true,
      selectable: true,
      lockMovementX: false,
      lockMovementY: false,
    });
 
    const circle = new fabric.Circle({
      left: 100,
      top: 100,
      fill: 'yellow',
      radius: 50,
    });
    newCanvas.add(circle);
    newCanvas.add(rect);
    
    fabric.Image.fromURL('./img1.png', function (oImg: any) {
      // scale image down, and flip it, before adding it onto canvas
      //缩小图像并翻转它
      oImg.scale(0.25).set('flipX', true);
      newCanvas.add(oImg);
      img=oImg;
    });
 
    let gridshape=prepareGrids();
   newCanvas.add(gridshape);
   
   newCanvas.on("mouse:move", (options:any)=>{
    //var p=newCanvas.getPoint(options.e);
    console.log("mouse move")

  });


  newCanvas.on("mouse:down", (options:any)=>{
    //var p=newCanvas.getPoint(options.e);
    console.log("mouse down")

  });
  newCanvas.on("mouse:up", (options:any)=>{
    //var p=newCanvas.getPoint(options.e);
    console.log("mouse up")

  });

    return () => {
      // newCanvas.dispose();
    };
  }, [canvasRef]);
 
/*
  useEffect(() => {
    const mouseDown = (handle: fabric.IEvent<MouseEvent>) => {
      console.log("mouse down");
    
      const { e } = handle;
      const target = e.target || {}
      console.info(e.target)
      }

    newCanvas.on('mouse:down', mouseDown)

    return () => {
      newCanvas.off("mouse:down", mouseDown)
    }

  }, [img])

  */



  return (
    <div>
      <canvas ref={canvasRef}></canvas>
      <ColorPicker  mycolor='#616161'/>
      <MyToolbar/>

    </div>
  );
}