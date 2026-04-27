const API_URL = "https://script.google.com/macros/s/AKfycbzT7-0x4TDSzhmzTmWbWxn7igyUTYpUqxpWUv5V2F3LDSnUnfpmDmTzgMQ8l0hwoRCS/exec";

export const getProductos = async () => {
  const res = await fetch(`${API_URL}?action=getProductos`);
  return await res.json();
};

export const guardarInventario = async (data) => {
  await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      action: "guardarInventario",
      data
    })
  });
};

export const crearProducto = async (producto) => {
  await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      action: "crearProducto",
      producto
    })
  });
};