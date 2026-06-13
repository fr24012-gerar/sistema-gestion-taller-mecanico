import { useState, useEffect } from "react";
import { FaUsers, FaPlus, FaSearch, FaTrash, FaEdit, FaTimes, FaSave } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import { listarClientes, crearCliente, actualizarCliente, eliminarCliente } from "../services/clienteService";

// Exacto al ClienteRequestDTO
const FORM_VACIO = { nombre: "", telefono: "", email: "" };

const AVATAR_COLORS = ["#f8e7d4", "#d9ecff", "#d8f7dd", "#f3e5f5", "#fff3bf"];
const AVATAR_TEXT   = ["#ff7a00", "#2d7bd8", "#35a853", "#7b1fa2", "#e67700"];

function Clientes() {
  const [clientes,       setClientes]       = useState([]);
  const [loading,        setLoading]        = useState(true);
  const [error,          setError]          = useState("");
  const [busqueda,       setBusqueda]       = useState("");
  const [modalAbierto,   setModalAbierto]   = useState(false);
  const [modoEditar,     setModoEditar]     = useState(false);
  const [idEditando,     setIdEditando]     = useState(null);
  const [form,           setForm]           = useState(FORM_VACIO);
  const [loadingGuardar, setLoadingGuardar] = useState(false);
  const [errorModal,     setErrorModal]     = useState("");
  const [confirmId,      setConfirmId]      = useState(null);

  // =========================
  // CARGAR — GET /api/clientes
  // =========================
  const cargar = async () => {
    setLoading(true);
    setError("");
    try {
      setClientes(await listarClientes());
    } catch {
      setError("No se pudo conectar con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { cargar(); }, []);

  // =========================
  // FILTRO
  // búsqueda sobre campos del ClienteResponseDTO
  // =========================
  const filtrados = clientes.filter((c) =>
    `${c.nombre} ${c.telefono} ${c.email}`
      .toLowerCase()
      .includes(busqueda.toLowerCase())
  );

  // =========================
  // HANDLERS FORM
  // =========================
  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const abrirCrear = () => {
    setForm(FORM_VACIO);
    setModoEditar(false);
    setIdEditando(null);
    setErrorModal("");
    setModalAbierto(true);
  };

  const abrirEditar = (c) => {
    setForm({
      nombre:   c.nombre   || "",
      telefono: c.telefono || "",
      email:    c.email    || "",
    });
    setModoEditar(true);
    setIdEditando(c.id);
    setErrorModal("");
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setErrorModal("");
  };

  // =========================
  // GUARDAR
  // =========================
  const handleGuardar = async () => {
    if (!form.nombre.trim()) {
      setErrorModal("El nombre es obligatorio.");
      return;
    }
    setLoadingGuardar(true);
    setErrorModal("");
    try {
      modoEditar
        ? await actualizarCliente(idEditando, form)
        : await crearCliente(form);
      await cargar();
      cerrarModal();
    } catch (err) {
      setErrorModal(err.message || "Error al guardar.");
    } finally {
      setLoadingGuardar(false);
    }
  };

  // =========================
  // ELIMINAR
  // =========================
  const handleEliminar = async (id) => {
    try {
      await eliminarCliente(id);
      setClientes((prev) => prev.filter((c) => c.id !== id));
    } catch {
      setError("No se pudo eliminar el cliente.");
    }
    setConfirmId(null);
  };

  const hoverUp    = (e) => { if(window.innerWidth > 768) e.currentTarget.style.transform = "translateY(-3px)"; };
  const hoverLeave = (e) => { if(window.innerWidth > 768) e.currentTarget.style.transform = "translateY(0px)"; };

  const inicial = (nombre) => nombre?.[0]?.toUpperCase() || "?";

  // =========================
  // RENDER
  // =========================
  return (
    <div className="clientes-layout-container">
      {/* Inyección de estilos CSS responsivos */}
      <style>{`
        .clientes-layout-container {
          display: flex;
          min-height: 100vh;
          max-width: 100vw;
          overflow-x: hidden;
          background-color: #0f0f0f;
          color: white;
          font-family: Arial, sans-serif;
        }
        .clientes-main-content {
          flex: 1;
          padding: 40px;
          max-width: 100%;
          box-sizing: border-box;
          flex-direction: column;
        }
        .clientes-header-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          gap: 20px;
        }
        .clientes-search-box {
          width: 300px;
          background-color: #1b1b1b;
          border-radius: 16px;
          padding: 12px 18px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-sizing: border-box;
        }
        .clientes-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 30px;
        }
        .clientes-btn-nuevo {
          background-color: #ff6b00;
          border: none;
          padding: 14px 22px;
          border-radius: 14px;
          color: white;
          font-size: 15px;
          font-weight: bold;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 28px;
          transition: 0.2s;
        }
        .clientes-table-container {
          background: linear-gradient(to right, #262626, #333333);
          border-radius: 24px;
          overflow: hidden;
        }
        .clientes-table-header {
          display: grid;
          grid-template-columns: 100px 2.5fr 1.5fr 2fr 120px;
          padding: 20px 22px;
          color: #b3b3b3;
          font-weight: bold;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          font-size: 13px;
        }

        .clientes-table-row {
          display: grid;
          grid-template-columns: 100px 2.5fr 1.5fr 2fr 120px;
          padding: 18px 22px;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .clientes-cell-label {
          display: none;
          font-size: 11px;
          color: #ff7a00;
          font-weight: bold;
          margin-bottom: 2px;
          text-transform: uppercase;
        }

        /* ==========================================
           RESPONSIVE: DISPOSITIVOS MÓVILES (MÁX 768px)
           ========================================== */
        @media (max-width: 768px) {
          .clientes-layout-container {
            flex-direction: column;
            padding-bottom: 75px; /* Espacio para no tapar el Sidebar móvil */
          }
          .clientes-main-content {
            padding: 24px 16px;
          }
          .clientes-header-section {
            flex-direction: column;
            align-items: stretch;
            margin-bottom: 25px;
          }
          .clientes-search-box {
            width: 100%;
          }
          .clientes-stats-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }
          .clientes-btn-nuevo {
            width: 100%;
            justify-content: center;
          }

          /* Transformación de tabla a Tarjetas */
          .clientes-table-header {
            display: none;
          }
          .clientes-table-row {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
            padding: 20px;
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }
          .clientes-cell-label {
            display: block;
          }
          .clientes-row-acciones {
            display: flex;
            justify-content: flex-end;
            border-top: 1px solid rgba(255,255,255,0.05);
            padding-top: 12px;
            margin-top: 4px;
            width: 100%;
          }
        }
      `}</style>

      <Sidebar />

      <main className="clientes-main-content">
        
        {/* HEADER */}
        <div className="clientes-header-section">
          <div>
            <h1 style={{ fontSize: "clamp(28px, 5vw, 40px)", fontWeight: "bold", marginBottom: "8px", margin: 0 }}>
              Gestión de clientes
            </h1>
            <p style={{ color: "#9c9c9c", margin: "4px 0 0 0" }}>
              Administra los clientes del taller
            </p>
          </div>

          {/* BUSCADOR */}
          <div className="clientes-search-box">
            <FaSearch color="#9c9c9c" />
            <input
              type="text"
              placeholder="Buscar por nombre, email..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              style={{ background: "transparent", border: "none", outline: "none", color: "white", width: "100%", fontSize: "15px" }}
            />
          </div>
        </div>

        {/* ERROR GLOBAL */}
        {error && (
          <div style={{ background: "#ffd9d9", color: "#ff4d4d", padding: "12px 18px", borderRadius: "12px", marginBottom: "24px", fontSize: "14px" }}>
            ⚠ {error}
          </div>
        )}

        {/* STATS */}
        <div className="clientes-stats-grid">
          {[
            { label: "Total clientes", value: clientes.length,  bg: "#f8e7d4", color: "#ff7a00" },
            { label: "Resultados",     value: filtrados.length, bg: "#d8f7dd", color: "#35a853" },
          ].map((c) => (
            <div key={c.label} style={{ background: "linear-gradient(to right,#262626,#333333)", borderRadius: "24px", padding: "25px", display: "flex", alignItems: "center", gap: "18px" }}>
              <div style={{ width: "55px", height: "55px", borderRadius: "16px", backgroundColor: c.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", color: c.color, flexShrink: 0 }}>
                <FaUsers />
              </div>
              <div>
                <p style={{ color: "#b3b3b3", margin: 0, fontSize: "14px" }}>{c.label}</p>
                <h2 style={{ fontSize: "36px", margin: "4px 0 0 0", fontWeight: "bold" }}>{c.value}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* BOTÓN NUEVO */}
        <button
          onClick={abrirCrear}
          onMouseEnter={hoverUp}
          onMouseLeave={hoverLeave}
          className="clientes-btn-nuevo"
        >
          <FaPlus /> Nuevo cliente
        </button>

        {/* TABLA */}
        <div className="clientes-table-container">
          
          <div className="clientes-table-header">
            <span>ID</span>
            <span>NOMBRE</span>
            <span>TELÉFONO</span>
            <span>EMAIL</span>
            <span>ACCIONES</span>
          </div>

          {/* LOADING */}
          {loading && (
            <div style={{ padding: "40px", textAlign: "center", color: "#9c9c9c" }}>
              Cargando clientes...
            </div>
          )}

          {/* VACÍO */}
          {!loading && filtrados.length === 0 && (
            <div style={{ padding: "40px", textAlign: "center", color: "#9c9c9c" }}>
              {busqueda ? "Sin resultados para tu búsqueda." : "No hay clientes registrados."}
            </div>
          )}

          {/* FILAS / TARJETAS */}
          {!loading && filtrados.map((c, i) => (
            <div key={c.id} className="clientes-table-row">

              {/* ID */}
              <div>
                <span className="clientes-cell-label">ID</span>
                <span style={{ color: "#6b7280", fontSize: "13px", fontFamily: "monospace" }}>
                  {c.id}
                </span>
              </div>

              {/* NOMBRE */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "50%", backgroundColor: AVATAR_COLORS[i % AVATAR_COLORS.length], color: AVATAR_TEXT[i % AVATAR_TEXT.length], display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "16px", flexShrink: 0 }}>
                  {inicial(c.nombre)}
                </div>
                <div>
                  <span className="clientes-cell-label">Nombre</span>
                  <strong>{c.nombre}</strong>
                </div>
              </div>

              {/* TELÉFONO */}
              <div>
                <span className="clientes-cell-label">Teléfono</span>
                <span style={{ color: "#b3b3b3" }}>{c.telefono || "—"}</span>
              </div>

              {/* EMAIL */}
              <div>
                <span className="clientes-cell-label">Email</span>
                <span style={{ color: "#b3b3b3", fontSize: "13px" }}>{c.email || "—"}</span>
              </div>

              {/* ACCIONES */}
              <div className="clientes-row-acciones" style={{ display: "flex", gap: "8px" }}>
                <button
                  onClick={() => abrirEditar(c)}
                  title="Editar"
                  style={{ width: "40px", height: "40px", borderRadius: "12px", border: "none", backgroundColor: "#f8e7d4", color: "#ff7a00", cursor: "pointer", fontSize: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => setConfirmId(c.id)}
                  title="Eliminar"
                  style={{ width: "40px", height: "40px", borderRadius: "12px", border: "none", backgroundColor: "#ffd9d9", color: "#ff4d4d", cursor: "pointer", fontSize: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <FaTrash />
                </button>
              </div>

            </div>
          ))}
        </div>

      </main>

      {/* MODAL CREAR / EDITAR */}
      {modalAbierto && (
        <div
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200, padding: "16px" }}
          onClick={cerrarModal}
        >
          <div
            style={{ background: "#1b1b1b", borderRadius: "24px", padding: "32px", width: "420px", maxWidth: "100%", boxSizing: "border-box" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header modal */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#f8e7d4", color: "#ff7a00", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <FaUsers />
                </div>
                <div>
                  <div style={{ fontWeight: "bold", fontSize: "15px" }}>
                    {modoEditar ? "Editar cliente" : "Nuevo cliente"}
                  </div>
                  <div style={{ fontSize: "11px", color: "#6b7280" }}>
                    {modoEditar ? `PUT /api/clientes/${idEditando}` : "POST /api/clientes"}
                  </div>
                </div>
              </div>
              <button
                onClick={cerrarModal}
                style={{ background: "none", border: "none", color: "#9c9c9c", fontSize: "20px", cursor: "pointer" }}
              >
                <FaTimes />
              </button>
            </div>

            {/* Error modal */}
            {errorModal && (
              <div style={{ background: "#ffd9d9", color: "#ff4d4d", padding: "10px 14px", borderRadius: "10px", marginBottom: "16px", fontSize: "13px" }}>
                ⚠ {errorModal}
              </div>
            )}

            {/* Campos */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { name: "nombre",   label: "Nombre *", placeholder: "Carlos Morales"        },
                { name: "telefono", label: "Teléfono", placeholder: "+503 7700-0000"         },
                { name: "email",    label: "Email",    placeholder: "carlos@correo.com", type: "email" },
              ].map((campo) => (
                <div key={campo.name}>
                  <label style={{ fontSize: "12px", color: "#9c9c9c", display: "block", marginBottom: "6px" }}>
                    {campo.label}
                  </label>
                  <input
                    name={campo.name}
                    type={campo.type || "text"}
                    placeholder={campo.placeholder}
                    value={form[campo.name]}
                    onChange={handleChange}
                    style={{ width: "100%", background: "#262626", border: "1px solid #374151", borderRadius: "10px", padding: "10px 12px", color: "white", fontSize: "13px", outline: "none", boxSizing: "border-box" }}
                  />
                </div>
              ))}
            </div>

            {/* Footer modal */}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "24px" }}>
              <button
                onClick={cerrarModal}
                style={{ background: "none", border: "1px solid #374151", color: "#9c9c9c", padding: "9px 18px", borderRadius: "10px", cursor: "pointer", fontSize: "13px" }}
              >
                Cancelar
              </button>
              <button
                onClick={handleGuardar}
                disabled={loadingGuardar}
                style={{ background: "#ff6b00", border: "none", color: "white", padding: "9px 20px", borderRadius: "10px", cursor: "pointer", fontSize: "13px", fontWeight: "bold", display: "flex", alignItems: "center", gap: "8px", opacity: loadingGuardar ? 0.6 : 1 }}
              >
                {loadingGuardar ? "Guardando..." : <><FaSave /> {modoEditar ? "Actualizar" : "Registrar"}</>}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL CONFIRMAR ELIMINAR */}
      {confirmId !== null && (
        <div
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200, padding: "16px" }}
          onClick={() => setConfirmId(null)}
        >
          <div
            style={{ background: "#1b1b1b", borderRadius: "24px", padding: "32px", width: "340px", maxWidth: "100%", boxSizing: "border-box", textAlign: "center" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ fontSize: "40px", marginBottom: "12px" }}>⚠️</div>
            <h3 style={{ marginBottom: "10px", margin: 0 }}>¿Eliminar cliente?</h3>
            <p style={{ color: "#9c9c9c", fontSize: "14px", marginBottom: "24px", marginTop: "8px" }}>
              Esta acción eliminará al cliente y sus vehículos asociados.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
              <button
                onClick={() => setConfirmId(null)}
                style={{ background: "none", border: "1px solid #374151", color: "#9c9c9c", padding: "10px 20px", borderRadius: "12px", cursor: "pointer" }}
              >
                Cancelar
              </button>
              <button
                onClick={() => handleEliminar(confirmId)}
                style={{ background: "#ff4d4d", border: "none", color: "white", padding: "10px 20px", borderRadius: "12px", cursor: "pointer", fontWeight: "bold" }}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Clientes;