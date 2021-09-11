import { useEffect, useState } from "react";
import styled from "styled-components";
import { RADIUS } from "../constants";
import { useStore } from "../Context/Store";
import { useTicker } from "../hooks/useTicker";



export const Second = ({ dimens }) => {
  const { dispatch } = useStore();
  const [seconds, setSeconds] = useState(0);
  const ticker = useTicker();
  const cx = dimens.w / 2 || 0;
  const cy = dimens.h / 2 || 0;

  useEffect(() => {
    setSeconds(() => ticker * 6);
  
    if (seconds === 354) {
      dispatch({ type: "seconds" });
    }
  }, [ticker]);

  return (
    <>
      <Dial
        x1={cx}
        y1={cy}
        x2={cx}
        y2={cy - RADIUS + 10}
        angle={seconds}
        stroke="#b20238"
        strokeWidth="3"
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