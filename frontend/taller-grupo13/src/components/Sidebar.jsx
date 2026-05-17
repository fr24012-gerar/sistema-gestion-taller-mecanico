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

    <aside
      style={{
        width: "95px",
        minHeight: "100vh",

        background:
          "linear-gradient(180deg,#020617,#0f172a,#111827)",

        borderRight:
          "1px solid rgba(255,255,255,0.05)",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",

        padding: "20px 0",

        position: "sticky",
        top: 0,

        boxShadow:
          "0 0 25px rgba(0,0,0,0.3)",

        zIndex: 100,
      }}
    >

      {/* TOP */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "25px",
        }}
      >

        {/* LOGO */}
        <div
          style={{
            width: "60px",
            height: "60px",

            borderRadius: "20px",

            background:
              "linear-gradient(135deg,#ff7b00,#ff9f43)",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            fontSize: "24px",
            color: "white",

            boxShadow:
              "0 10px 25px rgba(255,123,0,0.35)",

            transition: "0.3s",
            cursor: "pointer",
          }}
        >

          <FaBars />

        </div>

        {/* MENU */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >

          {menuItems.map((item, index) => {

            const active =
              location.pathname === item.path;

            return (

              <button
                key={index}
                onClick={() => navigate(item.path)}

                style={{
                  width: "58px",
                  height: "58px",

                  border: "none",
                  borderRadius: "18px",

                  cursor: "pointer",

                  fontSize: "21px",

                  color: active
                    ? "white"
                    : "#94a3b8",

                  background: active
                    ? "linear-gradient(135deg,#2563eb,#3b82f6)"
                    : "rgba(255,255,255,0.04)",

                  transition: "all 0.3s ease",

                  boxShadow: active
                    ? "0 10px 25px rgba(37,99,235,0.35)"
                    : "none",
                }}

                onMouseEnter={(e) => {

                  if (!active) {

                    e.currentTarget.style.background =
                      "rgba(255,255,255,0.08)";

                    e.currentTarget.style.transform =
                      "translateY(-2px) scale(1.03)";
                  }

                }}

                onMouseLeave={(e) => {

                  if (!active) {

                    e.currentTarget.style.background =
                      "rgba(255,255,255,0.04)";

                    e.currentTarget.style.transform =
                      "translateY(0px) scale(1)";
                  }

                }}
              >

                {item.icon}

              </button>

            );

          })}

        </div>

      </div>

      {/* SETTINGS */}
      <button
        style={{
          width: "58px",
          height: "58px",

          border: "none",
          borderRadius: "18px",

          background:
            "rgba(255,255,255,0.04)",

          color: "#94a3b8",

          fontSize: "22px",

          cursor: "pointer",

          transition: "all 0.3s ease",
        }}

        onMouseEnter={(e) => {

          e.currentTarget.style.background =
            "rgba(255,255,255,0.08)";

          e.currentTarget.style.transform =
            "translateY(-2px) scale(1.03)";
        }}

        onMouseLeave={(e) => {

          e.currentTarget.style.background =
            "rgba(255,255,255,0.04)";

          e.currentTarget.style.transform =
            "translateY(0px) scale(1)";
        }}
      >

        <FaCog />

      </button>

    </aside>

  );

}

export default Sidebar;