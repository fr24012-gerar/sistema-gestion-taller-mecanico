import { useState, useEffect } from "react";
import {
  FaUsers,
  FaSearch,
  FaPlus,
  FaTrash,
  FaEdit,
} from "react-icons/fa";

import Sidebar from "../components/Sidebar";

function Clientes() {
  const [search, setSearch] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const clientes = [
    {
      id: 1,
      nombre: "Carlos Morales",
      telefono: "7722-1234",
      email: "carlos@gmail.com",
    },
    {
      id: 2,
      nombre: "Laura Rivas",
      telefono: "6644-5678",
      email: "laura@gmail.com",
    },
    {
      id: 3,
      nombre: "José Mejía",
      telefono: "7811-9012",
      email: "jose@gmail.com",
    },
  ];

  // =========================
  // EFECTOS HOVER
  // =========================
  const hoverUp = (e) => {
    if (!isMobile) {
      e.currentTarget.style.transform = "translateY(-5px)";
      e.currentTarget.style.boxShadow = "0 0 20px rgba(0,0,0,0.5)";
    }
  };

  const hoverLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0px)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        minHeight: "100vh",
        backgroundColor: "#0f0f0f",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <Sidebar />

      <main
        style={{
          flex: 1,
          padding: isMobile ? "20px" : "40px",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "stretch" : "center",
            marginBottom: "30px",
            gap: "20px",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: isMobile ? "28px" : "42px",
                marginBottom: "10px",
              }}
            >
              Gestión de clientes
            </h1>

            <p
              style={{
                color: "#9c9c9c",
                fontSize: isMobile ? "15px" : "18px",
              }}
            >
              Administra los clientes del taller
            </p>
          </div>

          {/* BUSCADOR */}
          <div
            style={{
              backgroundColor: "#1b1b1b",
              borderRadius: "16px",
              padding: "14px 20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              width: isMobile ? "100%" : "300px",
              border: "1px solid rgba(255,255,255,0.05)",
              boxSizing: "border-box",
            }}
          >
            <FaSearch color="#9c9c9c" />

            <input
              type="text"
              placeholder="Buscar cliente..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                color: "white",
                width: "100%",
                fontSize: "15px",
              }}
            />
          </div>
        </div>

        {/* BOTÓN */}
        <button
          onMouseEnter={hoverUp}
          onMouseLeave={hoverLeave}
          style={{
            backgroundColor: "#ff6b00",
            border: "none",
            padding: "16px 26px",
            borderRadius: "16px",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "30px",
            transition: "0.3s",
            width: isMobile ? "100%" : "fit-content",
          }}
        >
          <FaPlus />
          Nuevo cliente
        </button>

        {/* TABLA DESKTOP */}
        {!isMobile && (
          <div
            style={{
              background: "linear-gradient(to right, #262626, #333333)",
              borderRadius: "24px",
              overflow: "hidden",
            }}
          >
            {/* HEADER TABLA */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 2fr 1fr",
                padding: "22px 30px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                color: "#b3b3b3",
                fontWeight: "bold",
              }}
            >
              <div>Cliente</div>
              <div>Teléfono</div>
              <div>Correo electrónico</div>
              <div>Acciones</div>
            </div>

            {/* FILAS */}
            {clientes.map((cliente) => (
              <div
                key={cliente.id}
                onMouseEnter={hoverUp}
                onMouseLeave={hoverLeave}
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr 2fr 1fr",
                  padding: "24px 30px",
                  alignItems: "center",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  transition: "0.3s",
                }}
              >
                {/* CLIENTE */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      backgroundColor: "#f8e7d4",
                      color: "#ff7a00",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaUsers />
                  </div>

                  <span
                    style={{
                      fontWeight: "600",
                      fontSize: "16px",
                    }}
                  >
                    {cliente.nombre}
                  </span>
                </div>

                <div style={{ color: "#d4d4d4" }}>
                  {cliente.telefono}
                </div>

                <div style={{ color: "#d4d4d4" }}>
                  {cliente.email}
                </div>

                {/* BOTONES */}
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                  }}
                >
                  <button
                    style={{
                      width: "42px",
                      height: "42px",
                      border: "none",
                      borderRadius: "12px",
                      backgroundColor: "#ff6b00",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    <FaEdit />
                  </button>

                  <button
                    style={{
                      width: "42px",
                      height: "42px",
                      border: "none",
                      borderRadius: "12px",
                      backgroundColor: "#dc2626",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* MOBILE CARDS */}
        {isMobile && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {clientes.map((cliente) => (
              <div
                key={cliente.id}
                style={{
                  background:
                    "linear-gradient(to right, #262626, #333333)",
                  borderRadius: "22px",
                  padding: "20px",
                }}
              >
                {/* CLIENTE */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    marginBottom: "18px",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "14px",
                      backgroundColor: "#f8e7d4",
                      color: "#ff7a00",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaUsers />
                  </div>

                  <div>
                    <h3
                      style={{
                        margin: 0,
                        fontSize: "18px",
                      }}
                    >
                      {cliente.nombre}
                    </h3>

                    <p
                      style={{
                        margin: 0,
                        color: "#9c9c9c",
                        fontSize: "14px",
                      }}
                    >
                      Cliente registrado
                    </p>
                  </div>
                </div>

                {/* INFO */}
                <div
                  style={{
                    marginBottom: "18px",
                    lineHeight: "1.8",
                    color: "#d4d4d4",
                  }}
                >
                  <div>
                    <strong>Tel:</strong> {cliente.telefono}
                  </div>

                  <div>
                    <strong>Email:</strong> {cliente.email}
                  </div>
                </div>

                {/* BOTONES */}
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                  }}
                >
                  <button
                    style={{
                      flex: 1,
                      border: "none",
                      borderRadius: "12px",
                      backgroundColor: "#ff6b00",
                      color: "white",
                      padding: "14px",
                      cursor: "pointer",
                      fontSize: "15px",
                    }}
                  >
                    <FaEdit />
                  </button>

                  <button
                    style={{
                      flex: 1,
                      border: "none",
                      borderRadius: "12px",
                      backgroundColor: "#dc2626",
                      color: "white",
                      padding: "14px",
                      cursor: "pointer",
                      fontSize: "15px",
                    }}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Clientes;