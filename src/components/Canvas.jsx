import React, {memo} from "react";
import styled from "styled-components";
import useCanvas from "./../hooks/useCanvas";
import {ObjectProperties} from "./ObjectProperties";
import {randomColor} from "../random";
import PropTypes from "prop-types";

const CanvasEl = styled.canvas`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 999;
`;

const CanvasComponent = memo(({canvasRef}) => (<CanvasEl ref={canvasRef}/>));

CanvasComponent.propTypes = {
    canvasRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.elementType })
    ]),
}
CanvasComponent.displayName = "CanvasMemoEl"

const Canvas = () => {
    const [canvasRef, canvas, activeObjects] = useCanvas();

    const renderRandomColor = (object) => {
        object.set("fill", randomColor());
        canvas.renderAll();
    };

    return (
        <>
            <CanvasComponent canvasRef={canvasRef}/>
            {activeObjects.map((object) => (
                <ObjectProperties
                    key={object.id}
                    object={object}
                    onRandomizeColor={renderRandomColor}
                />
            ))}
        </>
    );
};

export default Canvas;
