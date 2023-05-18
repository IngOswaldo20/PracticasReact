import React from "react";

function TablaMultiplicar() {
  const numero = 5;
  const filas = [];

  for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    filas.push(
      <tr key={i}>
        <td>{numero}</td>
        <td>x</td>
        <td>{i}</td>
        <td>=</td>
        <td>{resultado}</td>
      </tr>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Tabla del {numero}</th>
        </tr>
        <tr>
          <th>Número</th>
          <th></th>
          <th>Multiplicador</th>
          <th></th>
          <th>Resultado</th>
        </tr>
      </thead>
      <tbody>{filas}</tbody>
    </table>
  );
}

export default TablaMultiplicar;
