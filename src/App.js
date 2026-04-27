import { useState } from "react";
import Inventario from "./pages/Inventario";
import Admin from "./pages/Admin";

function App() {
  const [vista, setVista] = useState("inventario");

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>MUAK Inventario Cocina</h1>

      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={() => setVista("inventario")}>Inventario</button>
        <button onClick={() => setVista("admin")}>Admin</button>
      </div>

      <hr />

      {vista === "inventario" && <Inventario />}
      {vista === "admin" && <Admin />}
    </div>
  );
}

export default App;