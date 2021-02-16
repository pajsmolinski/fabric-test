import { useEffect, useRef, useState } from "react";
import createFabricCanvas from "./../studio/canvas";
import createFabricObject from "./../studio/object";
import { randomNumber } from "../random";

const useCanvas = () => {
  const ref = useRef();
  const [canvas] = useState(createFabricCanvas());
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    canvas.initialize(ref.current, {
      width: window.innerWidth,
      height: window.innerHeight,
    });

    for (let i = 0; i < 5; i++) {
      const customObject = createFabricObject();
      customObject.set({
        left: randomNumber(0, window.innerWidth),
        top: randomNumber(0, window.innerHeight),
        id: i,
      });
      canvas.add(customObject);
    }

    function updateSelectedObjects(e) {
      if (!e) {
        return;
      }

      setObjects(canvas.getActiveObjects());
    }

    updateSelectedObjects("init");
    canvas.on("object:added", updateSelectedObjects);
    canvas.on("object:removed", updateSelectedObjects);
    canvas.on("object:selected", updateSelectedObjects);
    canvas.on("object:moving", updateSelectedObjects);
    canvas.on("object:rotating", updateSelectedObjects);
    canvas.on("object:scaling", updateSelectedObjects);
    canvas.on("selection:cleared", updateSelectedObjects);
    canvas.on("selection:created", updateSelectedObjects);
    canvas.on("selection:updated", updateSelectedObjects);

    canvas.renderAll();
  }, [canvas]);

  const setRef = (node) => {
    ref.current = node;
  };

  return [setRef, canvas, objects];
};

export default useCanvas;
