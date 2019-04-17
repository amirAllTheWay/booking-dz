import {Component} from "react";
import React from "react";
import logo from './logo_air_algerie.jpg';

import './Result.css';

class Result extends Component {



    render() {

        return (
            <div className="Result">

                <div className="FlyingCompanyColumn">
                    <h3>{this.props.flyingCompany}</h3>
                    <img src={logo} width="60" height="60"/>
                </div>

                <div className="ResultDetailsColumn">
                    <div className="CityInfo">
                        <h3>{this.props.departureCity}</h3>
                        <h3>{this.props.destinationCity}</h3>
                    </div>

                    <div className="HotelInfo">
                        <h3>{this.props.hotel}</h3>
                    </div>
                </div>

                <div className="PriceColumn">
                    <h3>{this.props.price}</h3>

                </div>
            </div>
        );
    }
}

export default Result;