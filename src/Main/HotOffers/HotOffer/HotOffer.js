import {Component} from "react";
import React from "react";

import './HotOffer.css'
class HotOffer extends Component {

    render() {

        return (
            <div className="HotOffer">
                <img className="hotOfferImageContainer" src={`data:image/jpeg;base64,${this.props.image}`} width="420px" height="280px" alt=""/>
                <h3 className="destination">{this.props.departureCity} - {this.props.destinationCity}</h3>
                <h3 className="duration">{this.props.duration} jours</h3>
                <div className="priceRow">
                    <h3 className="priceValue">{this.props.price}</h3>
                </div>

            </div>
        );
    }
}

export default HotOffer;