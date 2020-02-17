import {Component} from "react";
import React from "react";

import './Offer.css';

class Offer extends Component {


    render() {
        let style = "Offer";
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
                <p>{this.props.offerName}</p>
            </div>


        );
    }
}

export default Offer;
