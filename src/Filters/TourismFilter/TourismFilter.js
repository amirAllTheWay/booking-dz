import {Component} from "react";
import React from "react";

import './TourismFilter.css';
import CitySearch from "../../CitySearch/CitySearch";
import DateSearch from "../../DateSearch/DateSearch";
import SearchButton from "../../SearchButton/SearchButton";


class TourismFilter extends Component {

    render() {
        return (
            <div className="TourismFilter">
                <CitySearch searchTitle="Ville de départ"/>
                <CitySearch searchTitle="Destination"/>

                <DateSearch dateTitle="Date de départ"/>
                <DateSearch dateTitle="Date de retour"/>

                <SearchButton/>
            </div>
        );
    }
}

export default TourismFilter;