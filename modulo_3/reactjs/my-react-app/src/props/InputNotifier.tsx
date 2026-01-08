import React from "react";

interface InputNotifierProps {
  onChangeText: (value: string) => void;
};

const InputNotifier: React.FC<InputNotifierProps> = ({ onChangeText }) => {
  return (
    <input
      type="text"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChangeText(e.target.value)
      }
    />
  );
};

export default InputNotifier;
