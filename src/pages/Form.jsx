import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Form() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [batch, setBatch] = useState(null);

  let navigate = useNavigate();
  let { id } = useParams();

  const add = (e) => {
    e.preventDefault();
    const collection = { name, email, batch };
    fetch("http://localhost:3000/form", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(collection),
    }).then((res) => {
      navigate("/");
    });

    setName("");
    setEmail("");
    setBatch("");
  };

  return (
    <div>
      <div className="  w-[400px] pt-20 mx-auto">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={add}
        >
          <p className="text-center text-blue-600 mb-8 font-bold text-xl">
            Student Record Form
          </p>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Student Name
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Student Name"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              required
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="batch"
            >
              Batch Number
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="batch"
              type="number"
              value={batch}
              onChange={(e) => {
                setBatch(e.target.value);
              }}
              placeholder="Batch Number"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
