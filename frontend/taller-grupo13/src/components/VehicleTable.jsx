function VehicleTable({vehicles, onEdit,onDelete}){

    return(
        <div className="table-responsive">
        <table className="table table-striped table-hover align-middle">

            <thead>
                <tr>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Placa</th>
                <th>Cliente ID</th>
                <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    vehicles.map((vehicle) => (
                        <tr key={vehicle.id}>
                            <td>{vehicle.marca}</td>
                            <td>{vehicle.modelo}</td>
                            <td>{vehicle.placa}</td>
                            <td>{vehicle.clienteId}</td>
                            <td>
                            <button className="btn btn-warning btn-sm px-2 me-md-2"
                                    onClick={() => onEdit(vehicle)}
                                    title="Editar Vehículo"
                                    >
                                <i className="bi bi-pencil-square"></i>
                            </button>
                            <button className="btn btn-danger btn-sm px-2 me-md-2"
                                    onClick={() => onDelete(vehicle.id)}
                                    title="Eliminar Vehículo"
                            >
                                <i className="bi bi-trash3-fill"></i>
                            </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>

        </table>
        </div>
    )
}

export default VehicleTable