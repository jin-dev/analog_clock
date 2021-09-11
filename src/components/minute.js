import { useEffect, useState } from "react";
import styled from "styled-components";
import { RADIUS } from "../constants";
import { useStore } from "../Context/Store";


export const Minute = ({ dimens }) => {
  const { state, dispatch } = useStore();
  const [minutes, setMinutes] = useState(state.m);
  const tx = dimens.w / 2 || 0;
  const ty = dimens.h / 2 || 0;

  useEffect(() => {

    setMinutes(state.m * 6);
    if (minutes === 360) {    
      dispatch({ type: "minutes" });
    }
  }, [state.m]);

  return (
    <Min
      x1={tx}
      y1={ty}
      x2={tx}
      y2={ty - RADIUS - 80}
      angle={minutes}
      stroke="#fff"
      strokeWidth="8"
      strokeLinecap="round"
    />
  );
};

const Min = styled.line`
  position: absolute;
  transform: rotateZ(${(p) => `${p.angle}deg`});
  background: #fff;
  transform-origin: center;
`;
