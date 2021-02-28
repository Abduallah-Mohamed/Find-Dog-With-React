import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

export default class Dog extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center display-1 my-5">Dog List</h1>

        <div className="row">
          {this.props.dogs.map((dog) => {
            return (
              <div
                className="Dog col-lg-4 col-md-6 text-center col-sm-12"
                key={dog.name}
              >
                <img className="rounded-circle" src={dog.src} alt={dog.name} />
                <h3>
                  <Link className="under" to={`/dogs/${dog.name}`}>
                    {dog.name}
                  </Link>
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
