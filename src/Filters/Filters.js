import React, {Component} from "react";
import './Filters.css';
import CitySearch from "../CitySearch/CitySearch";
import DateSearch from "../DateSearch/DateSearch";
import SearchButton from "../SearchButton/SearchButton";


class Filters extends Component {



    render() {
        let selectedFilter = null;
        //console.log("Filters selected filter: ", this.props.selectedOffedIndex);


        if(this.props.selectedOffedIndex === 0)
        {

            selectedFilter = (
                <div className="Filters">
                    <CitySearch searchTitle="Ville de départ"/>
                    <CitySearch searchTitle="Destination"/>

                    <DateSearch dateTitle="Date de départ"/>
                    <DateSearch dateTitle="Date de retour"/>

                    <SearchButton/>
                </div>
            );

        }
        else if(this.props.selectedOffedIndex === 1)
        {
            selectedFilter = (
                <div className="Filters">
                    <CitySearch searchTitle="Ville de départ"/>
                </div>
            );
        }


        return (
            <div className="Filters">
                {selectedFilter}
            </div>


        );
    }
}

export default Filters;