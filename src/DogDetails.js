import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DogDetails.css";
export default class DogDetails extends Component {
  render() {
    let { dog } = this.props;
    return (
      <div className="DogDetails row justify-content-center mt-5">
        <div className="col-11 col-lg-5">
          <div className="DogDetails-card card">
            <img className="card-image-top" src={dog.src} alt={dog.name} />
            <div className="card-body">
              <h2 className="card-title">{dog.name}</h2>
              <h3 className="card-subtitle text-muted">{dog.age} years old</h3>
            </div>
            <ul className="list-group list-group-flush">
              {dog.facts.map((d, i) => {
                return (
                  <li className="list-group-item" key={i}>
                    {d}
                  </li>
                );
              })}
            </ul>
            <div className="card-body">
              <Link to="/dogs" className="btn btn-info">
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
