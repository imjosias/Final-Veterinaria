import React from "react";
import deleteAppointment from "../services/deleteAppointment";
import { Link } from "react-router-dom";

const CardsAppointment = ({ appointment }) => {
  const { id } = appointment;

  const handleClick = (e) => {
    e.preventDefault();
    deleteAppointment(id);
  };

  return (
    <div className="w-full max-w-sm p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-4 text-xl font-medium text-white text-center">
        Cita #{appointment.id}
      </h5>

      <div className="text-center text-white mb-4 ">
        <h2 className="text-lg">Informacion del Cliente:</h2>
      </div>
      <div className="flex items-baseline justify-between text-gray-900 dark:text-white mb-8">
        <p className="text-lg font-semibold">{appointment.customer}</p>
        <p className="text-lg font-semibold">
          <span className="text-lg font-semibold text-orange-500">Dui # </span>
          {appointment.dui}
        </p>
      </div>
      <div className="text-center text-white mb-4 ">
        <h2 className="text-lg">Informacion del Paciente:</h2>
      </div>
      <div className="flex items-baseline justify-between text-gray-900 dark:text-white mb-8">
        <p className="text-lg font-semibold">{appointment.pet}</p>
        <p className="text-lg font-semibold">
          <span className="text-lg font-semibold text-orange-500">
            Specie:{" "}
          </span>
          {appointment.species}
        </p>
      </div>
      <div className="text-center text-white mb-4 ">
        <h2 className="text-lg">Informacion de la Cita:</h2>
      </div>
      <div className="text-center text-white my-2">
        <p className="text-lg font-semibold">
          <span className="text-lg font-semibold text-orange-500">Fecha: </span>
          {appointment.date}
        </p>
        <p className="text-lg font-semibold">
          <span className="text-lg font-semibold text-orange-500">
            Sucursal:{" "}
          </span>
          {appointment.branch}
        </p>
        <p className="text-lg font-semibold">
          <span className="text-lg font-semibold text-orange-500">
            Servicio:{" "}
          </span>
          {appointment.service}
        </p>
      </div>
      <div className="mt-10">
        <button
          type="button"
          className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          onClick={handleClick}
        >
          Eliminar Cita
        </button>
        <button className="mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">
          <Link to={`/update/${id}`}>Actualizar Cita</Link>
        </button>
      </div>
    </div>
  );
};

export default CardsAppointment;
