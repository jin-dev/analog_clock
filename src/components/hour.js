import { useEffect, useState } from "react";
import styled from "styled-components";
import { RADIUS } from "../constants";
import { useStore } from "../Context/Store";

export const Hour = ({ dimens }) => {
  const { state } = useStore();
  const [hours, setHours] = useState(state.h);
  const tx = dimens.w / 2 || 0;
  const ty = dimens.h / 2 || 0;

  useEffect(() => {
    setHours(state.h * 30);
  }, [state.h]);
  return (
    <>
      <Hr
        x1={tx}
        y1={ty}
        x2={tx}
        y2={ty - RADIUS - 10}
        angle={hours}
        stroke="#fff"
        strokeWidth="15"
        strokeLinecap="round"
      />
    </>
  );
};

const Hr = styled.line`
  position: absolute;
  transform: rotateZ(${(p) => `${p.angle}deg`});
  background: #fff;
  transform-origin: center;
  
`;