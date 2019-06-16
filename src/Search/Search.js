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

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            offers: [
                {key: "off1", name: "Tourisme", isSelected: true},
                {key: "off2", name: "Omra", isSelected: false},
                {key: "off3", name: "Hadj", isSelected: false}
            ],
            departureCity: null,
            destinationCity: null,
            departureDate: null,
            returnDate: null,
            selectedOffedIndex: 0
        };
    }


    departureCitySelected = (departureCity) => {
        console.log("departureCitySelected: value: ", departureCity.value);
        this.setState({departureCity: departureCity.value}, () => {console.log("departureCitySelected: state: ", this.state.departureCity);});
    }

    destinationCitySelected = (destinationCity) => {
        this.setState({destinationCity: destinationCity.value},() => {console.log("destinationCitySelected:: state: ", this.state.destinationCity);});
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
                    <CitySearch searchTitle="Ville de départ" onCitySelected={this.departureCitySelected}/>
                    <CitySearch searchTitle="Destination" onCitySelected={this.destinationCitySelected}/>

                    <DateSearch dateTitle="Date de départ"/>
                    <DateSearch dateTitle="Date de retour"/>


                    <div className="SearchButton">

                        <button className="button" onClick={() => this.props.onSearchButtonClicked({departureCity: this.state.departureCity, destinationCity: this.state.destinationCity})}>Rechercher</button>

                    </div>
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

    //let  researchParams  = {departureCity: this.state.departureCity, destinationCity: this.state.destinationCity};
    return {
        onSearchButtonClicked: (researchParams) => {
            console.log(" ***** onSearchButtonClicked: ", researchParams.departureCity);
            dispatch(actionCreators.searchButtonClicked());

            dispatch(actionCreators.newResearchRequest(researchParams));
        }
    };
};

export default connect(null, mapDispatchToProps)(Search);