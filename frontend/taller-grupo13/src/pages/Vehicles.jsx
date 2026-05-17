import {
  FaCar,
  FaPlus,
  FaSearch,
  FaTrash,
  FaEdit,
} from "react-icons/fa";

import Sidebar from "../components/Sidebar";

function Vehiculos() {

  // =========================
  // DATOS TEMPORALES
  // =========================
  const vehiculos = [

    {
      id: 1,
      marca: "Toyota",
      modelo: "Corolla",
      placa: "P-123456",
      anio: 2019,
      propietario: "Carlos Morales",
      estado: "En orden",
      clienteId: 1,
    },

    {
      id: 2,
      marca: "Honda",
      modelo: "Civic",
      placa: "P-654321",
      anio: 2021,
      propietario: "Laura Rivas",
      estado: "En servicio",
      clienteId: 2,
    },

    {
      id: 3,
      marca: "Nissan",
      modelo: "Sentra",
      placa: "P-789012",
      anio: 2018,
      propietario: "José Mejía",
      estado: "Pendiente",
      clienteId: 3,
    },

  ];

  // =========================
  // ESTILOS DE ESTADO
  // =========================
  const obtenerColorEstado = (estado) => {

    if (estado === "En orden") {

      return {
        background: "#d8f7dd",
        color: "#35a853",
      };

    }

    if (estado === "En servicio") {

      return {
        background: "#f8e7d4",
        color: "#ff7a00",
      };

    }

    return {
      background: "#ffd9d9",
      color: "#ff4d4d",
    };

  };

  // =========================
  // RETURN
  // =========================
  return (

    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#0f0f0f",
        color: "white",
        fontFamily: "Arial",
      }}
    >

      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENIDO */}
      <main
        style={{
          flex: 1,
          padding: "40px",
        }}
      >

        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >

          <div>

            <h1
              style={{
                fontSize: "52px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Gestión de vehículos
            </h1>

            <p
              style={{
                color: "#9c9c9c",
                fontSize: "18px",
              }}
            >
              Administra los vehículos del taller
            </p>

          </div>

          {/* BUSCADOR */}
          <div
            style={{
              width: "320px",
              backgroundColor: "#1b1b1b",
              borderRadius: "16px",
              padding: "14px 18px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >

            <FaSearch color="#9c9c9c" />

            <input
              type="text"
              placeholder="Buscar vehículo..."
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

        {/* CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px",
            marginBottom: "35px",
          }}
        >

          {/* CARD 1 */}
          <div
            style={{
              background: "linear-gradient(to right, #262626, #333333)",
              borderRadius: "24px",
              padding: "25px",
            }}
          >

            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "18px",
                backgroundColor: "#d9ecff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                color: "#2d7bd8",
                marginBottom: "18px",
              }}
            >

              <FaCar />

            </div>

            <p style={{ color: "#b3b3b3" }}>
              Total vehículos
            </p>

            <h2
              style={{
                fontSize: "42px",
                marginTop: "10px",
              }}
            >
              74
            </h2>

          </div>

          {/* CARD 2 */}
          <div
            style={{
              background: "linear-gradient(to right, #262626, #333333)",
              borderRadius: "24px",
              padding: "25px",
            }}
          >

            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "18px",
                backgroundColor: "#d8f7dd",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                color: "#35a853",
                marginBottom: "18px",
              }}
            >

              <FaCar />

            </div>

            <p style={{ color: "#b3b3b3" }}>
              En orden
            </p>

            <h2
              style={{
                fontSize: "42px",
                marginTop: "10px",
              }}
            >
              51
            </h2>

          </div>

          {/* CARD 3 */}
          <div
            style={{
              background: "linear-gradient(to right, #262626, #333333)",
              borderRadius: "24px",
              padding: "25px",
            }}
          >

            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "18px",
                backgroundColor: "#f8e7d4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                color: "#ff7a00",
                marginBottom: "18px",
              }}
            >

              <FaCar />

            </div>

            <p style={{ color: "#b3b3b3" }}>
              En servicio
            </p>

            <h2
              style={{
                fontSize: "42px",
                marginTop: "10px",
              }}
            >
              18
            </h2>

          </div>

        </div>

        {/* BOTON */}
        <button
          style={{
            backgroundColor: "#ff6b00",
            border: "none",
            padding: "16px 24px",
            borderRadius: "16px",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "30px",
          }}
        >

          <FaPlus />

          Nuevo vehículo

        </button>

        {/* TABLA */}
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
              gridTemplateColumns:
                "2fr 1.2fr 1fr 1.5fr 1.2fr 1fr",
              padding: "22px",
              color: "#b3b3b3",
              fontWeight: "bold",
              borderBottom:
                "1px solid rgba(255,255,255,0.08)",
            }}
          >

            <span>Vehículo</span>
            <span>Placa</span>
            <span>Año</span>
            <span>Propietario</span>
            <span>Estado</span>
            <span>Acciones</span>

          </div>

          {/* FILAS */}
          {vehiculos.map((vehiculo) => (

            <div
              key={vehiculo.id}
              style={{
                display: "grid",
                gridTemplateColumns:
                  "2fr 1.2fr 1fr 1.5fr 1.2fr 1fr",
                padding: "22px",
                alignItems: "center",
                borderBottom:
                  "1px solid rgba(255,255,255,0.08)",
              }}
            >

              {/* VEHICULO */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                }}
              >

                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "16px",
                    backgroundColor: "#d9ecff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#2d7bd8",
                    fontSize: "22px",
                  }}
                >

                  <FaCar />

                </div>

                <div>

                  <h3
                    style={{
                      margin: 0,
                      fontSize: "16px",
                    }}
                  >
                    {vehiculo.marca} {vehiculo.modelo}
                  </h3>

                </div>

              </div>

              {/* PLACA */}
              <span>{vehiculo.placa}</span>

              {/* AÑO */}
              <span>{vehiculo.anio}</span>

              {/* PROPIETARIO */}
              <span>{vehiculo.propietario}</span>

              {/* ESTADO */}
              <div>

                <span
                  style={{
                    padding: "10px 16px",
                    borderRadius: "999px",
                    fontSize: "14px",
                    fontWeight: "bold",

                    ...obtenerColorEstado(
                      vehiculo.estado
                    ),
                  }}
                >

                  {vehiculo.estado}

                </span>

              </div>

              {/* ACCIONES */}
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                }}
              >

                {/* EDITAR */}
                <button
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "12px",
                    border: "none",
                    backgroundColor: "#d9ecff",
                    color: "#2d7bd8",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >

                  <FaEdit />

                </button>

                {/* ELIMINAR */}
                <button
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "12px",
                    border: "none",
                    backgroundColor: "#ffd9d9",
                    color: "#ff4d4d",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >

                  <FaTrash />

                </button>

              </div>

            </div>

          ))}

        </div>

      </main>

    </div>

  );

}

export default Vehiculos;