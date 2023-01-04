import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const endpoint = "http://localhost:8000/api/pets";
const http = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: "include",
});

const CreatePets = () => {
  const [id, setId] = useState("");
  const [names, setNames] = useState("");
  const [species, setSpecies] = useState("");
  const [ages, setAges] = useState(0);
  const [weigths, setWeigths] = useState(0);
  const [send, setSend] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await http.post(endpoint, {
        name: names,
        species: species,
        age: ages,
        weight: weigths,
      });
      setId(response.data.branch.id);
      setSend(true);
      return Swal.fire({
        title: "Successfully",
        text: "Mascota agregada con exito",
        icon: "success",
      });
    } catch (error) {
      setSend(false);
      return Swal.fire({
        title: "Error!",
        text: "Revise que los campos esten llenos",
        icon: "error",
      });
    }
  };

  return (
    <div className="container-lg mx-auto px-4 w-3/4 max-w-md my-24">
      <div className=" bg-slate-300 rounded-full w-24 mx-auto my-2">
        <p className="text-center text-2xl text-white font-semibold">Paso 1</p>
      </div>
      <div className="text-center">
        <h2 className="text-3xl text-white font-semibold">Registrar Mascota</h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-400 shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-8 w-full mx-center "
      >
        <label className="block text-white text-sm font-bold mb-2">
          Nombre:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={names}
          onChange={(e) => setNames(e.target.value)}
          type="text"
        />
        <label className="block text-white text-sm font-bold mb-2">
          Especie:{" "}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          type="text"
        />
        <label className="block text-white text-sm font-bold mb-2">
          Edad en meses:{" "}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={ages}
          onChange={(e) => setAges(e.target.value)}
          type="number"
        />
        <label className="block text-white text-sm font-bold mb-2">
          Peso en lb:{" "}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={weigths}
          onChange={(e) => setWeigths(e.target.value)}
          type="number"
        />
        <div className="flex items-center justify-between ">
          <button
            className="items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Guardar
          </button>
          {send ? (
            <button className="items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline">
              <a href="/createAppointments">siguiente</a>
            </button>
          ) : (
            <button
              className="items-center bg-slate-500  text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
              disabled
            >
              siguiente
            </button>
          )}
        </div>
      </form>

      {send ? (
        <div className="bg-cyan-600 rounded-md w-full h-32">
          <p className="text-2xl text-amber-400 text-center">
            El id de tu mascota es:
          </p>
          <p className="text-3xl text-white text-semibold text-center">{id}</p>
          <p className="text-lg text-dark text-center">
            Nota: El id de tu mascota deberas pegarlo en tu cita a agendar
           ( copialo )
          </p>
        </div>
      ) : null
      }
    </div>
  );
};

export default CreatePets;
