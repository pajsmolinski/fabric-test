import React from 'react';
import styled  from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  padding: 10px;
  border: 1px solid #000;
  z-index: 1000;
  transform: translateY(-50%);
  background-color: #fff;
`

export const RectangleProperties = ({ rectangle, onRandomizeColor }) => {

  const style = {left: 0, top: 0}

  if(!rectangle) {
    return null;
  }

  if(rectangle) {
    rectangle.setCoords()

    style.left = rectangle.oCoords.mr.x;
    style.top = rectangle.oCoords.mr.y;

    if(rectangle.group) {
      rectangle.group.calcOwnMatrix();

      style.left = style.left + rectangle.group.translateX;
      style.top = style.top + rectangle.group.translateY;
    }
  }

  const randomizeColor = () => onRandomizeColor(rectangle);

  return <Wrapper style={style}>
    <button type={'button'} onClick={randomizeColor}>randomize color</button>
  </Wrapper>;

};
