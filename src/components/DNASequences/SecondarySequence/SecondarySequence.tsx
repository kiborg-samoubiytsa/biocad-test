import type { FC } from "react";
import SequenceItem from "../DNAElement/SequenceItem";
import symbolsMap from "../../../shared/symbols";

interface Props {
  sequence: string[];
  primarySequence: string[];
}

const SecondarySequence: FC<Props> = ({ sequence, primarySequence }) => {
  return (
    <div className="sequences__sequence">
      {sequence.map((e, i) => (
        <SequenceItem
          color={
            e.toLowerCase() == primarySequence[i].toLowerCase()
              ? symbolsMap["-"]
              : symbolsMap[e.toLowerCase()]
          }
          element={e}
          key={i}
        ></SequenceItem>
      ))}
    </div>
  );
};

export default SecondarySequence;
