import React from "react";
import { NavLink } from "react-router-dom";
import Error404 from "../../Assets/Error404.svg";
export const PageNotFound = () => {
  return (
    <div className="text-center margin-top-1">
      <img src={Error404} alt="errorPage" height={250} width={250} />
      <p className="margin-top-1 font-2">
        click Here to go 👉🏻 <NavLink to="/productlisting">Home</NavLink>
      </p>
    </div>
  );
};
