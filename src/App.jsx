import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import { AuthContext } from "./AuthContext";
import RequireAuth from "./components/RequireAuth";
import AppNavbar from "./components/AppNavbar";

export default function App() {
  // Use local storage to persist the token
  const [token, setToken] = useLocalStorage("token", null);
  return (
    // Provide the AuthContext to the entire app
    <AuthContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <AppNavbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
            path="/dashboard" />
          <Route element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
            path="/profile" />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
