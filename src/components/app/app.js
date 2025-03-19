import React, {Component} from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'
import SwapiService from "../../services/swapi-service";
import './app.css'
import {PersonList, PlanetList, StarshipList} from "../sw-components";
 import ErrorBoundary from "../error-boundary";

export default class App extends Component{
    swapiService = new SwapiService()
  state = {
    selectedPerson: null
}
onPersonSelected = (id) => {
  this.setState({ selectedPerson: id })
}

render() {
  return (
    <ErrorBoundary>
    <div className="stardb-app">
        <Header/>
        <RandomPlanet />

        <PersonList>
            { i => `${i.name} (${i.birthYear})` }
        </PersonList>

        <StarshipList>
            { i => `${i.name} (${i.cargoCapacity})` }
        </StarshipList>

        <PlanetList>
            { i => `${i.name} (${i.population})` }
        </PlanetList>
    </div>
</ErrorBoundary>
  )
}
}
      
