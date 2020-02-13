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

        const newOffers = [...this.state.offers];

        newOffers[offerId] = selectedOffer;
        newOffers[this.state.selectedOffedIndex] = previouslySelectedOffer;

        this.setState({selectedOffedIndex: offerId});
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


            <div className="PriceColumn">
            <h3 className="PriceText">{this.props.price} DA</h3>
        <h3 className="PriceDetails"> ttc/pers</h3>
        </div>



        <div className="QVOfferNameContainer">
            <h5 className="QVhotelName">{this.props.selectedQuickViewOffer.offerTitle}</h5>
        </div>

        <div className="QVOfferNameContainer">
            <h4 className="QVhotelName">Date de départ: {this.props.selectedQuickViewOffer.departureDate}</h4>
    </div>

    <div className="QVOfferNameContainer">
    <h4 className="QVhotelName">Durée: {this.props.selectedQuickViewOffer.travelDuration} jours</h4>
    </div>

    <div className="QVhotelNameContainer">
    <h2 className="QVhotelName">Au départ de: {this.props.selectedQuickViewOffer.departureCity}</h2>
    </div>

    <div className="QVhotelNameContainer">
    <h2 className="QVhotelName">{this.props.selectedQuickViewOffer.hotel} Resort 4*</h2>
    </div>

    <div className="QVhotelNameContainer">
    <h2 className="QVhotelName">Vol avec: {this.props.selectedQuickViewOffer.flyingCompany}</h2>
    </div>

    <div className="QVTravelAgencyRow">
    <div className="QVagencyNameAddress">
    <h3 className="QVagencyName">{this.props.selectedQuickViewOffer.travelAgency}</h3>
    <h4 className="QVagencyAddress">{this.props.selectedQuickViewOffer.agencyAddress}</h4>
    </div>
    <div className="QVagencyPhoneNumber">
    <h1 className="QVagencyPhoneNumberText">{this.props.selectedQuickViewOffer.agencyPhone}</h1>
    </div>

    </div>


    <div className="QVHotelPhotosColumn">
    <img src={`data:image/jpeg;base64,${this.props.selectedQuickViewOffer.hotelImage}`} width="711px" height="350px" alt=""/>
    </div>

    <img src={`data:image/jpeg;base64,${this.props.mainPhoto}`} width="820px" height="350px" alt=""/>

    );


    <div className="form-row">
    <div className="form-group col-md-5 pl-3 pt-3">
    <label htmlFor="inputLastName" className="formLabel">Nom</label>
    <input type="text" className="form-control" id="inputLastName" placeholder="Nom"/>
    </div>
    <div className="form-group col-md-5 pl-3 pt-3">
    <label htmlFor="inputFirstName" className="formLabel">Prénom</label>
    <input type="text" className="form-control" id="inputFirstName" placeholder="Prénom"/>
    </div>
    </div>


    this.state = {
    firstName : '',
    lastName : null,
    adultsNumb : null,
    childrenNumb : null,
    babiesNumb : null,
    complementaryInfo : null,
    phoneNumber : null,
    email : null,
    };
    }
}

export default Search;
