import type { FC } from "react";

interface Props {
  element: string;
  color: string;
}

const SequenceItem: FC<Props> = ({ element, color }) => {
  return (
    <>
      <span
        style={{ backgroundColor: color }}
        className="sequences__sequence__item"
      >
        {element.toUpperCase()}
      </span>
    </>
  );
};

export default SequenceItem;
