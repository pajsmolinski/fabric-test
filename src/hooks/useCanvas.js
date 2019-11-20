import { useState, useEffect, useRef, useCallback } from "react";
import createFabricCanvas from "./../studio/canvas";
import createFabricObject from "./../studio/object";

const useCanvas = () => {
    const ref = useRef();
    const [canvas] = useState(createFabricCanvas());

    useEffect(() => {
        canvas.initialize(ref.current, {
            width: window.innerWidth,
            height: window.innerHeight
        });

        const customObject = createFabricObject();
        canvas.add(customObject);

        canvas.renderAll();
    }, [canvas]);
    

    const setRef = useCallback(node => {
        ref.current = node;
    })

    return [setRef];
}

export default useCanvas;