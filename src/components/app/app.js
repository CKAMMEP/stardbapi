import React, {Component} from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'
import './app.css'
import {PersonDetails, PersonList, PlanetList, StarshipList} from "../sw-components";
 import ErrorBoundary from "../error-boundary";
 import DummySwapiService from "../../services/dummy-swapi-service";
 
 import { SwapiServiceProvider } from '../swapi-service-context';
 import SwapiService from "../../services/swapi-service";

export default class App extends Component{
    swapiService = new SwapiService();
  state = {
    selectedPerson: null
}
onPersonSelected = (id) => {
  this.setState({ selectedPerson: id })
}

render() {
  return (
    <ErrorBoundary>
    <SwapiServiceProvider value={this.swapiService} >
                     <div className="stardb-app">
                         <Header/>
                         <RandomPlanet />
 
                         <PersonList />
                         <PersonDetails itemId={2} />
 
                         <StarshipList />
 
                         <PlanetList/>
 
                     </div>
                 </SwapiServiceProvider>
</ErrorBoundary>
  )
}
}
      
