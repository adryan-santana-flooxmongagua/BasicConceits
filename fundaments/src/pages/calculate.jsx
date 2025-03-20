import { useState } from "react";

export default function Calculate() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const add = () => setResult(num1 + num2);
  const subtract = () => setResult(num1 - num2);
  const multiply = () => setResult(num1 * num2);
  const divide = () => setResult(num2 !== 0 ? num1 / num2 : "Erro!");

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Calculadora Simples</h1>
      <input type="number" value={num1} onChange={(e) => setNum1(+e.target.value)} />
      <input type="number" value={num2} onChange={(e) => setNum2(+e.target.value)} />
      <div>
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>×</button>
        <button onClick={divide}>÷</button>
      </div>
      <h2>Resultado: {result !== null ? result : "—"}</h2>
    </div>
  );
}
