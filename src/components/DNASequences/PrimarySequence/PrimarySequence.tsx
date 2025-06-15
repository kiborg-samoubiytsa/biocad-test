import type { FC } from "react";
import SequenceItem from "../DNAElement/SequenceItem";
import symbolsMap from "../../../shared/symbols";

interface Props {
  sequence: string[];
}

const PrimarySequence: FC<Props> = ({ sequence }) => {
  return (
    <div className="sequences__sequence">
      {sequence.map((e, i) => (
        <SequenceItem
          color={symbolsMap[e.toLowerCase()]}
          element={e}
          key={i}
        ></SequenceItem>
      ))}
    </div>
  );
};

export default PrimarySequence;
