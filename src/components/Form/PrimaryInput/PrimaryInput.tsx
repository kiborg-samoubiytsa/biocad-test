import { type FC } from "react";
import { TextField } from "@mui/material";

interface Props {
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  inputValue: string;
}

const PrimaryInput: FC<Props> = ({ setInputValue, inputValue }) => {
  return (
    <>
      <TextField
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        label="Первая последовательность"
        variant="outlined"
        className="input"
      />
    </>
  );
};

export default PrimaryInput;
