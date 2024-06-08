import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function View() {
  let params = useParams();

  let [student, setStudent] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/form/" + params.id)
      .then((res) => res.json())
      .then((view) => {
        setStudent(view);
      });
  }, []);

  return (
    <div className="pt-10">
      {student && (
        <div className="mx-auto shadow-xl  w-[500px] p-4 bg-blue-200">
          <div className="font-bold text-xl text-blue-500 mb-4 border-b-2 p-3">
            Student Details
          </div>
          <h1>Name - {student.name}</h1>
          <p>Email - {student.email}</p>
          <p>Batch - {student.batch}</p>
          <button className="px-3 py-1 rounded-md bg-slate-400 text-white hover:bg-slate-500 mt-4">
            <Link to="/">Back</Link>
          </button>
        </div>
      )}
    </div>
  );
}
