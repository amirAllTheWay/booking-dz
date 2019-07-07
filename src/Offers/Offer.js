import {Component} from "react";
import React from "react";

import './Offers.css';

class Offer extends Component {


    render() {
        let style = "Offer";
        //console.log("this.props.isOfferSelected: ", this.props.isOfferSelected);

        if(this.props.isOfferSelected === true) {
            style = "Offer OfferClicked";
            console.log("OfferClicked: ", style);
        } else {

            style = "Offer OfferNotClicked";
            console.log("OfferNotClicked: ", style);
        }
        return (
            <div className={style} onClick={this.props.click}>
                <h3>{this.props.offerName}</h3>
            </div>


        );
    }
}

export default Offer;