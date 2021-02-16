import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  position: absolute;
  padding: 10px;
  border: 1px solid #000;
  z-index: 1000;
  transform: translateY(-50%);
  background-color: #fff;
`;

export const ObjectProperties = ({ object, onRandomizeColor }) => {
  const style = { left: 0, top: 0 };

  const randomizeColor = React.useCallback(() => onRandomizeColor(object), [object.id]);

  if(!object) {
    return null;
  }

  if (object) {
    object.setCoords();

    style.left = object.oCoords.mr.x;
    style.top = object.oCoords.mr.y;

    if (object.group) {
      object.group.calcOwnMatrix();

      style.left = style.left + object.group.translateX;
      style.top = style.top + object.group.translateY;
    }
  }

  return (
    <Wrapper style={style}>
      <button type={"button"} onClick={randomizeColor}>
        randomize color
      </button>
    </Wrapper>
  );
};

ObjectProperties.propTypes = {
  object: PropTypes.object,
  onRandomizeColor: PropTypes.func
}
