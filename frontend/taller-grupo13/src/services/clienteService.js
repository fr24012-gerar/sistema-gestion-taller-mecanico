import axios from "axios";

const BASE_URL = "http://localhost:8080/api/clientes";

// GET /api/clientes — listar todos
export const listarClientes = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data || "Error al listar clientes"
    );
  }
};

// GET /api/clientes/{email} — buscar por email
export const buscarPorEmail = async (email) => {
  try {
    const response = await axios.get(`${BASE_URL}/${email}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data || "Cliente no encontrado"
    );
  }
};

// POST /api/clientes — crear nuevo cliente
export const crearCliente = async (dto) => {
  try {
    const response = await axios.post(BASE_URL, dto);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data || "Error al crear cliente"
    );
  }
};

// PUT /api/clientes/{id} — actualizar cliente
export const actualizarCliente = async (id, dto) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, dto);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data || "Error al actualizar cliente"
    );
  }
};

// DELETE /api/clientes/{id} — eliminar cliente
export const eliminarCliente = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data; // Si el backend devuelve String, aquí llegará ese String
  } catch (error) {
    throw new Error(
      error.response?.data || "Error al eliminar cliente"
    );
  }
};