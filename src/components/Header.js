import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Artworks/logo.png";

const Header = ({ books }) => {
  return (
    <>
      <nav className="navbar navbar-light bg-light d-flex align-items-center">
        <div className="navbar-brand fw-bold fs-40">
          <img
            src={Logo}
            width="50"
            height="50"
            className="d-inline-block"
            alt="Book Scalers Logo"
          />
          Book Scalers
        </div>

        <Link to={"/add-book"}>
          <button type="button" className="btn btn-primary">
            Add New Book
          </button>
        </Link>
      </nav>
    </>
  );
};

export default Header;
