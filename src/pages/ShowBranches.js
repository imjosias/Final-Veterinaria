import React, { useState, useEffect } from "react";
import CardsBranches from "../components/CardsBranch";

const ENDPOINT = "http://localhost:8000/api/";

const ShowBranches = () => {
    const [id] = useState(0);
    const [branchesDetails, setBranchesDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const getBranch = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${ENDPOINT}branches/`, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const content = await response.json();
            setLoading(false);
            setBranchesDetails(content);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    useEffect(() => {
        getBranch();
    }, []);

    useEffect(() => {
        if (id !== 0) {
            getBranch();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);
    return (
        <div className="container mx-auto px-4 py-4">
          <div className="my-14">
            <h2 className="text-white text-4xl text-center ">Nuestras Sucursales</h2>
          </div>
          <div className="grid grid-cols-4 grid-rows-4 gap-8 text-white">
            {loading ? (
              <div className="mx-auto">
                <h2 className="text-white text-2xl">
                  cargando sucursales
                </h2>
              </div>
            ) : branchesDetails.length === 0 ? (
              <div className="bg-blue-600 rounded-sm px-4">
                <h2 className="text-white text-2xl">
                  SIN SUCURSALES DISPONIBLES
                </h2>
              </div>
            ) : (
              branchesDetails.map((branch) => (
                <CardsBranches branch={branch} key={branch.id} />
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

export default ShowBranches;