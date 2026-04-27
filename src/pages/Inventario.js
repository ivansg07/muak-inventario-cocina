import { useEffect, useState } from "react";
import { getProductos, guardarInventario } from "../services/api";

export default function Inventario() {
  const [productos, setProductos] = useState([]);
  const [valores, setValores] = useState({});

  useEffect(() => {
    getProductos().then(setProductos);
  }, []);

  const handleChange = (nombre, valor) => {
    setValores({
      ...valores,
      [nombre]: valor
    });
  };

  const guardar = async () => {
    await guardarInventario(valores);
    alert("Inventario guardado");
  };

  return (
    <div>
      <h2>Captura de Inventario</h2>

      {productos.map(p => (
        <div key={p.nombre} style={{ display: "flex", gap: 10, marginBottom: 8 }}>
          <div style={{ width: 220 }}>{p.nombre}</div>

          <input
            type="number"
            step={p.tipo === "entero" ? "1" : "0.01"}
            onChange={(e) => handleChange(p.nombre, e.target.value)}
          />

          <div>{p.unidad}</div>
        </div>
      ))}

      <button onClick={guardar}>Guardar</button>
    </div>
  );
}