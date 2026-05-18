import { useState, useEffect } from "react";
import { FaCar, FaPlus, FaSearch, FaTrash, FaEdit, FaTimes, FaSave } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import { listarVehiculos, crearVehiculo, actualizarVehiculo, eliminarVehiculo } from "../services/vehiculoService";

const FORM_VACIO = { marca: "", modelo: "", placa: "", clienteId: "" };

function Vehiculos() {
  const [vehiculos,      setVehiculos]      = useState([]);
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

  // Estado para controlar el ancho de la pantalla y aplicar responsividad dinámica
  const [anchoPantalla, setAnchoPantalla] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setAnchoPantalla(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const esMovil = anchoPantalla < 768;
  const esTablet = anchoPantalla < 1024;

  // =========================
  // CARGAR
  // =========================
  const cargar = async () => {
    setLoading(true);
    setError("");
    try {
      setVehiculos(await listarVehiculos());
    } catch {
      setError("No se pudo conectar con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { cargar(); }, []);

  // =========================
  // FILTRO
  // =========================
  const filtrados = vehiculos.filter((v) =>
    `${v.marca} ${v.modelo} ${v.placa}`
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

  const abrirEditar = (v) => {
    setForm({
      marca:     v.marca     || "",
      modelo:    v.modelo    || "",
      placa:     v.placa     || "",
      clienteId: v.clienteId || "",
    });
    setModoEditar(true);
    setIdEditando(v.id);
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
    if (!form.marca.trim() || !form.placa.trim()) {
      setErrorModal("Marca y placa son obligatorios.");
      return;
    }

    setLoadingGuardar(true);
    setErrorModal("");

    try {
      const dto = {
        ...form,
        clienteId: form.clienteId === "" ? null : Number(form.clienteId)
      };
      
      modoEditar
        ? await actualizarVehiculo(idEditando, dto)
        : await crearVehiculo(dto);

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
      await eliminarVehiculo(id);
      setVehiculos((prev) => prev.filter((v) => v.id !== id));
    } catch {
      setError("No se pudo eliminar el vehículo.");
    }
    setConfirmId(null);
  };

  const hoverUp    = (e) => { if (!esMovil) e.currentTarget.style.transform = "translateY(-3px)"; };
  const hoverLeave = (e) => { if (!esMovil) e.currentTarget.style.transform = "translateY(0px)";  };

  // =========================
  // RENDER
  // =========================
  return (
    <div style={{ 
      display: "flex", 
      flexDirection: esTablet ? "column" : "row", // Sidebar arriba/oculto en pantallas chicas si aplica
      minHeight: "100vh", 
      backgroundColor: "#0f0f0f", 
      color: "white", 
      fontFamily: "Arial" 
    }}>

      <Sidebar />

      <main style={{ 
        flex: 1, 
        padding: esMovil ? "20px 15px" : "40px",
        width: "100%",
        boxSizing: "border-box"
      }}>

        {/* HEADER */}
        <div style={{ 
          display: "flex", 
          flexDirection: esMovil ? "column" : "row", 
          justifyContent: "space-between", 
          alignItems: esMovil ? "stretch" : "center", 
          gap: "20px",
          marginBottom: "40px" 
        }}>
          <div>
            <h1 style={{ fontSize: esMovil ? "30px" : "40px", fontWeight: "bold", marginBottom: "8px" }}>
              Gestión de vehículos
            </h1>
            <p style={{ color: "#9c9c9c" }}>
              Administra los vehículos del taller
            </p>
          </div>

          {/* BUSCADOR */}
          <div style={{ 
            width: esMovil ? "100%" : "300px", 
            backgroundColor: "#1b1b1b", 
            borderRadius: "16px", 
            padding: "12px 18px", 
            display: "flex", 
            alignItems: "center", 
            gap: "10px",
            boxSizing: "border-box"
          }}>
            <FaSearch color="#9c9c9c" />
            <input
              type="text"
              placeholder="Buscar por marca, modelo..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              style={{ background: "transparent", border: "none", outline: "none", color: "white", width: "100%", fontSize: "15px" }}
            />
          </div>
        </div>

        {/* ERROR GLOBAL */}
        {error && (
          <div style={{ background: "#ffd9d9", color: "#ff4d4d", padding: "12px 18px", borderRadius: "12px", marginBottom: "24px", fontSize: "14px" }}>
            单元 {error}
          </div>
        )}

        {/* STATS */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: esMovil ? "1fr" : "repeat(2, 1fr)", 
          gap: "20px", 
          marginBottom: "30px" 
        }}>
          {[
            { label: "Total vehículos", value: vehiculos.length, bg: "#d9ecff", color: "#2d7bd8" },
            { label: "Resultados",      value: filtrados.length, bg: "#d8f7dd", color: "#35a853" },
          ].map((c) => (
            <div key={c.label} style={{ background: "linear-gradient(to right,#262626,#333333)", borderRadius: "24px", padding: "20px", display: "flex", alignItems: "center", gap: "18px" }}>
              <div style={{ width: "50px", height: "50px", borderRadius: "16px", backgroundColor: c.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", color: c.color, flexShrink: 0 }}>
                <FaCar />
              </div>
              <div>
                <p style={{ color: "#b3b3b3", fontSize: "14px", margin: 0 }}>{c.label}</p>
                <h2 style={{ fontSize: esMovil ? "28px" : "36px", margin: "4px 0 0 0" }}>{c.value}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* BOTÓN NUEVO */}
        <button
          onClick={abrirCrear}
          onMouseEnter={hoverUp}
          onMouseLeave={hoverLeave}
          style={{ backgroundColor: "#ff6b00", border: "none", padding: "14px 22px", borderRadius: "14px", color: "white", fontSize: "15px", fontWeight: "bold", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: esMovil ? "center" : "flex-start", width: esMovil ? "100%" : "auto", gap: "10px", marginBottom: "28px", transition: "0.2s" }}
        >
          <FaPlus /> Nuevo vehículo
        </button>

        {/* TABLA / CONTENEDOR RESPONSIVE */}
        <div style={{ background: "linear-gradient(to right,#262626,#333333)", borderRadius: "24px", overflow: "hidden" }}>
          
          {/* ENCABEZADO - Solo visible en Escritorio */}
          {!esMovil && (
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr 1.5fr 1fr 100px", padding: "20px 22px", color: "#b3b3b3", fontWeight: "bold", borderBottom: "1px solid rgba(255,255,255,0.08)", fontSize: "13px" }}>
              <span>MARCA</span>
              <span>MODELO</span>
              <span>PLACA</span>
              <span>ID CLIENTE</span>
              <span style={{ textAlign: "right" }}>ACCIONES</span>
            </div>
          )}

          {/* LOADING */}
          {loading && (
            <div style={{ padding: "40px", textAlign: "center", color: "#9c9c9c" }}>
              Cargando vehículos...
            </div>
          )}

          {/* VACÍO */}
          {!loading && filtrados.length === 0 && (
            <div style={{ padding: "40px", textAlign: "center", color: "#9c9c9c" }}>
              {busqueda ? "Sin resultados para tu búsqueda." : "No hay vehículos registrados."}
            </div>
          )}

          {/* FILAS (Formato Grid en PC, Formato Tarjeta en Móvil) */}
          {!loading && filtrados.map((v) => (
            <div
              key={v.id}
              style={esMovil ? {
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "20px",
                borderBottom: "1px solid rgba(255,255,255,0.08)"
              } : {
                display: "grid",
                gridTemplateColumns: "2fr 1.5fr 1.5fr 1fr 100px",
                padding: "18px 22px",
                alignItems: "center",
                borderBottom: "1px solid rgba(255,255,255,0.06)"
              }}
            >
              {/* MARCA */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "12px", backgroundColor: "#d9ecff", display: "flex", alignItems: "center", justifyContent: "center", color: "#2d7bd8", fontSize: "18px", flexShrink: 0 }}>
                  <FaCar />
                </div>
                <div>
                  {esMovil && <span style={{ fontSize: "10px", color: "#ff6b00", display: "block", fontWeight: "bold" }}>MARCA</span>}
                  <strong style={{ fontSize: "16px" }}>{v.marca}</strong>
                </div>
              </div>

              {/* MODELO */}
              <div>
                {esMovil && <span style={{ fontSize: "10px", color: "#9c9c9c", display: "block", marginBottom: "2px" }}>MODELO</span>}
                <span style={{ color: "#b3b3b3" }}>{v.modelo || "—"}</span>
              </div>

              {/* PLACA */}
              <div>
                {esMovil && <span style={{ fontSize: "10px", color: "#9c9c9c", display: "block", marginBottom: "4px" }}>PLACA</span>}
                <span style={{ background: "#1b1b1b", padding: "4px 10px", borderRadius: "8px", fontSize: "13px", fontFamily: "monospace", display: "inline-block" }}>
                  {v.placa}
                </span>
              </div>

              {/* ID CLIENTE */}
              <div>
                {esMovil && <span style={{ fontSize: "10px", color: "#9c9c9c", display: "block", marginBottom: "2px" }}>ID CLIENTE</span>}
                <span style={{ color: "#b3b3b3", paddingLeft: esMovil ? "0" : "25px" }}>
                  {v.clienteId ?? "—"}
                </span>
              </div>

              {/* ACCIONES */}
              <div style={{ 
                display: "flex", 
                gap: "10px", 
                justifyContent: esMovil ? "flex-end" : "flex-end",
                marginTop: esMovil ? "10px" : "0",
                borderTop: esMovil ? "1px solid rgba(255,255,255,0.05)" : "none",
                paddingTop: esMovil ? "12px" : "0"
              }}>
                <button
                  onClick={() => abrirEditar(v)}
                  title="Editar"
                  style={{ width: "40px", height: "40px", borderRadius: "12px", border: "none", backgroundColor: "#d9ecff", color: "#2d7bd8", cursor: "pointer", fontSize: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => setConfirmId(v.id)}
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
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200, padding: "15px" }}
          onClick={cerrarModal}
        >
          <div
            style={{ background: "#1b1b1b", borderRadius: "24px", padding: esMovil ? "24px" : "32px", width: "440px", maxWidth: "100%", boxSizing: "border-box" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header modal */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#d9ecff", color: "#2d7bd8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <FaCar />
                </div>
                <div>
                  <div style={{ fontWeight: "bold", fontSize: "15px" }}>
                    {modoEditar ? "Editar vehículo" : "Nuevo vehículo"}
                  </div>
                  <div style={{ fontSize: "11px", color: "#6b7280" }}>
                    {modoEditar ? `PUT /vehiculos/${idEditando}` : "POST /vehiculos"}
                  </div>
                </div>
              </div>
              <button onClick={cerrarModal} style={{ background: "none", border: "none", color: "#9c9c9c", fontSize: "20px", cursor: "pointer" }}>
                <FaTimes />
              </button>
            </div>

            {errorModal && (
              <div style={{ background: "#ffd9d9", color: "#ff4d4d", padding: "10px 14px", borderRadius: "10px", marginBottom: "16px", fontSize: "13px" }}>
                ⚠ {errorModal}
              </div>
            )}

            {/* Campos adaptables a 1 columna en móvil */}
            <div style={{ display: "grid", gridTemplateColumns: esMovil ? "1fr" : "1fr 1fr", gap: "14px" }}>
              {[
                { name: "marca",     label: "Marca *",    placeholder: "Toyota"   },
                { name: "modelo",    label: "Modelo",     placeholder: "Corolla"  },
                { name: "placa",     label: "Placa *",    placeholder: "P-123456" },
                { name: "clienteId", label: "ID Cliente", placeholder: "1", type: "number" },
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
                    style={{ width: "100%", background: "#262626", border: "1px solid #374151", borderRadius: "10px", padding: "11px 12px", color: "white", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
                  />
                </div>
              ))}
            </div>

            {/* Footer modal */}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "28px" }}>
              <button onClick={cerrarModal} style={{ background: "none", border: "1px solid #374151", color: "#9c9c9c", padding: "10px 18px", borderRadius: "10px", cursor: "pointer", fontSize: "13px" }}>
                Cancelar
              </button>
              <button
                onClick={handleGuardar}
                disabled={loadingGuardar}
                style={{ background: "#ff6b00", border: "none", color: "white", padding: "10px 20px", borderRadius: "10px", cursor: "pointer", fontSize: "13px", fontWeight: "bold", display: "flex", alignItems: "center", gap: "8px", opacity: loadingGuardar ? 0.6 : 1 }}
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
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200, padding: "15px" }}
          onClick={() => setConfirmId(null)}
        >
          <div style={{ background: "#1b1b1b", borderRadius: "24px", padding: "32px", width: "340px", maxWidth: "100%", boxSizing: "border-box", textAlign: "center" }}>
            <div style={{ fontSize: "40px", marginBottom: "12px" }}>⚠️</div>
            <h3 style={{ marginBottom: "10px" }}>¿Eliminar vehículo?</h3>
            <p style={{ color: "#9c9c9c", fontSize: "14px", marginBottom: "24px" }}>
              Esta acción es permanente y no se puede deshacer.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
              <button onClick={() => setConfirmId(null)} style={{ background: "none", border: "1px solid #374151", color: "#9c9c9c", padding: "10px 20px", borderRadius: "12px", cursor: "pointer" }}>
                Cancelar
              </button>
              <button onClick={() => handleEliminar(confirmId)} style={{ background: "#ff4d4d", border: "none", color: "white", padding: "10px 20px", borderRadius: "12px", cursor: "pointer", fontWeight: "bold" }}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Vehiculos;