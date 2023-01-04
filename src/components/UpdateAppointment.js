import React, { useState, useEffect } from "react";
import axios from "axios";

import { useParams,useNavigate } from "react-router-dom";
import putAppointment from "../services/updateAppointment";

const http = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: "include",
});

const UpdateAppointment = () => {
  const { id } = useParams();

  const [date, setDate] = useState();
  const [branch, setBranch] = useState([]);
  const [service, setService] = useState([]);
  const [customer, setCustomers] = useState([]);
  const [idPet, setIdPet] = useState();
  const [idBranches, setIdBranches] = useState();
  const [idServices, setIdServices] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    putAppointment({id,date,idBranches,idPet,idServices,customer});
    navigate("/showAppointment");
  }


  const customers = async () => {
    try {
      const response = await http.get("http://localhost:8000/api/user");
      setCustomers(response.data.id);
    } catch (err) {
      console.log(err);
    }
  };
  const branches = async () => {
    try {
      const response = await http.get("http://localhost:8000/api/branches");
      setBranch(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const services = async () => {
    try {
      const response = await http.get("http://localhost:8000/api/services");
      setService(response.data);
    } catch (err) {
      console.log(err);
    }
  };

 

  const capturePet = (e) => {
    setIdPet(e.target.value);
  };

  const captureBranches = (e) => {
    setIdBranches(e.target.value);
  };
  const captureServices = (e) => {
    setIdServices(e.target.value);
  };

  useEffect(() => {
    branches();
  }, []);

  useEffect(() => {
    customers();
  }, []);

  useEffect(() => {
    services();
  }, []);
 
  return (
    <div className="container-lg mx-auto px-4 w-3/4 max-w-md my-12">
      <div className=" bg-slate-300 rounded-full w-24 mx-auto my-12">
        <p className="text-center text-2xl text-white font-semibold">Paso 2</p>
      </div>
      <div className="text-center bg-slate-400 rounded-sm h-12">
        <h2 className="text-3xl text-white font-semibold">Update Appointment</h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-400 shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-8 w-full mx-center "
      >
        <div className="mb-2">
          <label className="block text-white text-sm font-bold mb-2">
            ID usuario
          </label>
          <input
            value={customer}
            placeholder="ingrese su id de usuario"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></input>
        </div>
        <div className="mb-2">
          <label className="block text-white text-sm font-bold mb-2">
            Fecha a Agendar Cita:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-white text-sm font-bold mb-2">
            Mascota Cita:{" "}
          </label>
          <input
            value={idPet}
            placeholder="ingrese el id de su mascota"
            onChange={capturePet}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
         
        </div>
        <div className="mb-2">
          <label className="block text-white text-sm font-bold mb-2">
            Sucursal:
          </label>
          <select
            onChange={captureBranches}
            className="bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected="selected" value={1}>
              ninguna
            </option>
            {branch.map((branches) => (
              <option key={branches.id} value={branches.id}>
                {branches.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-2">
          <label className="block text-white text-sm font-bold mb-2">
            Tipo de servicio:
          </label>
          <select
            onChange={captureServices}
            className="bg-gray-50 border border-gray-300 text-dark text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-500 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected="selected" value={1}>
              ninguno
            </option>
            {service.map((services) => (
              <option key={services.id} value={services.id}>
                {services.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-between">
          <button
            className="items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Guardar
          </button>
        
            <button className="items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline">
              <a href="/showAppointment">Mostrar citas</a>
            </button>
          
        </div>
      </form>
    </div>
  );
};

export default UpdateAppointment;
