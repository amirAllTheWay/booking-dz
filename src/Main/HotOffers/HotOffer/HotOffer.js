import {Component} from "react";
import React from "react";

import './HotOffer.css'
class HotOffer extends Component {

    render() {

        return (
            <div className="HotOffer">
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