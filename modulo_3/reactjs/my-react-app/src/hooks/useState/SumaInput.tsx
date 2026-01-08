import { useState } from "react";

export default function SumaInput() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(0);

  const sumar = () => {
    setResultado(Number(numero1) + Number(numero2));
  };

  return (
    <div>
      <input
        value={numero1}
        onChange={(e) => setNumero1(e.target.value)}
        placeholder="Nuevo título"
      />

      <input
        value={numero2}
        onChange={(e) => setNumero2(e.target.value)}
        placeholder="Nuevo título"
      />

      <button onClick={sumar}>Actualizar título</button>

      <p>Suma es igual a: {resultado}</p>
    </div>
  );
}