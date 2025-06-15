import { type FC } from "react";
import Message from "./Message/Message";

interface Props {
  messages: { message: string; type: "error" | "default" }[];
}

const Messages: FC<Props> = ({ messages }) => {
  return (
    <div className="messages">
      {messages.map((m, i) => (
        <Message message={m.message} type={m.type} key={i}></Message>
      ))}
    </div>
  );
};

export default Messages;
