import React from "react";
import { FaChartBar, FaTools, FaExclamationTriangle } from "react-icons/fa";
import Sidebar from "../components/Sidebar";

function Reportes() {
  const hoverUp = (e) => {
    if (window.innerWidth > 768) e.currentTarget.style.transform = "translateY(-3px)";
  };
  const hoverLeave = (e) => {
    if (window.innerWidth > 768) e.currentTarget.style.transform = "translateY(0px)";
  };

  return (
    <div className="reportes-layout-container">
      {/* Inyección de estilos CSS responsivos alineados al taller */}
      <style>{`
        .reportes-layout-container {
          display: flex;
          min-height: 100vh;
          background-color: #0f0f0f;
          color: white;
          font-family: Arial, sans-serif;
        }
        .reportes-main-content {
          flex: 1;
          padding: 40px;
          max-width: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }
        .reportes-header-section {
          margin-bottom: 40px;
        }
        .reportes-card-placeholder {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 60vh;
        }
        .reportes-box-inner {
          background: linear-gradient(to right, #262626, #333333);
          border-radius: 24px;
          padding: 45px 35px;
          max-width: 440px;
          width: 100%;
          text-align: center;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          box-sizing: border-box;
          transition: transform 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.03);
        }
        .reportes-icon-circle {
          width: 70px;
          height: 70px;
          border-radius: 20px;
          background-color: #f8e7d4;
          color: #ff7a00;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          margin: 0 auto 24px auto;
          box-shadow: 0 8px 20px rgba(255, 122, 0, 0.15);
        }
        .reportes-badge-status {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: rgba(255, 107, 0, 0.1);
          color: #ff6b00;
          padding: 8px 18px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border: 1px solid rgba(255, 107, 0, 0.15);
          margin-top: 10px;
        }

        /* ==========================================
           RESPONSIVE: DISPOSITIVOS MÓVILES (MÁX 768px)
           ========================================== */
        @media (max-width: 768px) {
          .reportes-layout-container {
            flex-direction: column;
            padding-bottom: 75px; /* Evita que el Sidebar móvil tape el contenido */
          }
          .reportes-main-content {
            padding: 24px 16px;
          }
          .reportes-header-section {
            margin-bottom: 25px;
            text-align: left;
          }
          .reportes-card-placeholder {
            min-height: 50vh;
          }
          .reportes-box-inner {
            padding: 35px 22px;
          }
        }
      `}</style>

      {/* REQUISITO: Incluimos el Sidebar oficial para la navegación entre módulos */}
      <Sidebar />

      <main className="reportes-main-content">
        
        {/* HEADER (Mismo tamaño y jerarquía que el de Clientes) */}
        <div className="reportes-header-section">
          <h1 style={{ fontSize: "clamp(28px, 5vw, 40px)", fontWeight: "bold", marginBottom: "8px", margin: 0 }}>
            Estadísticas y Reportes
          </h1>
          <p style={{ color: "#9c9c9c", margin: "4px 0 0 0" }}>
            Visualiza el rendimiento general de tu taller mecánico
          </p>
        </div>

        {/* CONTENEDOR CENTRAL */}
        <div className="reportes-card-placeholder">
          <div 
            className="reportes-box-inner"
            onMouseEnter={hoverUp}
            onMouseLeave={hoverLeave}
          >
            {/* Círculo de ícono con los colores suaves de tu interfaz */}
            <div className="reportes-icon-circle">
              <FaTools />
            </div>

            {/* Título */}
            <h2 style={{ fontSize: "22px", fontWeight: "bold", margin: "0 0 12px 0", color: "white" }}>
              Módulo en Construcción
            </h2>

            {/* Descripción adaptada */}
            <p style={{ color: "#b3b3b3", fontSize: "14px", lineHeight: "1.6", margin: "0 0 24px 0" }}>
              Estamos preparando las herramientas necesarias para ofrecerte métricas en tiempo real, gráficos de barras sobre ingresos y balances de órdenes cerradas.
            </p>

            {/* Badge en color naranja de marca taller */}
            <div className="reportes-badge-status">
              <FaExclamationTriangle style={{ fontSize: "14px" }} />
              Próximamente - Desarrollo
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default Reportes;