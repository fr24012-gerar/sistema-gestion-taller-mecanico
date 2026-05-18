import {
  FaUsers,
  FaCar,
  FaClipboardList,
  FaCog,
  FaBars,
} from "react-icons/fa";

import {
  useNavigate,
  useLocation,
} from "react-router-dom";

function Sidebar() {
  // =========================
  // HOOKS
  // =========================
  const navigate = useNavigate();
  const location = useLocation();

  // =========================
  // ITEMS MENU
  // =========================
  const menuItems = [
    {
      icon: <FaUsers />,
      path: "/clientes",
    },
    {
      icon: <FaCar />,
      path: "/vehiculos",
    },
    {
      icon: <FaClipboardList />,
      path: "/ordenes",
    },
  ];

  // =========================
  // RETURN
  // =========================
  return (
    <aside className="sidebar-aside">
      {/* Estilos CSS nativos con Media Queries */}
      <style>{`
        .sidebar-aside {
          width: 95px;
          min-height: 100vh;
          background: linear-gradient(180deg, #020617, #0f172a, #111827);
          border-right: 1px solid rgba(255,255,255,0.05);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
          position: sticky;
          top: 0;
          box-shadow: 0 0 25px rgba(0,0,0,0.3);
          z-index: 100;
          transition: all 0.3s ease;
        }

        .sidebar-top-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 25px;
        }

        .sidebar-menu-items {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        /* Ocultar etiquetas móviles en escritorio */
        .mobile-label {
          display: none;
        }

        /* ==========================================
           RESPONSIVE: DISPOSITIVOS MÓVILES (MÁX 768px)
           ========================================== */
        @media (max-width: 768px) {
          .sidebar-aside {
            width: 100% !important;
            min-height: auto !important;
            height: 65px;
            flex-direction: row !important;
            justify-content: space-around !important;
            align-items: center !important;
            padding: 0 10px !important;
            position: fixed !important;
            top: auto !important;
            bottom: 0 !important; /* Barra inferior fija */
            border-right: none !important;
            border-top: 1px solid rgba(255,255,255,0.08);
            background: linear-gradient(90deg, #020617, #0f172a) !important;
            box-shadow: 0 -5px 20px rgba(0,0,0,0.5) !important;
          }

          .sidebar-top-container {
            flex-direction: row !important;
            gap: 0 !important;
            width: 75%;
            justify-content: space-around;
          }

          .sidebar-menu-items {
            flex-direction: row !important;
            gap: 0 !important;
            width: 100%;
            justify-content: space-around;
          }

          /* Ocultamos el botón de Hamburguesa/Logo en móvil para ganar espacio */
          .sidebar-logo {
            display: none !important;
          }

          /* Ajuste de botones para formato barra inferior */
          .sidebar-btn {
            width: 50px !important;
            height: 50px !important;
            border-radius: 14px !important;
            font-size: 18px !important;
            box-shadow: none !important; /* Quita sombras pesadas en móvil */
          }
        }
      `}</style>

      {/* TOP */}
      <div className="sidebar-top-container">
        
        {/* LOGO (Se oculta automáticamente en móviles) */}
        <div
          onClick={() => navigate("/dashboard")} 
          className="sidebar-logo"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "20px",
            background: "linear-gradient(135deg,#ff7b00,#ff9f43)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            color: "white",
            boxShadow: "0 10px 25px rgba(255,123,0,0.35)",
            transition: "0.3s",
            cursor: "pointer",
          }}
        >
          <FaBars />
        </div>

        {/* MENU */}
        <div className="sidebar-menu-items">
          {menuItems.map((item, index) => {
            const active = location.pathname === item.path;

            return (
              <button
                key={index}
                onClick={() => navigate(item.path)}
                className="sidebar-btn"
                style={{
                  width: "58px",
                  height: "58px",
                  border: "none",
                  borderRadius: "18px",
                  cursor: "pointer",
                  fontSize: "21px",
                  color: active ? "white" : "#94a3b8",
                  background: active
                    ? "linear-gradient(135deg,#2563eb,#3b82f6)"
                    : "rgba(255,255,255,0.04)",
                  transition: "all 0.3s ease",
                  boxShadow: active ? "0 10px 25px rgba(37,99,235,0.35)" : "none",
                }}
                onMouseEnter={(e) => {
                  if (!active && window.innerWidth > 768) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.transform = "translateY(-2px) scale(1.03)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active && window.innerWidth > 768) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.transform = "translateY(0px) scale(1)";
                  }
                }}
              >
                {item.icon}
              </button>
            );
          })}
        </div>
      </div>

      {/* SETTINGS (Botón de configuración final) */}
      <button
        className="sidebar-btn"
        onClick={() => navigate("/configuracion")} // Ajusta la ruta si la manejas diferente
        style={{
          width: "58px",
          height: "58px",
          border: "none",
          borderRadius: "18px",
          background: "rgba(255,255,255,0.04)",
          color: "#94a3b8",
          fontSize: "22px",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          if (window.innerWidth > 768) {
            e.currentTarget.style.background = "rgba(255,255,255,0.08)";
            e.currentTarget.style.transform = "translateY(-2px) scale(1.03)";
          }
        }}
        onMouseLeave={(e) => {
          if (window.innerWidth > 768) {
            e.currentTarget.style.background = "rgba(255,255,255,0.04)";
            e.currentTarget.style.transform = "translateY(0px) scale(1)";
          }
        }}
      >
        <FaCog />
      </button>
    </aside>
  );
}

export default Sidebar;