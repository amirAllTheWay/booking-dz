import {Component} from "react";
import React from "react";

import  { connect } from 'react-redux';


import './ResultHeader.css';

import Offer from "../../Offers/Offer";
import  '../../Offers/Offers.css';
import  '../../Offers/Offer.css';
import '../../Filters/Filters.css';
import CitySearch from "../../CitySearch/CitySearch";
import DateSearch from "../../DateSearch/DateSearch";
import SearchButton from "../../SearchButton/SearchButton";


class ResultHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            offers: [
                {key: "off1", name: "Tourisme", isSelected: true},
                {key: "off2", name: "Omra", isSelected: false},
                {key: "off3", name: "Hadj", isSelected: false}
            ],
            selectedOffedIndex: 0
        };
    }

    render() {

        let selectedFilter = null;
        //console.log("Filters selected filter: ", this.props.selectedOffedIndex);


        if(this.state.selectedOffedIndex === 0)
        {
            selectedFilter = (
                <div className="Filters">
                    <CitySearch searchTitle="Ville de départ"/>
                    <CitySearch searchTitle="Destination"/>

                    <DateSearch dateTitle="Date de départ"/>
                    <DateSearch dateTitle="Date de retour"/>

                    <SearchButton clicked={this.props.onSearchButtonClicked}/>
                </div>
            );

        }
        else if(this.state.selectedOffedIndex === 1)
        {
            selectedFilter = (
                <div className="Filters">
                    <CitySearch searchTitle="Ville de départ"/>
                </div>
            );
        }

        return (
            <div className="ResultHeader">
                <div className="Offers RHContainer">
                    {this.state.offers.map((offer, index) => {
                        return <Offer
                            key = {index}
                            click={() => this.handleOfferClicked(index)}
                            offerName={offer.name}
                            isOfferSelected={offer.isSelected}/>
                    })}
                </div>

                <div className="Filters RHContainer">
                    {selectedFilter}
                </div>

            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchButtonClicked: () => dispatch({type: "SEARCH_BUTTON_CLICKED"})
    };
};

export default connect(null, mapDispatchToProps)(ResultHeader);