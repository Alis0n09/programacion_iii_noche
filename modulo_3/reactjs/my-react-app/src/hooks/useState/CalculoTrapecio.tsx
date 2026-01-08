import { useState } from "react";

export default function CalculoTrapecio() {
  const [baseMayor, setBaseMayor] = useState('');
  const [baseMenor, setBaseMenor] = useState('');
  const [altura, setAltura] = useState(0);
  const [area, setArea] = useState(0);

  const calcularArea = () => {
    setArea((Number(baseMayor) + Number(baseMenor)) * Number(altura) / 2);
  };

  return (
    <div>
      <input
        value={baseMayor}
        onChange={(e) => setBaseMayor(e.target.value)}
        placeholder="Base mayor"
      />

      <input
        value={baseMenor}
        onChange={(e) => setBaseMenor(e.target.value)}
        placeholder="Base menor"
      />

      <input
        value={altura}
        onChange={(e) => setAltura(Number(e.target.value))}
        placeholder="Altura"
      />

      <button onClick={calcularArea}>Calcular área</button>

      <p>Área del trapecio: {area}</p>
    </div>
  );
}
       