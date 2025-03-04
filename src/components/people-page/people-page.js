import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

import SwapiService from "../../services/swapi-service";
import Row from "../Row";
import ErrorBoundary from "../error-boundary";

swapiService = new SwapiService()

import './people-page.css';

export default class PeoplePage extends Component {
    

    state = {
        selectedPerson: null
    }

    

    onPersonSelected = (selectedPerson) => {
        this.setState({ selectedPerson })
    };

    render() {

        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected} getData={this.swapiService.getAllPeople}>
                { i => `${i.name} (${i.birthYear})` }
            </ItemList>     
        )

        return (
            <ErrorBoundary>
            <Row left={ itemList } right={ personDetails } />
        </ErrorBoundary>
        )
    }
}