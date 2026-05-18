import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    FaUser,
    FaLock,
    FaSignInAlt
} from "react-icons/fa";

import { login } from "../services/authService";

function Login() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // =========================
    // HANDLE CHANGE
    // =========================
    const handleChange = (e) => {

        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    // =========================
    // LOGIN
    // =========================
    const handleLogin = async (e) => {

        e.preventDefault();

        if (
            !form.username.trim() ||
            !form.password.trim()
        ) {
            setError("Completa todos los campos.");
            return;
        }

        setLoading(true);
        setError("");

        try {

            const data = await login(form);

            localStorage.setItem(
                "usuario",
                JSON.stringify(data)
            );

            navigate("/dashboard");

        } catch (err) {

            setError(
                err.message || "Error al iniciar sesión."
            );

        } finally {

            setLoading(false);
        }
    };

    return (

        <div
            style={{
                minHeight: "100vh",
                backgroundColor: "#0f0f0f",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Arial",
                padding: "20px"
            }}
        >

            <div
                style={{
                    width: "420px",
                    background:
                        "linear-gradient(to right,#262626,#333333)",
                    borderRadius: "28px",
                    padding: "40px",
                    color: "white",
                    boxSizing: "border-box"
                }}
            >

                {/* HEADER */}
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "35px"
                    }}
                >

                    <div
                        style={{
                            width: "80px",
                            height: "80px",
                            borderRadius: "24px",
                            backgroundColor: "#ff6b00",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "0 auto 18px auto",
                            fontSize: "32px"
                        }}
                    >
                        <FaSignInAlt />
                    </div>

                    <h1
                        style={{
                            fontSize: "34px",
                            marginBottom: "10px"
                        }}
                    >
                        Iniciar sesión
                    </h1>

                    <p
                        style={{
                            color: "#9c9c9c",
                            fontSize: "14px"
                        }}
                    >
                        Sistema de gestión del taller
                    </p>

                </div>

                {/* ERROR */}
                {error && (

                    <div
                        style={{
                            background: "#ffd9d9",
                            color: "#ff4d4d",
                            padding: "12px 16px",
                            borderRadius: "12px",
                            marginBottom: "20px",
                            fontSize: "14px"
                        }}
                    >
                        ⚠ {error}
                    </div>
                )}

                {/* FORM */}
                <form onSubmit={handleLogin}>

                    {/* USERNAME */}
                    <div style={{ marginBottom: "18px" }}>

                        <label
                            style={{
                                display: "block",
                                marginBottom: "8px",
                                fontSize: "13px",
                                color: "#b3b3b3"
                            }}
                        >
                            Usuario
                        </label>

                        <div
                            style={{
                                backgroundColor: "#1b1b1b",
                                border: "1px solid #374151",
                                borderRadius: "14px",
                                padding: "14px 16px",
                                display: "flex",
                                alignItems: "center",
                                gap: "12px"
                            }}
                        >

                            <FaUser color="#9c9c9c" />

                            <input
                                type="text"
                                name="username"
                                placeholder="Ingresa tu usuario"
                                value={form.username}
                                onChange={handleChange}
                                style={{
                                    background: "transparent",
                                    border: "none",
                                    outline: "none",
                                    color: "white",
                                    width: "100%",
                                    fontSize: "15px"
                                }}
                            />
                        </div>
                    </div>

                    {/* PASSWORD */}
                    <div style={{ marginBottom: "28px" }}>

                        <label
                            style={{
                                display: "block",
                                marginBottom: "8px",
                                fontSize: "13px",
                                color: "#b3b3b3"
                            }}
                        >
                            Contraseña
                        </label>

                        <div
                            style={{
                                backgroundColor: "#1b1b1b",
                                border: "1px solid #374151",
                                borderRadius: "14px",
                                padding: "14px 16px",
                                display: "flex",
                                alignItems: "center",
                                gap: "12px"
                            }}
                        >

                            <FaLock color="#9c9c9c" />

                            <input
                                type="password"
                                name="password"
                                placeholder="Ingresa tu contraseña"
                                value={form.password}
                                onChange={handleChange}
                                style={{
                                    background: "transparent",
                                    border: "none",
                                    outline: "none",
                                    color: "white",
                                    width: "100%",
                                    fontSize: "15px"
                                }}
                            />
                        </div>
                    </div>

                    {/* BUTTON */}
                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            width: "100%",
                            backgroundColor: "#ff6b00",
                            border: "none",
                            padding: "15px",
                            borderRadius: "14px",
                            color: "white",
                            fontSize: "15px",
                            fontWeight: "bold",
                            cursor: "pointer",
                            transition: "0.2s",
                            opacity: loading ? 0.7 : 1
                        }}
                    >
                        {
                            loading
                                ? "Ingresando..."
                                : "Iniciar sesión"
                        }
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Login;