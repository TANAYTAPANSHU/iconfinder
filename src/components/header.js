
import React, { useEffect, useState } from "react";


const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer OzxRpwa9ix5GPoJtI6IA9zS7NVYuPJgue2wBi4mU4qhHNGVj7jzAdAq8X85PNifP'
  }
};

function Header() {
  const [styles, setStyles] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/https://api.iconfinder.com/v4/styles?count=10', options)
      .then(response => response.json())
      .then(response => {
        return response;

      }).then(function (response) {
        setStyles(response.styles);
        // console.log(response.categories[0]);
        // console.log(response);
      })

      .catch(err => console.error("Err: ", err.message));

    fetch('https://cors-anywhere.herokuapp.com/https://api.iconfinder.com/v4/categories?count=10', options)
      .then(response => response.json())
      .then(response => {
        return response;

      }).then(function (response) {
        setCategory(response.categories);
        
      })

      .catch(err => console.error("Err: ", err.message));


  },


    [])

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Icon Sets</a>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categories
            </a>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
            {
                category.map((style) => (
                  <li key={style.identifier} className="dropdown-item">{style.name}</li>
                ))
              }
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Styles
            </a>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
              {
                styles.map((style) => (
                  <li key={style.identifier} className="dropdown-item">{style.name}</li>
                ))
              }
            </ul>
          </li>
        </ul>
      </div>
    </nav>

  )
}


export default Header;