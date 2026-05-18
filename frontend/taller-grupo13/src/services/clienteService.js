const BASE_URL = "http://localhost:8080/api/clientes";

// GET /api/clientes — listar todos
export const listarClientes = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Error al listar clientes");
  return res.json();
};

// GET /api/clientes/{email} — buscar por email
export const buscarPorEmail = async (email) => {
  const res = await fetch(`${BASE_URL}/${email}`);
  if (!res.ok) throw new Error("Cliente no encontrado");
  return res.json();
};

// POST /api/clientes — crear nuevo cliente
export const crearCliente = async (dto) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dto),
  });
  if (!res.ok) throw new Error("Error al crear cliente");
  return res.json();
};

// PUT /api/clientes/{id} — actualizar cliente
export const actualizarCliente = async (id, dto) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dto),
  });
  if (!res.ok) throw new Error("Error al actualizar cliente");
  return res.json();
};

// DELETE /api/clientes/{id} — eliminar cliente
// El controller devuelve ResponseEntity<String>, no JSON
export const eliminarCliente = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Error al eliminar cliente");
  return res.text(); // .text() porque el backend devuelve un String plano
};