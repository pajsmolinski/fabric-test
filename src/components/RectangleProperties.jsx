import React from 'react';
import styled, { css } from 'styled-components';


const Wrapper = styled.div`
  position: absolute;
`

export const RectangleProperties = ({ rectangle }) => {

  const position = {x: 0, y: 0};

  if(rectangle) {
    position.x = rectangle.left + rectangle.width + rectangle.padding;
    position.y = rectangle.translateY;
  }

  return <Wrapper position={position} style={{ left: position.x, top: position.y }}>
    test
  </Wrapper>;

};
