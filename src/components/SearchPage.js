import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../assets/logo.png";
import "../App.css";
import IconCard from "./IconCard";

function SearchPage() {
  const { iconName } = useParams();
  const [iconResult, setIconResult] = useState();
  const [styles, setStyles] = useState([]);
  const [priceFilter, setPriceFilter] = useState("All");
  const [styleFilter, setStyleFilter] = useState("All");

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization:
        "Bearer OzxRpwa9ix5GPoJtI6IA9zS7NVYuPJgue2wBi4mU4qhHNGVj7jzAdAq8X85PNifP",
    },
  };
  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.iconfinder.com/v4/icons/search?query=${iconName}&count=1000`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return response;
      })
      .then(function (response) {
        setIconResult(response);
      })
      .catch((err) => console.error("Err: ", err.message));
    fetch(
      "https://cors-anywhere.herokuapp.com/https://api.iconfinder.com/v4/styles?count=10",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return response;
      })
      .then(function (response) {
        setStyles(response.styles);
      })

      .catch((err) => console.error("Err: ", err.message));
  }, []);

  return (
    <div>
      {/* Header part  */}
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{
          padding: "15px",
          position: "fixed",

          width: "100%",
        }}
      >
        <a className="navbar-brand" href="#">
          {" "}
          <img src={logo} alt="logo" />{" "}
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form
            className="form-inline my-2 my-lg-0"
            style={{
              flexDirection: "row",
              display: "flex",
              flex: 1,
            }}
          >
            <input
              className="form-control mr-sm-2"
              style={{
                width: "50%",
              }}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn  my-2 my-sm-0" type="submit">
              {" "}
              <i className="bi bi-search"></i>{" "}
            </button>
          </form>
        </div>
      </nav>

      {iconResult ? (
        <div>
          <div className="sidebar" style={{ padding: 10 }}>
            <p>Filters</p>
            {/* prices filter */}
            <div
              className="priceFilter"
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label>
                <input
                  type="radio"
                  value="All"
                  checked={priceFilter == "All" ? true : false}
                  style={{ marginRight: 5, marginBottom: 10 }}
                  onChange={(e) => {
                    setPriceFilter(e.target.value);
                  }}
                />
                All Prices
              </label>
              <label>
                <input
                  type="radio"
                  value="free"
                  checked={priceFilter == "free" ? true : false}
                  style={{ marginRight: 5, marginBottom: 10 }}
                  onChange={(e) => {
                    setPriceFilter(e.target.value);
                  }}
                />
                Free
              </label>

              <label>
                <input
                  type="radio"
                  value="premium"
                  checked={priceFilter == "premium" ? true : false}
                  style={{ marginRight: 5, marginBottom: 10 }}
                  onChange={(e) => {
                    setPriceFilter(e.target.value);
                  }}
                />
                Premium
              </label>
            </div>

            <div
              className="priceFilter"
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 20,
              }}
            >
              <label>
                <input
                  type="radio"
                  value="All"
                  checked={styleFilter == "All" ? true : false}
                  style={{ marginRight: 5, marginBottom: 10 }}
                  onChange={(e) => {
                    setStyleFilter(e.target.value);
                  }}
                />
                All Styles
              </label>

              {styles
                ? styles.map((style, index) => {
                    return (
                      <label>
                        <input
                          type="radio"
                          value={style.identifier}
                          checked={
                            styleFilter == style.identifier ? true : false
                          }
                          style={{ marginRight: 5, marginBottom: 10 }}
                          onChange={(e) => {
                            setStyleFilter(e.target.value);
                          }}
                        />
                        {style.name}
                      </label>
                    );
                  })
                : null}
            </div>
          </div>

          <div className="content">
            <h2>{iconName}</h2>
            <p style={{ fontSize: 12 }}>About {iconResult.total_count}</p>
            <div className="ShowIcons">
              {iconResult.icons.map((icon, index) => {
                if (priceFilter == "All" && styleFilter == "All") {
                  return (
                    <>
                      {/* <div className="IconCard" key={index}>
                 
                    <img
                      src={icon.raster_sizes[1].formats[0].preview_url}
                      style={{ height: 24, width: 24, objectFit: "contain" }}
                    />
                    <div className="IconTags" style={{ display: "flex" }}>
                      {icon.tags.map((tag, index) => {
                        if (index < 3) {
                          return <p>{tag},</p>;
                        }
                      })}
                    </div>
                  
                  
                  
                  </div> */}

                      <IconCard
                        key={index}
                        url={icon.raster_sizes[1].formats[0].preview_url}
                        tags={icon.tags}
                        raster={icon.raster_sizes}
                        premium={icon.is_premium}
                      />
                    </>
                  );
                } else if (priceFilter == "All" && styleFilter != "All") {
                  if (styleFilter == icon.styles[0]?.identifier) {
                    return (
                      <>
                        <IconCard
                          key={index}
                          url={icon.raster_sizes[1].formats[0].preview_url}
                          tags={icon.tags}
                          raster={icon.raster_sizes}
                              premium={icon.is_premium}
                        />
                      </>
                    );
                  }
                } else if (priceFilter != "All" && styleFilter == "All") {
                  if (priceFilter == "free" && icon.is_premium == false) {
                    return (
                      <>
                        <IconCard
                          key={index}
                          url={icon.raster_sizes[1].formats[0].preview_url}
                          tags={icon.tags}
                          raster={icon.raster_sizes}
                              premium={icon.is_premium}
                        />
                      </>
                    );
                  } else if (
                    priceFilter == "premium" &&
                    icon.is_premium == true
                  ) {
                    return (
                      <>
                        <IconCard
                          key={index}
                          url={icon.raster_sizes[1].formats[0].preview_url}
                          tags={icon.tags}
                          raster={icon.raster_sizes}
                              premium={icon.is_premium}
                        />
                      </>
                    );
                  }
                } else if (priceFilter != "All" && styleFilter != "All") {
                  if (
                    priceFilter == "free" &&
                    icon.is_premium == false &&
                    styleFilter == icon.styles[0]?.identifier
                  ) {
                    return (
                      <>
                        <IconCard
                          key={index}
                          url={icon.raster_sizes[1].formats[0].preview_url}
                          tags={icon.tags}
                          raster={icon.raster_sizes}
                              premium={icon.is_premium}
                        />
                      </>
                    );
                  } else if (
                    priceFilter == "premium" &&
                    icon.is_premium == true &&
                    styleFilter == icon.styles[0]?.identifier
                  ) {
                    return (
                      <>
                        <IconCard
                          key={index}
                          url={icon.raster_sizes[1].formats[0].preview_url}
                          tags={icon.tags}
                          raster={icon.raster_sizes}
                          premium = {icon.is_premium}
                        />
                      </>
                    );
                  }
                }
              })}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1
            style={{
              top: "200px",
              position: "absolute",
              left: "100px",
            }}
          >
            Loading ....{" "}
          </h1>{" "}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
