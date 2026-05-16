    import VehicleTable from "../components/VehicleTable"
    import VehicleForm from "../components/VehicleForm"
    import {useState} from 'react'




    function Vehicles(){
        const [vehicles,setVehicles] = useState([
        {
            id: 1,
            marca: 'Toyota',
            modelo: 'Corolla',
            placa: 'P123-456',
            clienteId: 1
        },
        {
            id: 2,
            marca: 'Honda',
            modelo: 'Civic',
            placa: 'P789-111',
            clienteId: 2
        }
    ])
        const[showForm, setShowForm] = useState(false)
        const[editVehicle, setEditVehicle] = useState(null)
        const [searchPlate, setSearchPlate] = useState('')


        const handleCloseForm = () => {

        setShowForm(false)
        setEditVehicle(null)

        }

        const handleSaveVehicle = (vehicleData) => {
            if(editVehicle){
                const updatedVehicles = vehicles.map((vehicle) =>
                    vehicle.id === editVehicle.id 
                    ?{...vehicle, ...vehicleData}
                    :vehicle
            
            )
            setVehicles(updatedVehicles)
        }else{
            const newVehicle = {
                id: vehicles.length + 1,    
                ...vehicleData

            }
            setVehicles([...vehicles,newVehicle])
        }
        handleCloseForm()
        }

        const handleDeleteVehicle = (id) => {

        const filteredVehicles = vehicles.filter(
            (vehicle) => vehicle.id !== id
        )

        setVehicles(filteredVehicles)

    }



    const filteredVehicles = vehicles.filter((vehicle) => 

    vehicle.placa.toLowerCase().includes(searchPlate.toLowerCase())

    )


        return(
            <div className="container mt-5">

                <div className="d-flex flex-column flex-md-row gap-3 justify-content-between align-items-center mb-4 p-3 bg-white shadow rounded">

                    <h1 className="fs-4 text-primary mb-0">
                    Gestion de vehìculos
                    </h1>
                    <input
                        type="text"
                        className="form-control w-100 w-md-50"
                        placeholder="Buscar por placa..."
                        value={searchPlate}
                        autoComplete="off"
                        autoCorrect="off"
                        spellCheck="false"
                        onChange={(e) => setSearchPlate(e.target.value)}/>
                    
                    <button 
                        className="btn btn-primary ms-3"
                        onClick={() => {
                            setEditVehicle(null)
                            setShowForm(true)

                        }}
                    >
                        Agregar Vehículo
                    </button>
                </div>
                {showForm && <VehicleForm   closeForm={handleCloseForm}
                                            editVehicle={editVehicle}
                                            onSave={handleSaveVehicle}
                                                    />}
                <VehicleTable 
                    vehicles={filteredVehicles}
                    onEdit={(vehicle) => {
                        setEditVehicle(vehicle)
                        setShowForm(true)
                    }}
                    onDelete={handleDeleteVehicle}
                    />
                
            </div>
        )
    }
    export default Vehicles