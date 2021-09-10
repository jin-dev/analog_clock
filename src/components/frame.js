import { RADIUS, RADIUS_SMALL} from "../constants";
import styled from "styled-components";
export const Frame = ({ dimens }) => {
  const w = dimens.w;
  const h = dimens.h;

  const cx = w / 2 || 0;
  const cy = h / 2 || 0;

  return (
    <>
      <Stycircle
        cx={cx}
        cy={cy}
        r={RADIUS_SMALL}
        fill="#fff"
        stroke="none"
        
      />
      <Stycircle
        cx={cx}
        cy={cy}
        r={RADIUS}
        fill="none"
        stroke="#e7fde7"
       
      />
    </>
  );
};


const Stycircle = styled.circle`

`