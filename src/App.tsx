import { useEffect, useState } from "react";
import "./App.scss";
import Form from "./components/Form/Form";
import Sequences from "./components/DNASequences/Sequences";
import Messages from "./components/Messages/Messages";

function App() {
  const [primarySequence, setPrimarySequence] = useState<string[]>([]);
  const [secondarySequence, setSecondarySequence] = useState<string[]>([]);

  const [messages, setMessages] = useState<
    { message: string; type: "error" | "default" }[]
  >([]);

  useEffect(() => {
    if (messages.length > 0) {
      const timeout = setTimeout(() => {
        const newMessages = messages.slice(1, messages.length);
        setMessages(newMessages);
      }, 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messages]);

  return (
    <>
      <div className="app">
        <Messages messages={messages}></Messages>
        <Sequences
          setMessages={setMessages}
          primarySequence={primarySequence}
          secondarySequence={secondarySequence}
        />
        <Form
          setMessages={setMessages}
          setPrimarySequence={setPrimarySequence}
          setSecondarySequence={setSecondarySequence}
        ></Form>
      </div>
    </>
  );
}

export default App;
