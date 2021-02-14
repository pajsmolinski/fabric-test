import React, { memo } from 'react';
import styled from 'styled-components';
import useCanvas from './../hooks/useCanvas';
import { RectangleProperties } from './RectangleProperties';
import {randomColor} from "../random";

const CanvasEl = styled.canvas`
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 999;
`;

const CanvasComponent = memo(({ canvasRef }) => <CanvasEl ref={ canvasRef }/>);

const Canvas = () => {
  const [ canvasRef, canvas, objects ] = useCanvas();

  const renderRandomColor = (object) => {
    object.set('fill', randomColor());
    canvas.renderAll();
  }

  return <>
    <CanvasComponent canvasRef={ canvasRef }/>
    {objects.map(object => <RectangleProperties key={object.id} rectangle={object} onRandomizeColor={renderRandomColor} />)}
  </>;
};

export default Canvas;
