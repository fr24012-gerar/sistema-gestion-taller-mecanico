import {
  FaUsers,
  FaCar,
  FaClipboardList,
  FaCog,
  FaBars,
} from "react-icons/fa";

function Dashboard() {

  // =========================
  // EFECTOS HOVER
  // =========================
  const hoverUp = (e) => {
    e.currentTarget.style.transform = "translateY(-5px)";
    e.currentTarget.style.boxShadow = "0 0 20px rgba(0,0,0,0.5)";
  };

  const hoverLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0px)";
    e.currentTarget.style.boxShadow = "none";
  };

  // =========================
  // RENDER
  // =========================
  return (

    // CONTENEDOR PRINCIPAL
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#0f0f0f",
        color: "white",
        fontFamily: "Arial",
      }}
    >

      {/* ===================================== */}
      {/* SIDEBAR */}
      {/* ===================================== */}
      <aside
        style={{
          width: "90px",
          background: "linear-gradient(to bottom, #071028, #0a1633)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 0",
        }}
      >

        {/* LOGO */}
        <div
          onMouseEnter={hoverUp}
          onMouseLeave={hoverLeave}
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "#ff6b00",
            borderRadius: "14px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          <FaBars />
        </div>

        {/* ICONOS */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}
        >

          {/* ICONO USUARIOS */}
          <div
            onMouseEnter={hoverUp}
            onMouseLeave={hoverLeave}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "14px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(255,255,255,0.12)",
              color: "white",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            <FaUsers />
          </div>

          {/* ICONO VEHICULOS */}
          <div
            onMouseEnter={hoverUp}
            onMouseLeave={hoverLeave}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "14px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#bdbdbd",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            <FaCar />
          </div>

          {/* ICONO ORDENES */}
          <div
            onMouseEnter={hoverUp}
            onMouseLeave={hoverLeave}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "14px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#bdbdbd",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            <FaClipboardList />
          </div>

        </div>
        {/* FIN ICONOS */}

        {/* SETTINGS */}
        <div
          onMouseEnter={hoverUp}
          onMouseLeave={hoverLeave}
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "14px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#bdbdbd",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          <FaCog />
        </div>

      </aside>
      {/* FIN SIDEBAR */}

      {/* ===================================== */}
      {/* MAIN */}
      {/* ===================================== */}
      <main
        style={{
          flex: 1,
          padding: "30px",
        }}
      >

        {/* ===================================== */}
        {/* HEADER */}
        {/* ===================================== */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >

          {/* TITULO */}
          <div>

            <h2 style={{ fontSize: "28px" }}>
              Panel principal
            </h2>

            <p style={{ color: "#9c9c9c" }}>
              Taller Grupo 13 · Sistema de gestión
            </p>

          </div>

          {/* ADMIN */}
          <div
            onMouseEnter={hoverUp}
            onMouseLeave={hoverLeave}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: "#1b1b1b",
              padding: "10px 16px",
              borderRadius: "30px",
              transition: "0.3s",
              cursor: "pointer",
            }}
          >

            {/* AVATAR */}
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#d9d9ff",
                color: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              AD
            </div>

            <span>
              Administrador
            </span>

          </div>
          {/* FIN ADMIN */}

        </div>
        {/* FIN HEADER */}

        {/* ===================================== */}
        {/* BIENVENIDA */}
        {/* ===================================== */}
        <div>

          <h1 style={{ fontSize: "40px" }}>
            Bienvenido, Administrador
          </h1>

          <p
            style={{
              color: "#9c9c9c",
              marginTop: "10px",
              marginBottom: "35px",
            }}
          >
            Selecciona un módulo para comenzar a gestionar
          </p>

        </div>
        {/* FIN BIENVENIDA */}

        {/* ===================================== */}
        {/* STATS */}
        {/* ===================================== */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
            marginBottom: "50px",
          }}
        >

          {/* CARD CLIENTES */}
          <div
            onMouseEnter={hoverUp}
            onMouseLeave={hoverLeave}
            style={{
              background: "linear-gradient(to right, #262626, #333333)",
              padding: "25px",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              gap: "18px",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >

            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "16px",
                backgroundColor: "#f8e7d4",
                color: "#ff7a00",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "22px",
              }}
            >
              <FaUsers />
            </div>

            <div>
              <p>Clientes</p>
              <h3>148</h3>
            </div>

          </div>

          {/* CARD VEHICULOS */}
          <div
            onMouseEnter={hoverUp}
            onMouseLeave={hoverLeave}
            style={{
              background: "linear-gradient(to right, #262626, #333333)",
              padding: "25px",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              gap: "18px",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >

            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "16px",
                backgroundColor: "#d9ecff",
                color: "#2d7bd8",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "22px",
              }}
            >
              <FaCar />
            </div>

            <div>
              <p>Vehículos</p>
              <h3>74</h3>
            </div>

          </div>

          {/* CARD ORDENES */}
          <div
            onMouseEnter={hoverUp}
            onMouseLeave={hoverLeave}
            style={{
              background: "linear-gradient(to right, #262626, #333333)",
              padding: "25px",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              gap: "18px",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >

            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "16px",
                backgroundColor: "#d8f7dd",
                color: "#35a853",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "22px",
              }}
            >
              <FaClipboardList />
            </div>

            <div>
              <p>Órdenes</p>
              <h3>31</h3>
            </div>

          </div>

        </div>
        {/* FIN STATS */}

        {/* ===================================== */}
        {/* MODULOS */}
        {/* ===================================== */}
        <div>

          <h4
            style={{
              color: "#d4d4d4",
              marginBottom: "25px",
              letterSpacing: "1px",
            }}
          >
            MÓDULOS DISPONIBLES
          </h4>

          {/* GRID MODULOS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "25px",
            }}
          >

            {/* MODULO CLIENTES */}
            <div
              onMouseEnter={hoverUp}
              onMouseLeave={hoverLeave}
              style={{
                background: "linear-gradient(to right, #262626, #333333)",
                borderRadius: "24px",
                padding: "30px",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >

              {/* HEADER CARD */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "25px",
                }}
              >

                {/* ICONO */}
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "16px",
                    backgroundColor: "#f8e7d4",
                    color: "#ff7a00",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "22px",
                  }}
                >
                  <FaUsers />
                </div>

                {/* FLECHA */}
                <span style={{ fontSize: "24px" }}>
                  →
                </span>

              </div>
              {/* FIN HEADER CARD */}

              <h3 style={{ marginBottom: "14px" }}>
                Clientes
              </h3>

              <p style={{ color: "#b3b3b3" }}>
                Registra, edita y elimina clientes.
              </p>

            </div>
            {/* FIN MODULO CLIENTES */}

            {/* MODULO VEHICULOS */}
            <div
              onMouseEnter={hoverUp}
              onMouseLeave={hoverLeave}
              style={{
                background: "linear-gradient(to right, #262626, #333333)",
                borderRadius: "24px",
                padding: "30px",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >

              {/* HEADER CARD */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "25px",
                }}
              >

                {/* ICONO */}
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "16px",
                    backgroundColor: "#d9ecff",
                    color: "#2d7bd8",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "22px",
                  }}
                >
                  <FaCar />
                </div>

                {/* FLECHA */}
                <span style={{ fontSize: "24px" }}>
                  →
                </span>

              </div>
              {/* FIN HEADER CARD */}

              <h3 style={{ marginBottom: "14px" }}>
                Vehículos
              </h3>

              <p style={{ color: "#b3b3b3" }}>
                Administra los vehículos registrados.
              </p>

            </div>
            {/* FIN MODULO VEHICULOS */}

          </div>
          {/* FIN GRID MODULOS */}

        </div>
        {/* FIN MODULOS */}

      </main>
      {/* FIN MAIN */}

    </div>
    /* FIN CONTENEDOR PRINCIPAL */

  );
}

export default Dashboard;