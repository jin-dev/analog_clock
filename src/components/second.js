import { useEffect, useState } from "react";
import styled from "styled-components";
import { RADIUS } from "../constants";
import { useStore } from "../Context/Store";
import { useTicker } from "../hooks/useTicker";



export const Second = ({ dimens }) => {
  const { dispatch } = useStore();
  const [seconds, setSeconds] = useState(0);
  const ticker = useTicker();
  const tx = dimens.w / 2 || 0;
  const ty = dimens.h / 2 || 0;

  useEffect(() => {
    setSeconds(() => ticker * 6);
  
    if (seconds === 354) {
      dispatch({ type: "seconds" });
    }
  }, [ticker]);

  return (
    <>
      <Sec
        x1={tx}
        y1={ty}
        x2={tx}
        y2={ty - RADIUS - 120}
        angle={seconds}
        stroke="#b20238"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </>
  );
};

const Sec = styled.line`
  position: absolute;
  transform: rotateZ(${(p) => `${p.angle}deg`});
  background: #fff;
  transform-origin: center;
`;