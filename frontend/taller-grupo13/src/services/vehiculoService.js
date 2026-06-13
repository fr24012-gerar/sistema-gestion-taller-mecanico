const BASE_URL = "http://localhost:8080/api/vehiculos";

export const listarVehiculos  = async ()       => (await fetch(BASE_URL)).json();

export const crearVehiculo = async (dto) => {

    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dto)
    });

    console.log("STATUS:", response.status);

    const text = await response.text();

    console.log("RESPONSE:", text);

    return text;
};

export const actualizarVehiculo = async (id, dto) => (
    await fetch(`${BASE_URL}/${id}`, 
        { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(dto) })
    ).json();

export const eliminarVehiculo = async (id)     => fetch(`${BASE_URL}/${id}`, { method: "DELETE" });