import {Component} from "react";
import React from "react";
import Offer from './Offer';
import './Offer.css';

import './Offers.css';


class Offers extends Component {


    deletePerson = (personIndex, offerClicked) => {
        //console.log("Offer clicked: ", listOfOffers[personIndex].id);
        offerClicked(personIndex);

    }

    render() {
        return (
            <div className="Offers">
                {this.props.offers.map((offer, index) => {
                    return <Offer
                        click={() => this.deletePerson(index, this.props.offerClicked)}
                        offerName={offer.name}
                        isOfferSelected={offer.isSelected}/>
                })}
            </div>


        );
    }
}

export default Offers;