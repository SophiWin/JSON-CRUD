import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Form() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [batch, setBatch] = useState(null);

  let navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    // console.log(id);
    fetch("http://localhost:3000/form/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setName(data.name);
        setEmail(data.email);
        setBatch(data.batch);
      });
  }, []);

  const update = (e) => {
    e.preventDefault();
    const updatedcollection = { name, email, batch };
    fetch("http://localhost:3000/form/" + id, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedcollection),
    }).then((res) => {
      navigate("/");
    });
  };

  return (
    <div>
      <div className="  w-[400px] pt-20 mx-auto">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={update}
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
              Update Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
