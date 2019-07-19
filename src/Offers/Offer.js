import {Component} from "react";
import React from "react";

import './Offers.css';
import './Offer.css';

class Offer extends Component {


    render() {
        let style = "Offer";
        //console.log("this.props.isOfferSelected: ", this.props.isOfferSelected);

        if(this.props.isOfferSelected === true) {
            style = "Offer OfferClicked";
        } else if (this.props.offerName == "Omra") {
            style = "Offer OfferOmraNotClicked";
        } else if (this.props.offerName == "Tourisme") {
            style = "Offer OfferTourismNotClicked";
        }
        else if (this.props.offerName == "Hadj"){
            style = "Offer OfferHadjNotClicked";
        }
        return (
            <div className={style} onClick={this.props.click}>
                <h3>{this.props.offerName}</h3>
            </div>


        );
    }
}

export default Offer;