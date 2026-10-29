import { useEffect, useRef, useState } from "react";

export const useTimer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const startedAt = useRef(0);

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setTime((performance.now() - startedAt.current) / 1000);
    }, 10);

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const start = () => {
    startedAt.current = performance.now();
    setTime(0);

    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);

    const finalTime = (performance.now() - startedAt.current) / 1000;
    setTime(finalTime);

    return finalTime;
  };

  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return { time, start, stop, reset };
};
