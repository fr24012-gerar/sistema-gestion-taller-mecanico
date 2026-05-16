    import { useState, useEffect } from 'react'

    function VehicleForm({closeForm,editVehicle, onSave}){

        const [marca, setMarca] = useState('')
        const [modelo, setModelo] = useState('')
        const [placa, setPlaca] = useState('')
        const [clienteId, setClienteId] = useState('')

        useEffect(() => {
            if(editVehicle){
                setMarca(editVehicle.marca)
                setModelo(editVehicle.modelo)
                setPlaca(editVehicle.placa)
                setClienteId(editVehicle.clienteId)
            }
        },[editVehicle])

        
        
        const handleSubmit = (e) => {

        e.preventDefault()

        const vehicleData = {

            marca,
            modelo,
            placa,
            clienteId

        }

        onSave(vehicleData)

    }
        return(
            <div className="card shadow-sm p-4 mb-4" >
                <h3 className="mt-4">
                {
                    editVehicle
                        ? 'Editar Vehículo'
                        : 'Agregar Vehículo'
    }
                </h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Marca</label>
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Ingrese la marca"
                            value={marca}
                            onChange={(e) => setMarca(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Modelo</label>
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Ingrese el modelo"
                            value={modelo}
                            onChange={(e) => setModelo(e.target.value)}
                            />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Placa</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ingrese la placa"
                            value={placa}
                            onChange={(e) => setPlaca(e.target.value)}
                            />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Cliente ID</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Ingrese el id del cliente"
                            value={clienteId}
                            onChange={(e) => setClienteId(Number(e.target.value))}
                            disabled={editVehicle !== null}
                            />
                    </div>
                    <button className="btn btn-primary">
                        {
                            editVehicle 
                            ?'Editar Vehiculo'
                            : 'Agregar Vehiculo'
                        }
                    </button>
                    <button  
                        type="button" 
                        className="btn btn-secondary  ms-3"
                        onClick={closeForm}>
                        Cancelar
                    </button>
                </form>
            </div>
        )
    }
    export default VehicleForm