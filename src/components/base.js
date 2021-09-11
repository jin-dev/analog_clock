import { Fragment } from "react";
import styled, { css } from "styled-components";
import { RADIUS } from "../constants";

export const Base = () => {
  const dots = [0, 30, 60, 90].map((deg) => {
    const x = Math.floor(RADIUS * Math.cos((deg * Math.PI) / 180));
    const y = Math.floor(RADIUS * Math.sin((deg * Math.PI) / 180));
    return (
      <Fragment key={deg}>
        <DialBase x={x} y={y} angle={deg} />
        <DialBase x={x} y={-y} angle={-deg} />
        <DialBase x={-x} y={y} angle={-deg} />
        <DialBase x={-x} y={-y} angle={deg} />
      </Fragment>
    );
  });
  return (
    <>
      {dots}
      <BaseText x={0} y={-RADIUS - 40} angle={0}>
        12
      </BaseText>
      <BaseText x={RADIUS + 40} y={0} angle={0}>
        3
      </BaseText>
      <BaseText x={0} y={RADIUS + 40} angle={0}>
        6
      </BaseText>
      <BaseText x={-RADIUS - 40} y={0} angle={0}>
        9
      </BaseText>
    </>
  );
};


const DialBase = styled.div`
  position: absolute;
  width: 16px;
  border-radius: 3px;
  background: #fff;
  transform: translate(${(p) => `${p.x}px`}, ${(p) => `${p.y}px`})
    rotate(${(p) => `${p.angle}deg`});

  ${({ angle }) => {
    switch (angle) {
      case 0:
      case 90:
        return css`
          width: 40px;
          height: 5px;
       
        `;
      default:
        return css`
          height: 3px;
        `;
    }
  }}
`;

const BaseText = styled.h4`
  position: absolute;
  color: #fff;
  font-size: 2rem;
  transform: translate(${(p) => `${p.x}px`}, ${(p) => `${p.y}px`})
    rotate(${(p) => `${p.angle}deg`});
`;
