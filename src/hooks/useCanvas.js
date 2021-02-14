import {useEffect, useRef, useState} from "react";
import createFabricCanvas from "./../studio/canvas";
import createFabricObject from "./../studio/object";
import {randomNumber} from "../random";

const useCanvas = () => {
    const ref = useRef();
    const [canvas] = useState(createFabricCanvas());
    const [objects, setObjects] = useState([]);

    useEffect(() => {
        canvas.initialize(ref.current, {
            width: window.innerWidth,
            height: window.innerHeight
        });

        for (let i = 0; i < 5; i++) {
            const customObject = createFabricObject();
            customObject.set({
                left: randomNumber(0, window.innerWidth),
                top: randomNumber(0, window.innerHeight),
                id: i,
            })
            canvas.add(customObject);
        }

        function handleEvent(e) {
            if (!e) {
                return;
            }

            setObjects(canvas.getActiveObjects());
        }

        handleEvent('init');
        canvas.on("object:added", handleEvent);
        canvas.on("object:removed", handleEvent);
        canvas.on("object:selected", handleEvent);
        canvas.on("object:moving", handleEvent);
        canvas.on("object:rotating", handleEvent);
        canvas.on("selection:cleared", handleEvent);
        canvas.on("selection:created", handleEvent);
        canvas.on("selection:updated", handleEvent);

        canvas.renderAll();
    }, [canvas]);


    const setRef = node => {
        ref.current = node;
    }

    return [setRef, canvas, objects];
}

export default useCanvas;
