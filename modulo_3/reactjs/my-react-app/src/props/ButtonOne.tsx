import React from "react";

interface ButtonOneProps {
  onClick: () => void;
};

const ButtonOne: React.FC<ButtonOneProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Haz clic aquí
    </button>
  );
};

export default ButtonOne;
