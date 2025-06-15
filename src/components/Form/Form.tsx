import { useState, type FC, type FormEvent } from "react";
import SecondaryInput from "./ComparedInput/SecondaryInput";
import PrimaryInput from "./PrimaryInput/PrimaryInput";
import symbolsMap from "../../shared/symbols";
import SubmitButton from "./SubmitButton/SubmitButton";

interface Props {
  setPrimarySequence: React.Dispatch<React.SetStateAction<string[]>>;
  setSecondarySequence: React.Dispatch<React.SetStateAction<string[]>>;
  setMessages: React.Dispatch<
    React.SetStateAction<
      {
        message: string;
        type: "error" | "default";
      }[]
    >
  >;
}

const Form: FC<Props> = ({
  setPrimarySequence,
  setSecondarySequence,
  setMessages,
}) => {
  const [primaryInputValue, setPrimaryInputValue] = useState("");

  const [secondaryInputValue, setSecondaryInputValue] = useState("");

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    const primarySymbolsArray = primaryInputValue.split("");
    const secondarySymbolsArray = secondaryInputValue.split("");

    const isPrimaryInputInvalid = !!primarySymbolsArray.find((e) => {
      return !symbolsMap[e.toLowerCase()];
    });

    const isSecondaryInputInvalid = !!secondarySymbolsArray.find((e) => {
      return !symbolsMap[e.toLowerCase()];
    });

    const symbolsAreValid = !isPrimaryInputInvalid && !isSecondaryInputInvalid;

    const lengthIsValid =
      primarySymbolsArray.length == secondarySymbolsArray.length;

    if (!symbolsAreValid) {
      setMessages((messages) => [
        ...messages,
        { message: "Введены невалидные символы", type: "error" },
      ]);
    }

    if (!lengthIsValid) {
      setMessages((messages) => [
        ...messages,
        { message: "Длина последовательностей не совпадает", type: "error" },
      ]);
    }

    if (symbolsAreValid && lengthIsValid) {
      setSecondarySequence(secondarySymbolsArray);
      setPrimarySequence(primarySymbolsArray);
    }
  };

  return (
    <>
      <form action="" onSubmit={handleSubmitForm} className="form">
        <PrimaryInput
          inputValue={primaryInputValue}
          setInputValue={setPrimaryInputValue}
        />
        <SecondaryInput
          inputValue={secondaryInputValue}
          setInputValue={setSecondaryInputValue}
        />
        <SubmitButton></SubmitButton>
      </form>
    </>
  );
};

export default Form;
