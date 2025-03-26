import React, {Component} from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'
import './app.css'
import {PersonDetails, PersonList, PlanetList, StarshipList} from "../sw-components"
 import ErrorBoundary from "../error-boundary"
 import DummySwapiService from "../../services/dummy-swapi-service"
 
 import { SwapiServiceProvider } from '../swapi-service-context'
 import SwapiService from "../../services/swapi-service"
 import Row from "../row"
 import StarshipDetails from "../sw-components/starship-details";
 import PlanetDetails from "../sw-components/planet-details";

export default class App extends Component{
    
  state = {
    selectedPerson: null,
    hasError: false,
    swapiService: new SwapiService()
}
onPersonSelected = (id) => {
  this.setState({ selectedPerson: id })
}

render() {
  return (
    <ErrorBoundary>
    <SwapiServiceProvider value={this.state.swapiService} >
                     <div className="stardb-app">
                         <Header/>
                         <RandomPlanet />
                         <Row left={<PersonList />} right={<PersonDetails itemId={3} />} />
                         <Row left={<StarshipList />} right={<StarshipDetails itemId={5} />} />
                         <Row left={<PlanetList />} right={<PlanetDetails itemId={8} />} />
      
 
                     </div>
                 </SwapiServiceProvider>
</ErrorBoundary>
  )
}
}
      
