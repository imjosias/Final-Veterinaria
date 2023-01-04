import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardsAppointments from "../components/CardsAppointment";
import reload from "../images/reload.png";
const ENDPOINT = "http://localhost:8000/api/";

const ShowAppointments = () => {
  const [id, setId] = useState(0);
  const [appointmentsDetails, setAppointmentsDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const getUser = async () => {
    try {
      const response = await fetch(`${ENDPOINT}user`, {
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const content = await response.json();

      setId(content.id);
    } catch (error) {
      console.log(error);
    }
  };

  const getAppointment = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${ENDPOINT}appointments/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const content = await response.json();
      setLoading(false);
      setAppointmentsDetails(content);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (id !== 0) {
      getAppointment();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const handleRefresh = () => {
    window.location.reload();
  };

  

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="my-14">
        <h2 className="text-white text-4xl text-center ">Mis Citas</h2>
        <button className="ml-4 " onClick={handleRefresh}>
          <img src={reload} alt="refresh" className=" text-white" />
        </button>
        <br></br>
        <button className="mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center text-center">
          <Link to="/createAppointments">Nueva Cita</Link>
        </button>
      </div>
      <div className="grid grid-cols-4 grid-rows-4 gap-8 text-white">
        {loading ? (
          <div className="mx-auto">
            <h2 className="text-white text-2xl">
              cargando citas...
            </h2>
          </div>
        ) : appointmentsDetails.length === 0 ? (
          <div className="bg-blue-600 rounded-sm px-4">
            <h2 className="text-white text-2xl">
              Actualmente no hay citas agendadas...
            </h2>
          </div>
        ) : (
          appointmentsDetails.map((appointment) => (
            <CardsAppointments appointment={appointment} key={appointment.id} />
          ))
        )}
      </div>
      <div>
        <button className="text-center">

        </button>
      </div>
    </div>
  );

  /* 
     
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          Standard plan
        </h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-tight">49</span>
          <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            /month
          </span>
        </div>

        <button
          type="button"
          className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        >
          Choose plan
        </button>
      </div>
      
      <div className="w-full max-w-sm p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          Standard plan
        </h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-tight">49</span>
          <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            /month
          </span>
        </div>

        <button
          type="button"
          className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        >
          Choose plan
        </button>
      </div>
      <div className="w-full max-w-sm p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          Standard plan
        </h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-tight">49</span>
          <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            /month
          </span>
        </div>

        <button
          type="button"
          className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        >
          Choose plan
        </button>
      </div>
      <div className="w-full max-w-sm p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          Standard plan
        </h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-tight">49</span>
          <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            /month
          </span>
        </div>

        <button
          type="button"
          className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        >
          Choose plan
        </button>
      </div>
     */
  /* {appointmentsDetails.map((item) => (
        <div key={item.id}>
          <h1>id cita: # {item.id}</h1>
          <p>
            Cliente: {item.name} {item.lastname}
          </p>

          <p>DUI: {item.dui}</p>
          <p>fecha de cita: {item.date_appointment}</p>
        </div>
      ))} */
};

export default ShowAppointments;
