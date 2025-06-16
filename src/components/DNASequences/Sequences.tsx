import { useEffect, useState, type FC } from "react";
import PrimarySequence from "./PrimarySequence/PrimarySequence";
import SecondarySequence from "./SecondarySequence/SecondarySequence";
import useResizeSequences from "./lib/useResizeSequences";
import { v4 as generateUuid } from "uuid";

interface Props {
  primarySequence: string[];
  secondarySequence: string[];
  setMessages: React.Dispatch<
    React.SetStateAction<
      {
        message: string;
        type: "error" | "default";
      }[]
    >
  >;
}

const Sequences: FC<Props> = ({
  primarySequence,
  secondarySequence,
  setMessages,
}) => {
  const [resizeRef, slotsCount] = useResizeSequences();
  const [selectedText, setSelectedText] = useState("");

  const [chunkedPrimarySequence, setChunkedPrimarySequence] = useState<
    string[][]
  >([]);

  const [chunkedSecondarySequence, setChunkedSecondarySequence] = useState<
    string[][]
  >([]);

  const handleSelectionChange = () => {
    if (window) {
      const sel = window.getSelection();
      const selText = sel?.toString();
      if (sel && selText && selText.length > 0) {
        setSelectedText(selText.replace(/[ \n\r]+/g, ""));
      }
    }
  };

  const chunkArray = (array: string[], chunkSize: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
      console.log(result);
    }
    console.log(result, chunkSize);
    return result;
  };

  useEffect(() => {
    setChunkedPrimarySequence(chunkArray(primarySequence, slotsCount));
    setChunkedSecondarySequence(chunkArray(secondarySequence, slotsCount));
  }, [slotsCount, primarySequence]);

  useEffect(() => {
    console.log(chunkedPrimarySequence.length);
  }, [chunkedPrimarySequence]);

  useEffect(() => {
    (async () => {
      if (selectedText.length > 0) {
        try {
          await navigator.clipboard.writeText(selectedText);
          setMessages((messages) => [
            ...messages,
            { type: "default", message: "Последовательность скопирована" },
          ]);
        } catch (error) {
          setMessages((messages) => [
            ...messages,
            { type: "error", message: "Разрешите запись в буфер обмена" },
          ]);
        }
      }
    })();
  }, [selectedText]);

  return (
    <div
      className="sequences_container"
      ref={resizeRef}
      onMouseUp={handleSelectionChange}
    >
      <div className="sequences">
        {chunkedPrimarySequence.map((ps, i) => (
          <div key={generateUuid()}>
            <PrimarySequence sequence={ps}></PrimarySequence>
            <SecondarySequence
              sequence={chunkedSecondarySequence[i]}
              primarySequence={ps}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sequences;
