import React from "react";
import { Link } from "react-router-dom";
import veterinaria from "../images/veterinaria-main.jpg";
import mascotas from "../images/mascotas-2.png";
import useUser from "../hooks/useUser";

const Home = () => {
  const { isLogged } = useUser();

  return (
    <div
      className="container mx-auto px-4 mt-1 w-3/5"
      style={{ height: "100vh" }}
    >
      <div>
        <div className="mb-5">
          <img
            src={veterinaria}
            className="w-full h-1/5 rounded-md bg-slate-400"
            alt="veterinaria-banner"
          />
        </div>
        <div className="text-center mb-12 bg-cyan-500 rounded-md h-36">
          <h2 className="text-4xl font-bold text-indigo-700 mb-6">
            ¿Quienes somos?
          </h2>
          <p className="text-xl text-white">
            Somos el hospital veterinario que cuidara de mejor manera a tu
            pequeño amigo, ya que cuenta con 12 consultorios básicos, 4
            laboratorio clínico y peluquería.
          </p>
        </div>
        <div className="border-b-2 border-lime-600 mb-6">
          <img
            src={mascotas}
            className="w-full h-1/5"
            alt="veterinaria-banner"
          />
        </div>

        <div className="text-center bg-cyan-500 rounded-md h-52">
          <h2 className="text-4xl font-bold text-indigo-700 mb-6">HORARIOS</h2>
          <p className="text-xl text-white">Solamente atención por Citas</p>
          <p className="text-xl text-white">
            Todos los días, únicamente por citas en nuestra pagina web
          </p>
          <div className=" outline-none bg-sky-600 hover:bg-sky-400 mt-6 w-28 mx-auto py-2 rounded-md font-semibold text-white">
            {isLogged ? (
              <Link to="/createpets">Agendar Cita</Link>
            ) : (
              <Link to="/login">Iniciar sesión</Link>
            )}
          </div>
        </div>
      </div>
      {/*  {users.map((user) => (
        <div key={user.id}>
          <h1>Bienvenido {user.name}</h1>
        </div>
      ))} */}

      {/*  {auth ? (
        <div>
          <Link to="/createpets">Agendar Cita</Link>
          <button type="button">Ver citas</button>

          <button type="button" onClick={handleClick}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">Iniciar sesion</Link>
        </div>
      )}

      {cargando ? (
        <div>Cargando Citas.....</div>
      ) : (
        <ShowAppointments appointmentsDetails={appointmentsDetails} />
      )} */}
    </div>
  );
};

export default Home;
