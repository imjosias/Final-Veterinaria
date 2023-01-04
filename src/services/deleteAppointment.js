import Swal from "sweetalert2";
const ENDPOINT = "http://localhost:8000/api";

export default function deleteAppointment(id) {
  console.log(id);
  return fetch(`${ENDPOINT}/appointments/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then((res) => {
    res.json();
    if (res.ok) {
      return Swal.fire({
        title: "Deleted sucessfully",
        text: "press the refresh button to update the deletion",
        icon: "success",
      });
    }
  });
}
