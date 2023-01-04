import Swal from "sweetalert2";
import axios from "axios";

const http = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: "include",
});
export default function putPet({
  id,
  pet,
  petName,
  petSpecies,
  petAge,
  petWeight,
}) {
   try {
     http.put(`http://localhost:8000/api/pets/${id}`, {
      id: id,
      pet_name: petName,
      pet_species: petSpecies,
      pet_age: petAge,
      pet_weight: petWeight,
    }).then(function (response) {
      if (response.status === 200) {
        return Swal.fire({
          title: "Success",
          text: "Actualizado con exito",
          icon: "success",
        });
      }
    })
    .catch(function (error){
      console.log(error);
      if(error.response.status === 500){
        return Swal.fire({
           title: "ERROR!",
           text: "Revise los campos esten llenos o intentelo mas tarde",
           icon: "error",
         });
      }
     
    });
    
    
  }catch (error) {
   console.log(error);
  }
}
