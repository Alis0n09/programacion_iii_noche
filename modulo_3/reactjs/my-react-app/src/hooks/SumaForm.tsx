import { useState } from "react";

type SumaData = {
  a: number;
  b: number;
};

type SumaFormProps = {
  onSumar: (data: SumaData) => void;
};

const SumaForm: React.FC<SumaFormProps> = ({ onSumar }) => {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSumar({ a, b });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setA(Number(e.target.value))
        }
      />
      <br />
      <input
        type="number"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setB(Number(e.target.value))
        }
      />
      <br />
      <button type="submit">Sumar</button>
    </form>
  );
};

export default SumaForm;
