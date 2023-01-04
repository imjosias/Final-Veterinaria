import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterCustomer from "./pages/RegisterCustomer";
import Login from "./pages/Login";
import CreatePets from "./pages/CreatePets";
import Home from "./pages/Home";
import CreateAppointments from "./pages/CreateAppointments";
import ShowAppointments from "./pages/ShowAppointments";
import Navigation from "./components/Navigation";
import { UserContext } from "./context/UserContext";
import UpdateAppointment from "./components/UpdateAppointment";
import ShowPets from "./pages/ShowPets"
import UpdatePets from "./components/UpdatePet"
import ShowBranches from "./pages/ShowBranches";

function App() {
  return (
    <UserContext>
      <div className="app">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<RegisterCustomer />} />
            <Route path="/home" element={<Home />} />
            <Route path="/createpets" element={<CreatePets />} />
            <Route path="/createappointments" element={<CreateAppointments />} />
            <Route path="/login" element={<Login />} />
            <Route path="/showAppointment" element={<ShowAppointments />} />
            <Route path="/update/:id" element={<UpdateAppointment />} />
            <Route path="/showPets" element={<ShowPets />} />
            <Route path="/pets/:pet" element={<UpdatePets />} />
            <Route path="/showBranches" element={<ShowBranches />} />

          </Routes>
        </BrowserRouter>
      </div>
    </UserContext>
  );
}

export default App;
