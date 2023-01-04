import React, { useState, useEffect } from "react";
import axios from "axios";

import { useParams,useNavigate } from "react-router-dom";
import putPet from "../services/updatePet";

const http = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: "include",
});

const UpdatePet = () => {
  const { id } = useParams();

  const [names, putNames] = useState("");
  const [species, putSpecies] = useState("");
  const [ages, putAges] = useState(0);
  const [weigths, putWeigths] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    putPet({id,names,species,ages,weigths});
    navigate("/showPets");
  }

  return (
    <div className="container-lg mx-auto px-4 w-3/4 max-w-md my-24">
      <div className=" bg-slate-300 rounded-full w-24 mx-auto my-2">
        <p className="text-center text-2xl text-white font-semibold">Paso 2</p>
      </div>
      <div className="text-center">
        <h2 className="text-3xl text-white font-semibold">Actualizar Datos</h2>
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
          onChange={(e) => putNames(e.target.value)}
          type="text"
        />
        <label className="block text-white text-sm font-bold mb-2">
          Especie:{" "}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={species}
          onChange={(e) => putSpecies(e.target.value)}
          type="text"
        />
        <label className="block text-white text-sm font-bold mb-2">
          Edad en meses:{" "}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={ages}
          onChange={(e) => putAges(e.target.value)}
          type="number"
        />
        <label className="block text-white text-sm font-bold mb-2">
          Peso en lb:{" "}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={weigths}
          onChange={(e) => putWeigths(e.target.value)}
          type="number"
        />
        <div className="flex items-center justify-between ">
          <button
            className="items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePet;
