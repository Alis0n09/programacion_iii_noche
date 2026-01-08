import { useState } from "react";

type CheckedState = {
  a: boolean;
  b: boolean;
};

export default function CheckboxSummary() {
  const [checked, setChecked] = useState<CheckedState>({
    a: false,
    b: false,
  });

  const toggle =
    (key: keyof CheckedState) =>
    (): void => {
      setChecked((prev) => ({
        ...prev,
        [key]: !prev[key],
      }));
    };

  const selected = Object.entries(checked)
    .filter(([, value]) => value)
    .map(([key]) => key)
    .join(", ");

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked.a}
          onChange={toggle("a")}
        />{" "}
        A
      </label>

      <label>
        <input
          type="checkbox"
          checked={checked.b}
          onChange={toggle("b")}
        />{" "}
        B
      </label>

      <p>Seleccionado: {selected || "ninguno"}</p>
    </div>
  );
}