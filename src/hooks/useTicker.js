import { useEffect, useState } from "react";

export const useTicker = () => {
  const [second, setSecond] = useState(new Date().getSeconds());

  useEffect(() => {
    const Timer = setInterval(() => {
      setSecond((s) => (s < 59 ? s + 1 : 0));
    }, 1000);

    return () => {
      clearInterval(Timer);
    };
  }, []);

  return second;
};
