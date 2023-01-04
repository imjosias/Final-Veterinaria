import React from 'react';
import deletePets from "../services/deletePet";
import { Link } from "react-router-dom";

const CardsPet = ({ pet }) => {
    const { id } = pet;

    const handleClick = (e) => {
        e.preventDefault();
        deletePets(id);
    };

    return (
        <div className="w-full max-w-sm p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-4 text-xl font-medium text-white text-center">
        Mascota: {pet.name}
      </h5>

      
      <div className="text-center text-white mb-4 ">
        <p className="text-lg font-semibold">{pet.customer}</p>
        <p className="text-lg font-semibold">
          <span className="text-lg font-semibold text-orange-500">id: </span>
          {pet.id}
        </p>
      </div>
      <div className="text-center text-white mb-4 ">
        <h2 className="text-lg">Informacion fisica</h2>
      </div>
      <div className="text-center text-white my-2">
        <p className="text-lg font-semibold">{pet.pet}</p>
        <p className="text-lg font-semibold">
          <span className="text-lg font-semibold text-orange-500">
            Especie:{" "}
          </span>
          {pet.species}
        </p>
      </div>
      <div className="text-center text-white my-2">
        <p className="text-lg font-semibold">
          <span className="text-lg font-semibold text-orange-500">Edad: </span>
          {pet.age}
        </p>
        <p className="text-lg font-semibold">
          <span className="text-lg font-semibold text-orange-500">
            Peso:{" "}
          </span>
          {pet.weight}
        </p>
      </div>
      <div className="mt-10">
        <button
          type="button"
          className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          onClick={handleClick}
        >
          Eliminar Mascota
        </button>
        <button className="mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">
          <Link to={`/pets/${id}`}>Actualizar Datos</Link>
        </button>
      </div>
    </div>
    );
};

export default CardsPet;