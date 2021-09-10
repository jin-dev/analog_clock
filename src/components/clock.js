import styled from "styled-components";
import { Frame } from "./frame";
import { Markings } from "./markings";
import { Second } from "./second";
import { Hour } from "./hour";
import { Minute } from "./minute";
import Store from "../Context/Emitter";



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
      </Store>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
