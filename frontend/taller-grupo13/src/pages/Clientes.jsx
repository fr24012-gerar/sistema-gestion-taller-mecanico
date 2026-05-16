import { useEffect, useState } from 'react';
import API from '../services/api';

function Clientes() {

    const [clientes, setClientes] = useState([]);

    const [form, setForm] = useState({
        nombre: '',
        telefono: '',
        correo: ''
    });

    const [editando, setEditando] = useState(null);

    useEffect(() => {
        obtenerClientes();
    }, []);

    const obtenerClientes = async () => {
        try {
            const response = await API.get('/clientes');
            setClientes(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const guardarCliente = async (e) => {
        e.preventDefault();

        try {

            if (editando) {
                await API.put(`/clientes/${editando}`, form);
            } else {
                await API.post('/clientes', form);
            }

            setForm({
                nombre: '',
                telefono: '',
                correo: ''
            });

            setEditando(null);

            obtenerClientes();

        } catch (error) {
            console.log(error);
        }
    };

    const eliminarCliente = async (id) => {

        if (window.confirm('¿Eliminar cliente?')) {

            await API.delete(`/clientes/${id}`);

            obtenerClientes();
        }
    };

    const editarCliente = (cliente) => {

        setForm({
            nombre: cliente.nombre,
            telefono: cliente.telefono,
            correo: cliente.correo
        });

        setEditando(cliente.id);
    };

    return (

        <div className="container mt-5">

            <div className="card shadow p-4">

                <h1 className="text-center mb-4">
                    CRUD Clientes
                </h1>

                <form onSubmit={guardarCliente}>

                    <div className="row">

                        <div className="col-md-4 mb-3">

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                value={form.nombre}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        nombre: e.target.value
                                    })
                                }
                                required
                            />

                        </div>

                        <div className="col-md-4 mb-3">

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Teléfono"
                                value={form.telefono}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        telefono: e.target.value
                                    })
                                }
                                required
                            />

                        </div>

                        <div className="col-md-4 mb-3">

                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                value={form.correo}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        correo: e.target.value
                                    })
                                }
                                required
                            />

                        </div>

                    </div>

                    <div className="text-center">

                        <button
                            type="submit"
                            className={`btn ${
                                editando
                                    ? 'btn-warning'
                                    : 'btn-primary'
                            }`}
                        >
                            {editando
                                ? 'Actualizar'
                                : 'Guardar'}
                        </button>

                    </div>

                </form>

            </div>

            <div className="card shadow mt-4 p-4">

                <table className="table table-striped table-hover">

                    <thead className="table-dark">

                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Teléfono</th>
                            <th>Correo</th>
                            <th>Acciones</th>
                        </tr>

                    </thead>

                    <tbody>

                        {clientes.map(cliente => (

                            <tr key={cliente.id}>

                                <td>{cliente.id}</td>
                                <td>{cliente.nombre}</td>
                                <td>{cliente.telefono}</td>
                                <td>{cliente.correo}</td>

                                <td>

                                    <button
                                        className="btn btn-warning btn-sm me-2"
                                        onClick={() =>
                                            editarCliente(cliente)
                                        }
                                    >
                                        Editar
                                    </button>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() =>
                                            eliminarCliente(cliente.id)
                                        }
                                    >
                                        Eliminar
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default Clientes;