import { useEffect, useState } from "react";

type windowProps = {
  width: number;
  height: number;
};

const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState<windowProps>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };

    console.log();
  }, []);
  return windowSize;
};

export default useWindowResize;
