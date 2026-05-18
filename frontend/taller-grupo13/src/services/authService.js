const BASE_URL = "http://localhost:8080/api/auth";

export const login = async (credentials) => {

    const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    });

    if (!response.ok) {

        const errorText = await response.text();

        throw new Error(
            errorText || "Credenciales incorrectas"
        );
    }

    return await response.json();
};