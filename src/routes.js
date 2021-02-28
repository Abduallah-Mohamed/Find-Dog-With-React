import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

class routes extends Component {
  render() {
    const getDog = (routeProps) => {
      let name = routeProps.match.params.name;
      let currentDog = this.props.dogs.find(
        (dog) => dog.name.toLowerCase() === name.toLowerCase()
      );
      console.log(currentDog);
      return <DogDetails {...routeProps} dog={currentDog} />;
    };
    return (
      <Switch>
        <Route
          exact
          path="/dogs"
          render={() => <DogList dogs={this.props.dogs} />}
        />
        <Route exact path="/dogs/:name" render={getDog} />
        <Redirect to="/dogs" />
      </Switch>
    );
  }
}

export default routes;
