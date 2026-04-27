export const getProductos = async () => {
  return [
    { nombre: "Carne hamburguesa", unidad: "pz", tipo: "entero" },
    { nombre: "Pechuga aplanada", unidad: "kg", tipo: "decimal" }
  ];
};

export const guardarInventario = async (data) => {
  console.log("Inventario:", data);
};

export const crearProducto = async (producto) => {
  console.log("Nuevo producto:", producto);
};