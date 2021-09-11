import { useEffect, useState } from "react";
import styled from "styled-components";
import { RADIUS } from "../constants";
import { useStore } from "../Context/Store";

export const Hour = ({ dimens }) => {
  const { state } = useStore();
  const [hour, setHour] = useState(state.h);
  const cx = dimens.w / 2 || 0;
  const cy = dimens.h / 2 || 0;

  useEffect(() => {
    setHour(state.h * 30);
  }, [state.h]);
  return (
    <>
      <Dial
        x1={cx}
        y1={cy}
        x2={cx}
        y2={cy - RADIUS + 80}
        angle={hour}
        stroke="#fff"
        strokeWidth="15"
        strokeLinecap="round"
      />
    </>
  );
};

const Dial = styled.line`
  position: absolute;
  transform: rotateZ(${(p) => `${p.angle}deg`});
  background: #fff;
  transform-origin: center;
  
`;