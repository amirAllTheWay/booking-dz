import {Component} from "react";
import React from "react";

import './Offers.css';
import './Offer.css';

class Offer extends Component {


    render() {
        let style = "Offer";
        //console.log("this.props.isOfferSelected: ", this.props.isOfferSelected);
        if (this.props.offerKey === "off1") {
            if (this.props.isOfferSelected === true) {
                style = "Offer LargeOfferWidth OfferClicked";
            }else{
                style = "Offer LargeOfferWidth OfferTourismNotClicked";
            }
        }
        else if (this.props.offerKey === "off2") {
            if (this.props.isOfferSelected === true) {
                style = "Offer LargeOfferWidth OfferClicked";
            }else{
                style = "Offer LargeOfferWidth OfferOmraNotClicked";
            }
        }
        else if (this.props.offerKey === "off3"){
            if (this.props.isOfferSelected === true) {
                style = "Offer LargeOfferWidth OfferClicked";
            }else{
                style = "Offer LargeOfferWidth OfferHadjNotClicked";
            }
        }
        else if (this.props.offerKey === "off4"){
            if (this.props.isOfferSelected === true) {
                style = "Offer SmallOfferWidth OfferClicked";
            }else{
                style = "Offer SmallOfferWidth OfferTourismNotClicked";
            }
        }
        else if (this.props.offerKey === "off5"){
            if (this.props.isOfferSelected === true) {
                style = "Offer SmallOfferWidth OfferClicked";
            }else{
                style = "Offer SmallOfferWidth OfferOmraNotClicked";
            }
        }
        else if (this.props.offerKey === "off6"){
            if (this.props.isOfferSelected === true) {
                style = "Offer SmallOfferWidth OfferClicked";
            }else{
                style = "Offer SmallOfferWidth OfferHadjNotClicked";
            }
        }
        return (
            <div className={style} onClick={this.props.click}>
                <h3>{this.props.offerName}</h3>
            </div>


        );
    }
}

export default Offer;