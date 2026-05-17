import { useState } from 'react'
import Vehicles from './pages/Vehicles'
import Login from './pages/Login'

function App() {

    const [autenticado, setAutenticado] = useState(false)
 
    if (!autenticado) {
        return <Login onLogin={() => setAutenticado(true)} />}

    return (

        <div>

            <div>

                <Vehicles />

            </div>

        </div>

    )

}

export default App