import { useState } from "react";
import InputNotifier from "./InputNotifier";

const ParentInputNotifier: React.FC = () => {
  const [text, setText] = useState<string>("");

  return (
    <>
      <InputNotifier onChangeText={setText} />
      <p>Texto: {text}</p>
    </>
  );
};

export default ParentInputNotifier;
