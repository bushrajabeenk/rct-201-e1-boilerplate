import { useEffect, useState } from "react";

const useClock = () => {
  // TODO
  // refer readme.md for what to return
  const [clock, setClock] = useState(new Date());


  useEffect(() => {
    let id = setInterval(() => {
      setClock(new Date());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  const hours = clock.getHours();
  const minutes = clock.getMinutes();
  const seconds = clock.getSeconds();
  return { hours, minutes, seconds }
};

export default useClock;
