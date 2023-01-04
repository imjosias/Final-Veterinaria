import React from "react";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";

const Navigation = () => {
  /* const isLogged = false; */

  const { isLogged, logout } = useUser();

  const handleClick = async (e) => {
    logout();
  };

  return (
    <div>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex space-x-4">
              <ul className="inline mx-4 text-white">
              <li className="inline mx-2">
                  <Link to="/home">Inicio</Link>
                </li>
                <li className="inline mx-2">
                  <Link to="/showBranches">Sucursales</Link>
                </li>
                {isLogged ? (
                  <li className="inline mx-2">
                    <Link to="/showPets">Mis Mascotas</Link>
                  </li>
                ) : null}
                {isLogged ? (
                  <li className="inline mx-2">
                    <Link to="/showAppointment">Mis Citas</Link>
                  </li>
                ) : null}
                {isLogged ? (
                  <li className="inline mx-2">
                    <Link onClick={handleClick} to="/home">
                      Cerrar Sesión
                    </Link>
                  </li>
                ) : (
                  <li className="inline mx-2">
                    <Link to="/login">Iniciar Sesión</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
