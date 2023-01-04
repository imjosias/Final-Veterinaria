import React, { useState, useEffect } from "react";
import CardsPets from "../components/CardsPet";
import reload from "../images/reload.png";
const ENDPOINT = "http://localhost:8000/api/";

const ShowPets = () => {
  const [id, setId] = useState(0);
  const [petsDetails, setPetsDetails] = useState([]);
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

  const getPet = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${ENDPOINT}pets/`, {
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const content = await response.json();
      setLoading(false);
      setPetsDetails(content);
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
      getPet();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const handleRefresh = () => {
    window.location.reload();
  };

  

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="my-14">
        <h2 className="text-white text-4xl text-center ">Mis Mascotas</h2>
        <button className="ml-4 " onClick={handleRefresh}>
          <img src={reload} alt="refresh" className=" text-white" />
        </button>
      </div>
      <div className="grid grid-cols-4 grid-rows-4 gap-8 text-white">
        {loading ? (
          <div className="mx-auto">
            <h2 className="text-white text-2xl">
              cargando mascotas...
            </h2>
          </div>
        ) : petsDetails.length === 0 ? (
          <div className="bg-blue-600 rounded-sm px-4">
            <h2 className="text-white text-2xl">
              Actualmente no hay mascotas...
            </h2>
          </div>
        ) : (
          petsDetails.map((pet) => (
            <CardsPets pet={pet} key={pet.id} />
          ))
        )}
      </div>
      <div>
        <button className="text-center">

        </button>
      </div>
    </div>
  );
};

export default ShowPets;
