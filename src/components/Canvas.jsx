import React, { memo } from "react";
import styled from "styled-components";
import useCanvas from "./../hooks/useCanvas";

const CanvasEl = styled.canvas`
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 999;
`;

const CanvasComponent = memo(({canvasRef}) => <CanvasEl ref={canvasRef} />);

const Canvas = () => {
    const [canvasRef] = useCanvas();
    return <CanvasComponent canvasRef={canvasRef} />;
};

export default Canvas;