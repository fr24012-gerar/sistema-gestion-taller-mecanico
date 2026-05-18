import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Vehicles from "./pages/Vehicles";
import Clientes from "./pages/Clientes";
import Login from "./pages/Login";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                {/* LOGIN */}
                <Route
                    path="/login"
                    element={<Login />}
                />

                {/* DASHBOARD */}
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                {/* CLIENTES */}
                <Route
                    path="/clientes"
                    element={
                        <ProtectedRoute>
                            <Clientes />
                        </ProtectedRoute>
                    }
                />

                {/* VEHICULOS */}
                <Route
                    path="/vehiculos"
                    element={
                        <ProtectedRoute>
                            <Vehicles />
                        </ProtectedRoute>
                    }
                />

                {/* DEFAULT */}
                <Route
                    path="*"
                    element={<Navigate to="/login" />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;