import React, {Component} from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'
import SwapiService from "../../services/swapi-service";
import './app.css'

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
      <div>
          <Header/>
          <RandomPlanet/>
          <PeoplePage />
      </div>
  )
}
}
      
