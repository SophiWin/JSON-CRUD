import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  let [url, setUrl] = useState("http://localhost:3000/form");
  let [students, setStudents] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
      });
  }, [url]);

  let handleEditBtn = (id) => {
    console.log(edit);
  };
  let handleDeleteBTn = (id) => {
    // server
    fetch(`http://localhost:3000/form/${id}`, { method: "DELETE" });
    // client
    setStudents((pre) => {
      return pre.filter((student) => {
        return student.id != id;
      });
    });
  };
  let handleViewBtn = (id) => {};
  return (
    <div>
      <div className="pt-20">
        {students && (
          <div className="mx-auto w-2/3">
            <table className="shadow-lg  ">
              <thead>
                <tr>
                  <th className="p-5 bg-blue-700 text-white text-xl ">No.</th>
                  <th className="p-5 bg-blue-700 text-white text-xl ">
                    Student Name
                  </th>
                  <th className="p-5 bg-blue-700 text-white text-xl">
                    Student Email
                  </th>
                  <th className="p-5 bg-blue-700 text-white text-xl">
                    Batch Number
                  </th>
                  <th className="p-5 bg-blue-700 text-white text-xl">
                    Actions
                  </th>
                </tr>
              </thead>

              {students.map((learner, i) => (
                <tbody key={i}>
                  <tr className=" border-b-2 border-blue-500">
                    <td className="p-5 bg-blue-200 text-black ">{i + 1}.</td>

                    <td className="p-5 bg-blue-200 text-black">
                      {learner.name}
                    </td>
                    <td className="p-5 bg-blue-200 text-black">
                      {learner.email}
                    </td>
                    <td className="p-5  bg-blue-200 text-black">
                      Batch - {learner.batch}
                    </td>
                    <td className="p-5 bg-blue-200">
                      <Link
                        to={`/edit/${learner.id}`}
                        className="px-3 py-2 mx-3 hover:bg-slate-600 bg-slate-500 text-white rounded-md"
                      >
                        Edit
                      </Link>

                      <button
                        className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
                        type="button"
                        onClick={() => {
                          handleDeleteBTn(learner.id);
                        }}
                      >
                        Delete
                      </button>
                      <Link
                        to={`/students/${learner.id}`}
                        className="px-3 py-2 mx-3 hover:bg-yellow-600 bg-yellow-500 text-white rounded-md"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
