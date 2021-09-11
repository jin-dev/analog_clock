import { useEffect, useState } from "react";
import styled from "styled-components";
import { RADIUS } from "../constants";
import { useStore } from "../Context/Store";


export const Minute = ({ dimens }) => {
  const { state, dispatch } = useStore();
  const [minutes, setMinutes] = useState(state.m);
  const cx = dimens.w / 2 || 0;
  const cy = dimens.h / 2 || 0;

  useEffect(() => {

    setMinutes(state.m * 6);
    if (minutes === 360) {    
      dispatch({ type: "minutes" });
    }
  }, [state.m]);

  return (
    <Dial
      x1={cx}
      y1={cy}
      x2={cx}
      y2={cy - RADIUS + 30}
      angle={minutes}
      stroke="#fff"
      strokeWidth="8"
      strokeLinecap="round"
    />
  );
};

const Dial = styled.line`
  position: absolute;
  transform: rotateZ(${(p) => `${p.angle}deg`});
  background: #fff;
  transform-origin: center;
 
`;
