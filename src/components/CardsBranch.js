import React from "react";

const CardsBranch = ({ branch }) => {

    return (
        <div className="w-full max-w-sm p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-4 text-xl font-medium text-white text-center">
        Sucursal {branch.name}
      </h5>

      
      <div className="text-center text-white mb-4 ">
        <p className="text-lg font-semibold">
          <span className="text-lg font-semibold text-orange-500">id: </span>
          {branch.id}
        </p>
      </div>
      <div className="text-center text-white mb-4 ">
        <h2 className="text-lg">Detalles</h2>
      </div>
      <div className="text-center text-white my-2">
        <p className="text-lg font-semibold">{branch.branch}</p>
        <p className="text-lg font-semibold">
          <span className="text-lg font-semibold text-orange-500">
            Direccion:{" "}
          </span>
          {branch.address}
        </p>
      </div>
      <div className="text-center text-white my-2">
        <p className="text-lg font-semibold">
          <span className="text-lg font-semibold text-orange-500">Telefono: </span>
          {branch.telephone}
        </p>
        <p className="text-lg font-semibold">
          <span className="text-lg font-semibold text-orange-500">
            Email:{" "}
          </span>
          {branch.email}
        </p>
      </div>
    </div>
    );
};

export default CardsBranch;