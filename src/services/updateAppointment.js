import Swal from "sweetalert2";
import axios from "axios";

const http = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: "include",
});
export default function putAppointment({
  id,
  date,
  idBranches,
  idPet,
  idServices,
  customers,
}) {
   try {
     http.put(`http://localhost:8000/api/appointments/${id}`, {
      date_appointment: date,
      branch_id: idBranches,
      pet_id: idPet,
      service_id: idServices,
      customer_id: customers,
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
