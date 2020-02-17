import {Component} from "react";
import React from "react";
import HotOffer from "./HotOffer/HotOffer";

import './HotOffers.css';
import {connect} from "react-redux";


class HotOffers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hotTourismOffers: [
                {key: "off1", departureCity:"Alger", destinationCity: "Rome", price: "29000", travelDuration: "8"},
                {key: "off1", departureCity:"Oran", destinationCity: "Paris", price: "42000", travelDuration: "5"},
                {key: "off1", departureCity:"Constantine", destinationCity: "Paris", price: "42000", travelDuration: "5"}
            ]
        };
    }

    render() {

        let selectedView = null;

        if(this.props.hotTourismOffers === undefined || this.props.hotTourismOffers === null || this.props.hotTourismOffers.results === null  || this.props.hotTourismOffers.results === undefined) {

            selectedView = (
               <div>
                   {this.state.hotTourismOffers.map((result, index) => {
                       return <HotOffer
                           key = {index}
                           departureCity = {result.departureCity}
                           destinationCity = {result.destinationCity}
                           hotel = {result.hotel}
                           price = {result.offerPrice}
                           image = {result.hotelImage}
                           duration = {result.travelDuration}
                       />
                   })}
               </div>
            );
        } else {
            selectedView = (
                <div className="container">
                        {this.props.hotTourismOffers.results.map((result, index) => {
                            return <HotOffer
                                key = {index}
                                departureCity = {result.departureCity}
                                destinationCity = {result.destinationCity}
                                hotel = {result.hotel}
                                price = {result.offerPrice}
                                image = {result.hotelImage}
                                duration = {result.travelDuration}
                            />
                        })}
                </div>
            );
        }

        return (
            <div className="HotOffers">
                {selectedView}
            </div>
        );
    }
}

const mapStateToProps = state => {

    return {
        hotTourismOffers: state.hotTourismOffers
    }

};

export default connect(mapStateToProps)(HotOffers);
