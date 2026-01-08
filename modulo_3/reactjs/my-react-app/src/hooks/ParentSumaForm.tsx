import { useState } from "react";
import SumaForm from "./SumaForm";

type SumaData = {
  a: number;
  b: number;
};

const ParentSumaForm: React.FC = () => {
  const [resultado, setResultado] = useState<number | null>(null);

  const handleSumar = (data: SumaData): void => {
    setResultado(data.a + data.b);
  };

  return (
    <>
      <SumaForm onSumar={handleSumar} />
      {resultado !== null && <p>Resultado: {resultado}</p>}
    </>
  );
};

export default ParentSumaForm;
