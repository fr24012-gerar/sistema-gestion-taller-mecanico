import axios from "axios";

const BASE_URL = "http://localhost:8080/api/auth";

export const login = async (credentials) => {
    try {
        const response = await axios.post(
            `${BASE_URL}/login`,
            credentials,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

        return response.data;
    } catch (error) {
        throw new Error(
            error.response?.data || "Credenciales incorrectas"
        );
    }
};