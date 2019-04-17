import {Component} from "react";
import React from "react";

import  { connect } from 'react-redux';
import * as actionCreators  from '../store/actions/actions';

import './Search.css';

import Offer from "../Offers/Offer";
import  '../Offers/Offers.css';
import  '../Offers/Offer.css';
import '../Filters/Filters.css';
import CitySearch from "../CitySearch/CitySearch";
import DateSearch from "../DateSearch/DateSearch";
import SearchButton from "../SearchButton/SearchButton";


class Search extends Component {

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


    handleOfferClicked = (offerId) => {
        console.log("handleOfferClicked: ", offerId);

        const previouslySelectedOffer = {...this.state.offers[this.state.selectedOffedIndex]};
        previouslySelectedOffer.isSelected = false;

        const selectedOffer = {...this.state.offers[offerId]};
        selectedOffer.isSelected = true;

        const newOffers = [...this.state.offers];

        newOffers[offerId] = selectedOffer;
        newOffers[this.state.selectedOffedIndex] = previouslySelectedOffer;


        this.setState({offers: newOffers,  selectedOffedIndex: offerId}, () => {console.log("handleOfferClicked 2: ", this.state.selectedOffedIndex);});
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
            <div className="Search">
                <div className="Offers">
                    {this.state.offers.map((offer, index) => {
                        return <Offer
                            key = {index}
                            click={() => this.handleOfferClicked(index)}
                            offerName={offer.name}
                            isOfferSelected={offer.isSelected}/>
                    })}
                </div>

                <div className="Filters">
                    {selectedFilter}
                </div>

            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    // TODO new research request need to pass selected cities and selected dates
    // TODO This data should be stored in a Form
    // TODO search button should be deactivated since data not inserted
    return {
        onSearchButtonClicked: () => {
            dispatch(actionCreators.searchButtonClicked());
            dispatch(actionCreators.newResearchRequest("Amir"));
        }
    };
};

export default connect(null, mapDispatchToProps)(Search);