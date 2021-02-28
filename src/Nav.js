import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class Nav extends Component {
  render() {
    const dogs = this.props.dogs.map((dog) => {
      return (
        <i className="nav-item" key={dog.name}>
          <NavLink
            exact
            to={`/dogs/${dog.name}`}
            className="nav-link active"
            aria-current="page"
          >
            {dog.name}
          </NavLink>
        </i>
      );
    });
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Dog Shelter
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink exact to="/dogs" className="nav-link">
                  Home
                </NavLink>
              </li>
              {dogs}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
