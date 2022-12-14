import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Searchfilter from "./Searchfilter"; 

function App() {
  const [text, setText] = useState("");

  const [movie, setMovie] = useState([]);
  //  const fetchMovie=()=>{
  //   axios.get('https://www.omdbapi.com/?s=kabhi&apikey=7fbf596f').then((response)=>{
  //     console.log(response);
  //     setMovie(response.data.Search)
  //   })}

  const changeText = (event) => {
    // console.log(event)
    setText(event.target.value);
  };
  const getMovie = (e) => {
    e.preventDefault();
  axios.get(`https://www.omdbapi.com/?s=${text}&apikey=7fbf596f`)
      .then((response) => {
        console.log(response);
        setMovie(response.data.Search);
      });
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Movie Application
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              
              
            </ul>
            <form className="d-flex" onSubmit={getMovie}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={text}
                onChange={changeText}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container my-3">
        <div className="row">
          {movie.map((value, index) => {
            return (
              <div className="col-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={value.Poster} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{value.Year}</h5>
                    <h3 className="card-title">{value.Title}</h3>
                  </div>
                </div>
              </div>
              
            );
          })}
        </div>
      </div>
      
      <Searchfilter/>
    </>
  );
}

export default App;
