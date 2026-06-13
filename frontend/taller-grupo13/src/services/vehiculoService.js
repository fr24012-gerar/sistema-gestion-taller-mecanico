<<<<<<< HEAD
const BASE_URL = "http://localhost:8080/api/vehiculos";
=======
import axios from "axios";
>>>>>>> main

const BASE_URL = "http://localhost:8080/api/vehiculos";

export const listarVehiculos = async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
};

export const crearVehiculo = async (dto) => {
    const response = await axios.post(BASE_URL, dto, {
        headers: {
            "Content-Type": "application/json"
        }
    });

    console.log("STATUS:", response.status);
    console.log("RESPONSE:", response.data);

    return response.data;
};

export const actualizarVehiculo = async (id, dto) => {
    const response = await axios.put(
        `${BASE_URL}/${id}`,
        dto,
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    );

    return response.data;
};

export const eliminarVehiculo = async (id) => {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
};