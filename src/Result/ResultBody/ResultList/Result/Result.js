import {Component} from "react";
import React from "react";

import './Result.css';

class Result extends Component {

    render() {

        return (
            <div className="Result">

                <div className="FlyingCompanyColumn">
                    <img src={`data:image/jpeg;base64,${this.props.image}`}  alt=""/>
                </div>

                <div className="ResultDetailsColumn">

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