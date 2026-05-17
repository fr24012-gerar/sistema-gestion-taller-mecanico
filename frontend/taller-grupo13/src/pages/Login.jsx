import { useState } from 'react';

const styles = {
    wrapper: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    leftPanel: {
        background: 'linear-gradient(160deg, #0f1628 0%, #1a2540 60%, #1e2d50 100%)',
        padding: '2rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
    },
    circle1: {
        position: 'absolute',
        width: '280px',
        height: '280px',
        borderRadius: '50%',
        background: 'rgba(255,107,0,0.06)',
        top: '-80px',
        right: '-80px',
        pointerEvents: 'none',
    },
    circle2: {
        position: 'absolute',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'rgba(255,107,0,0.04)',
        bottom: '60px',
        left: '-60px',
        pointerEvents: 'none',
    },

    logoBox: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        marginBottom: '1.5rem',
        position: 'relative',
        zIndex: 1,
    },
    logoIcon: {
        width: '52px',
        height: '52px',
        background: 'linear-gradient(135deg, #ff6b00, #ff8c38)',
        borderRadius: '14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 15px rgba(255,107,0,0.35)',
        flexShrink: 0,
    },
    logoTitle: {
        color: '#ffffff',
        fontWeight: 700,
        fontSize: '1.1rem',
        lineHeight: 1.2,
        margin: 0,
    },
    logoSubtitle: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: '0.78rem',
        margin: 0,
    },

    tagline: {
        color: '#ffffff',
        fontWeight: 800,
        fontSize: 'clamp(1.5rem, 5vw, 2.4rem)',
        lineHeight: 1.2,
        marginBottom: '1.75rem',
        position: 'relative',
        zIndex: 1,
    },

    featureList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.9rem',
        position: 'relative',
        zIndex: 1,
    },
    featureItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.7rem',
        color: 'rgba(255,255,255,0.82)',
        fontSize: '0.93rem',
    },
    featureIconWrap: {
        width: '36px',
        height: '36px',
        borderRadius: '10px',
        background: 'rgba(255,107,0,0.15)',
        border: '1px solid rgba(255,107,0,0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        color: '#ff8c38',
        fontSize: '1rem',
    },

    panelFooter: {
        marginTop: '1.5rem',
        color: 'rgba(255,255,255,0.28)',
        fontSize: '0.72rem',
        fontStyle: 'italic',
        position: 'relative',
        zIndex: 1,
    },
    rightPanel: {
        background: '#f4f6fb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2.5rem 1.25rem',
        flex: 1,
    },

    card: {
        background: '#ffffff',
        borderRadius: '20px',
        padding: '2.25rem 2rem',
        width: '100%',
        maxWidth: '440px',
        boxShadow: '0 8px 40px rgba(15,22,40,0.10)',
    },

    cardTitle: {
        fontSize: '1.9rem',
        fontWeight: 800,
        color: '#0f1628',
        marginBottom: '0.25rem',
    },
    cardSubtitle: {
        color: '#8892a4',
        fontSize: '0.88rem',
        marginBottom: '1.75rem',
    },

    label: {
        display: 'block',
        fontSize: '0.72rem',
        fontWeight: 700,
        letterSpacing: '0.08em',
        color: '#6b7a90',
        marginBottom: '0.4rem',
        textTransform: 'uppercase',
    },

    inputWrap: {
        position: 'relative',
        marginBottom: '1.1rem',
    },
    inputIcon: {
        position: 'absolute',
        left: '13px',
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#adb5c6',
        fontSize: '1rem',
        pointerEvents: 'none',
    },
    input: {
        width: '100%',
        padding: '0.7rem 0.85rem 0.7rem 2.5rem',
        border: '1.5px solid #e2e8f0',
        borderRadius: '10px',
        fontSize: '0.93rem',
        color: '#0f1628',
        background: '#f8fafc',
        outline: 'none',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        boxSizing: 'border-box',
    },
    inputFocus: {
        borderColor: '#ff6b00',
        boxShadow: '0 0 0 3px rgba(255,107,0,0.12)',
        background: '#fff',
    },
    eyeBtn: {
        position: 'absolute',
        right: '12px',
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: '#adb5c6',
        padding: '0',
        fontSize: '1rem',
        lineHeight: 1,
    },

    rowOptions: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1.5rem',
    },
    checkLabel: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.45rem',
        color: '#6b7a90',
        fontSize: '0.85rem',
        cursor: 'pointer',
    },
    checkbox: {
        accentColor: '#ff6b00',
        width: '15px',
        height: '15px',
        cursor: 'pointer',
    },
    forgotLink: {
        color: '#ff6b00',
        fontSize: '0.85rem',
        fontWeight: 600,
        textDecoration: 'none',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
    },

    btnLogin: {
        width: '100%',
        padding: '0.8rem',
        background: 'linear-gradient(135deg, #ff6b00, #ff8c38)',
        color: '#ffffff',
        fontWeight: 700,
        fontSize: '1rem',
        border: 'none',
        borderRadius: '12px',
        cursor: 'pointer',
        letterSpacing: '0.03em',
        boxShadow: '0 4px 18px rgba(255,107,0,0.35)',
        transition: 'opacity 0.2s, transform 0.15s',
    },

    versionText: {
        textAlign: 'center',
        marginTop: '1.25rem',
        color: '#b0bac8',
        fontSize: '0.72rem',
    },
};

function Login({ onLogin }) {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [mostrarPass, setMostrarPass] = useState(false);
    const [recordarme, setRecordarme] = useState(false);
    const [focusUser, setFocusUser] = useState(false);
    const [focusPass, setFocusPass] = useState(false);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!usuario.trim() || !password.trim()) {
            setError('Por favor, completa todos los campos.');
            return;
        }

        setCargando(true);

        setTimeout(() => {
            setCargando(false);
            if (onLogin) onLogin();
        }, 1200);
    };

    return (
        <div style={styles.wrapper}>

            {}
            <div className="row g-0" style={{ minHeight: '100vh' }}>

                <div
                    className="col-12 col-md-6 col-lg-5"
                    style={styles.leftPanel}
                >
                    <div style={styles.circle1} />
                    <div style={styles.circle2} />

                    <div style={styles.logoBox}>
                        <div style={styles.logoIcon}>
                            <i
                                className="bi bi-gear-fill"
                                style={{ color: '#fff', fontSize: '1.5rem' }}
                            />
                        </div>
                        <div>
                            <p style={styles.logoTitle}>Taller Grupo 13</p>
                            <p style={styles.logoSubtitle}>Sistema de gestión</p>
                        </div>
                    </div>
                    <p
                        className="d-none d-sm-block"
                        style={styles.tagline}
                    >
                        Gestiona tu taller desde un solo lugar.
                    </p>
                    <ul
                        className="d-none d-sm-flex"
                        style={styles.featureList}
                    >
                        <li style={styles.featureItem}>
                            <span style={styles.featureIconWrap}>
                                <i className="bi bi-people-fill" />
                            </span>
                            Gestión de clientes
                        </li>
                        <li style={styles.featureItem}>
                            <span style={styles.featureIconWrap}>
                                <i className="bi bi-car-front-fill" />
                            </span>
                            Registro de vehículos
                        </li>
                        <li style={styles.featureItem}>
                            <span style={styles.featureIconWrap}>
                                <i className="bi bi-file-earmark-text-fill" />
                            </span>
                            Órdenes de servicio
                        </li>
                    </ul>

                    <p
                        className="d-none d-sm-block"
                        style={styles.panelFooter}
                    >
                        Pantalla de Inicio de Sesión
                    </p>
                </div>

                <div
                    className="col-12 col-md-6 col-lg-7"
                    style={styles.rightPanel}
                >
                    <div style={styles.card}>

                        <h1 style={styles.cardTitle}>Bienvenido</h1>
                        <p style={styles.cardSubtitle}>
                            Ingresa tus datos para acceder al sistema
                        </p>

                        {error && (
                            <div
                                className="alert alert-danger py-2 px-3 mb-3"
                                style={{ fontSize: '0.85rem', borderRadius: '10px' }}
                            >
                                <i className="bi bi-exclamation-circle me-2" />
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} noValidate>

                            <div>
                                <label style={styles.label}>Usuario</label>
                                <div style={styles.inputWrap}>
                                    <i
                                        className="bi bi-person-fill"
                                        style={styles.inputIcon}
                                    />
                                    <input
                                        type="text"
                                        placeholder="nombre.usuario"
                                        value={usuario}
                                        onChange={(e) => setUsuario(e.target.value)}
                                        onFocus={() => setFocusUser(true)}
                                        onBlur={() => setFocusUser(false)}
                                        style={{
                                            ...styles.input,
                                            ...(focusUser ? styles.inputFocus : {}),
                                        }}
                                        autoComplete="username"
                                    />
                                </div>
                            </div>
                            <div>
                                <label style={styles.label}>Contraseña</label>
                                <div style={styles.inputWrap}>
                                    <i
                                        className="bi bi-lock-fill"
                                        style={styles.inputIcon}
                                    />
                                    <input
                                        type={mostrarPass ? 'text' : 'password'}
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        onFocus={() => setFocusPass(true)}
                                        onBlur={() => setFocusPass(false)}
                                        style={{
                                            ...styles.input,
                                            paddingRight: '2.5rem',
                                            ...(focusPass ? styles.inputFocus : {}),
                                        }}
                                        autoComplete="current-password"
                                    />
                                    <button
                                        type="button"
                                        style={styles.eyeBtn}
                                        onClick={() => setMostrarPass(!mostrarPass)}
                                        tabIndex={-1}
                                    >
                                        <i
                                            className={
                                                mostrarPass
                                                    ? 'bi bi-eye-slash-fill'
                                                    : 'bi bi-eye-fill'
                                            }
                                        />
                                    </button>
                                </div>
                            </div>
                            <div style={styles.rowOptions}>
                                <label style={styles.checkLabel}>
                                    <input
                                        type="checkbox"
                                        style={styles.checkbox}
                                        checked={recordarme}
                                        onChange={(e) =>
                                            setRecordarme(e.target.checked)
                                        }
                                    />
                                    Recordarme
                                </label>
                                <button type="button" style={styles.forgotLink}>
                                    ¿Olvidaste?
                                </button>
                            </div>
                            <button
                                type="submit"
                                style={styles.btnLogin}
                                disabled={cargando}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.opacity = '0.88')
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.opacity = '1')
                                }
                            >
                                {cargando ? (
                                    <>
                                        <span
                                            className="spinner-border spinner-border-sm me-2"
                                            role="status"
                                        />
                                        Verificando...
                                    </>
                                ) : (
                                    'Iniciar sesión'
                                )}
                            </button>
                        </form>

                        <p style={styles.versionText}>
                            v1.0.0 · Proyecto académico
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Login;