import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Vehicles from "./pages/Vehicles";
import Clientes from "./pages/Clientes";
//import Login from "./pages/Login";

function App() {

    return (

        /* ================= ROUTER PRINCIPAL ================= */
        <BrowserRouter>

            {/* ---------- RUTAS ---------- */}
            <Routes>

                
                <Route
                    path="/"
                    element={<Clientes />}
                />

                {/* VEHICULOS */}
                <Route
                    path="/vehicles"
                    element={<Vehicles />}
                />

        

            </Routes>
            {/* ---------- FIN RUTAS ---------- */}

        </BrowserRouter>
        /* ================= FIN ROUTER ================= */

    );

}

export default App;