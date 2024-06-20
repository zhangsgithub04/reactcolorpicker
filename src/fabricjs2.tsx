import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import Toolbar from './Toolbar';


const TryFabricjs2: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selectedObject, setSelectedObject] = useState<fabric.Object | null>(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current);

    // Sample object
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 60,
      height: 70,
    });
    canvas.add(rect);

    // Add event listener for object selection
    canvas.on('selection:created', (event) => {
      setSelectedObject(event.selected ? event.selected[0] : null);
    });

    canvas.on('selection:cleared', () => {
      setSelectedObject(null);
    });

    return () => {
      canvas.dispose();
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width={600} height={400} />
      {selectedObject && <Toolbar object={selectedObject} />}
    </div>
  );
};

export default TryFabricjs2;
