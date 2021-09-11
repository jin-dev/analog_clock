import styled from "styled-components";

import { Markings } from "./markings";
import { Second } from "./second";
import { Hour } from "./hour";
import { Minute } from "./minute";
import { ClockInfo } from "./clockInfo"
import Store from "../Context/Store";


export const Clock = ({ dimens, viewBox }) => {

  return (
   
    <Container>
      <Markings />
    
      <Store>
    
        <svg viewBox={viewBox} width={dimens.w} height={dimens.h}>
          <Hour dimens={dimens} viewBox={viewBox} />
          <Minute dimens={dimens} viewBox={viewBox} />
          <Second dimens={dimens} viewBox={viewBox} />
        </svg>
        <ClockInfo/>
    
        </Store>   
    </Container>
  
  );
};



const Container = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
`;
