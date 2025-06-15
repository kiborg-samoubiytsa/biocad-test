import { type FC } from "react";

interface Props {
  message: string;
  type: "error" | "default";
}

const Message: FC<Props> = ({ message, type }) => {
  return (
    <div className={`messages__message_${type}`}>
      <div className={`text`}>{message}</div>
    </div>
  );
};

export default Message;
