import { useEffect, useRef, useState } from "react";

const useResizeSequences = (): [
  React.RefObject<HTMLDivElement | null>,
  number
] => {
  const ITEM_WIDTH = 50;

  const sequencesRef = useRef<HTMLDivElement>(null);

  const [sequencesWidth, setSequencesWidth] = useState(window.innerWidth - 50);

  const [slotsCount, setSlotsCount] = useState(
    Math.floor(sequencesWidth / ITEM_WIDTH)
  );
  useEffect(() => {
    const updateWidth = () => {
      if (sequencesRef.current) {
        setSequencesWidth(sequencesRef.current.offsetWidth);
        setSlotsCount(
          Math.floor(sequencesRef.current.offsetWidth / ITEM_WIDTH)
        );
      }
    };

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return [sequencesRef, slotsCount];
};

export default useResizeSequences;
