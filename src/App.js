import { useEffect, useRef, useState } from "react";
import { Clock } from "./components/clock";
import styled from 'styled-components';
import "./styles.css";

export default function App() {
  const containerRef = useRef(null);
  const [dimens, setDimens] = useState({ w: 0, h: 0 });

  const viewBox = [0, 0, dimens.w, dimens.h].join(" ");


  
  useEffect(() => {
    setDimens({
      w: containerRef.current.getBoundingClientRect().width,
      h: containerRef.current.getBoundingClientRect().height
    });
  }, [containerRef]);

  return (
    <div className="App" ref={containerRef}>
      <Clock dimens={dimens} viewBox={viewBox}/>
      <HoverText >Hello Adriel</HoverText>
    </div>
  );
}



const HoverText = styled.h1`
  position:absolute;
	color: #fff;
	&:hover {
		color: 	#25e698;
		cursor: pointer;
	}
`