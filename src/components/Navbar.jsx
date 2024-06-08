import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <>
      <nav className="flex justify-around bg-slate-500 text-yellow-100 p-5 text-xl cursor-pointer ">
        <a href="" className="font-serif font-bold text-2xl text-yellow-200">
          Assignmenty
        </a>
        <ul className="flex gap-10 ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/form">Form</NavLink>
          </li>
          <li>
            <NavLink to="/countdown">CountDown</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
