import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const endpoint = "http://localhost:8000/api/register";

const RegisterCustomer = () => {
  const [names, setNames] = useState("");
  const [lastNames, setLastNames] = useState("");
  const [duis, setDuis] = useState("");
  const [birthdays, setBirthdays] = useState("");
  const [phones, setPhones] = useState("");
  const [emails, setEmails] = useState("");
  const [passwords, setPasswords] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

  try {
    await axios.post(endpoint, {
      name: names,
      lastname: lastNames,
      dui: duis,
      birthday: birthdays,
      phone: phones,
      email: emails,
      password: passwords,
    }).catch(error => console.log(error));

    navigate("/login");
  } catch (error) {
    console.log(error)
  }
  };

  return (
    <div className="container-lg mx-auto px-4 w-3/4 max-w-md my-12">
      <div className="text-center">
        <h2 className="text-3xl text-white font-semibold">REGISTRARSE</h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-400 shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-24 w-full mx-center"
      >
        <div className="mb-2">
          <label className="block text-white text-sm font-bold mb-2">
            Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={names}
            onChange={(e) => setNames(e.target.value)}
            type="text"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-white text-sm font-bold mb-2">Last Name: </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={lastNames}
            onChange={(e) => setLastNames(e.target.value)}
            type="text"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-white text-sm font-bold mb-2">Dui: </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={duis}
            onChange={(e) => setDuis(e.target.value)}
            type="text"
            minLength="10"
            maxLength="10"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-white text-sm font-bold mb-2">Birth day: </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={birthdays}
            onChange={(e) => setBirthdays(e.target.value)}
            type="date"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-white text-sm font-bold mb-2">Phone: </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={phones}
            onChange={(e) => setPhones(e.target.value)}
            type="text"
            minLength="8"
            
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-white text-sm font-bold mb-2">Email</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={emails}
            onChange={(e) => setEmails(e.target.value)}
            type="email"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-white text-sm font-bold mb-2">password</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={passwords}
            onChange={(e) => setPasswords(e.target.value)}
            type="password"
            minLength="8"
            
            required
          />
        </div>
        <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-24 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Save
            </button>

            <Link
              to="/login"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 p-8"
            >
              Iniciar Sesión
            </Link>
        </div>    
      </form>
      
    </div>
  );
};

export default RegisterCustomer;
