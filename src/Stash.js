import {Component} from "react";
import React from "react";

import './Offers.css';
import Offer from "./Offers/Offer";
import CitySearch from "./CitySearch/CitySearch";
import DateSearch from "./DateSearch/DateSearch";
import SearchButton from "./SearchButton/SearchButton";
import Filters from "./Filters/Filters";

const Offers  =(props) => {

    const listOfOffers = [
        {id: "off1", name: "Tourisme"},
        {id: "off2", name: "Omra"},
        {id: "off3", name: "Hadj"},
        {id: "off4", name: "Medical"},
        {id: "off5", name: "Linguistique"},
        {id: "off4", name: "Voyage medical", isSelected: false},
        {id: "off5", name: "Voyage linguistique", isSelected: false}
    ];


    return (
        <div className="Offers">
            {listOfOffers.map(offre => {
                return <h3>{offre.name}</h3>
            })}
        </div>

        <div className="Offers">
        {listOfOffers.map((offre, index) => {
            return <Offer
                click={() => this.deletePerson(index)}
                offerName={offre.name}/>
        })}


    <CitySearch searchTitle="Ville de départ"/>
    <CitySearch searchTitle="Destination"/>

        <DateSearch dateTitle="Date de départ"/>
        <DateSearch dateTitle="Date de retour"/>

        <SearchButton/>
</div>

    <Filters selectedFilterId={this.state.selectedFilterId}/>


    <Offers offerClicked={this.handleOfferClicked} offers={this.state.offers}/>
    <Filters selectedOffedIndex={this.state.selectedOffedIndex}/>


    );
}

export default Offers;




import {Component} from "react";
import React from "react";
import Offers from '../Offers/Offers';

import './Search.css';
import Filters from "../Filters/Filters";

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            offers: [
                {id: "off1", name: "Tourisme", isSelected: true},
                {id: "off2", name: "Omra", isSelected: false},
                {id: "off3", name: "Hadj", isSelected: false}
            ],
            selectedOffedIndex: 0
        };
    }


    handleOfferClicked = (offerId) => {


        const selectedOffer = {...this.state.offers[offerId]};

        const previouslySelectedOffer = {...this.state.offers[this.state.selectedOffedIndex]};
        previouslySelectedOffer.isSelected = false;


        selectedOffer.isSelected = true;
        console.log("handleOfferClicked 3 selectedOffer: ", selectedOffer);
        console.log("handleOfferClicked 3 previouslySelectedOffer: ", previouslySelectedOffer);

        const newOffers = [...this.state.offers];

        console.log("handleOfferClicked 3 newOffers[offerId]: ", newOffers[offerId]);
        newOffers[offerId] = selectedOffer;
        newOffers[this.state.selectedOffedIndex] = previouslySelectedOffer;

        console.log("handleOfferClicked 3 newOffers: ", newOffers);

        this.setState({selectedOffedIndex: offerId});


        console.log("handleOfferClicked 3 state 1: ", this.state);
        // console.log("handleOfferClicked 3 offers 2: ", offers);




        //console.log("handleOfferClicked 3 state: ", this.state);

    }

    render() {


        return (
            <div className="Search">
                <Offers offerClicked={this.handleOfferClicked} offers={this.state.offers}/>
                <Filters selectedOffedIndex={this.state.selectedOffedIndex}/>
            </div>


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

                    <SearchButton/>
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





            <div className="Filters">
            {selectedFilter}
    </div>
        );
    }
}

export default Search;