import logo from "../assets/logo.png";
import React, { useEffect, useState } from "react";
import Header from "./header";
import { useNavigate } from "react-router-dom";
const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization:
      "Bearer OzxRpwa9ix5GPoJtI6IA9zS7NVYuPJgue2wBi4mU4qhHNGVj7jzAdAq8X85PNifP",
  },
};

function Home() {
 
  const navigate = useNavigate();
  const [searchIcon, setSearchIcon] = useState("");


   const searchClick = () =>{

    navigate(`searchPage/${searchIcon}`)
   }

  return (
    <div>
      <Header />
      <div className="vh-100 d-flex justify-content-center align-items-center text-center">
        <div>
          <div>
            <img src={logo} alt="logo" />
            <div className="input-group input-group-lg bg-light">
              <input
                onChange={(e) => setSearchIcon(e.target.value)}
                type="text"
                className="form-control px-5 bg-light"
                placeholder="Search for icons"
              />
           
              <button
              onClick={searchClick}
                className="btn btn-lg btn-outline-light text-dark"
                type="button"
                id="button-addon2"
              >
                {" "}
                <i className="bi bi-search"></i>{" "}
              </button>
            </div>
            <div className="m-3">
              <p className="text-secondary">
                Popular searches: Instagram, facebook, Arrow, Phone
              </p>
              <h5>Search through 5,749,071 icons and illustrations</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
