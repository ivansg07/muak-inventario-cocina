import { useState } from "react";
import { crearProducto } from "../services/api";

export default function Admin() {
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [unidad, setUnidad] = useState("pz");
  const [tipo, setTipo] = useState("entero");

  const guardar = async () => {
    await crearProducto({ nombre, categoria, unidad, tipo });
    alert("Producto creado");
  };

  return (
    <div>
      <h2>Admin - Crear producto</h2>

      <input placeholder="Nombre" onChange={e => setNombre(e.target.value)} />
      <input placeholder="Categoría" onChange={e => setCategoria(e.target.value)} />

      <select onChange={e => setUnidad(e.target.value)}>
        <option value="pz">Piezas</option>
        <option value="kg">Kg</option>
        <option value="lt">Litros</option>
      </select>

      <select onChange={e => setTipo(e.target.value)}>
        <option value="entero">Entero</option>
        <option value="decimal">Decimal</option>
      </select>

      <button onClick={guardar}>Guardar</button>
    </div>
  );
}