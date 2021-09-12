import styled from "styled-components";

import { useStore } from "../Context/Store";
import { useState } from "react";
import MouseTooltip from 'react-sticky-mouse-tooltip';


//Tooltip that displays current Time
//Visible depends on mouse movement

export const ClockInfo = () => {

        const { state } = useStore();
        const [showTip, setShowTip] = useState(false);
      
  return (
   
    <Container onMouseEnter={() => setShowTip(true)} onMouseLeave={() => setShowTip(false)}>
        <MouseTooltip visible={showTip}  offsetX={15}
          offsetY={10}>
            <Tiptext>{'[Current Time] : ' + state.h + ' : ' + state.m} </Tiptext>
        </MouseTooltip>
    </Container>
  
  );
};

const Tiptext = styled.h4`
	color: #25e698;
`
const Container = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;