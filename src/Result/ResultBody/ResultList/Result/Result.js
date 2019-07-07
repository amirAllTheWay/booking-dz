import {Component} from "react";
import React from "react";

import './Result.css';
import * as actionCreators from "../../../../store/actions/actions";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';

class Result extends Component {

    render() {

        return (
            <div className="Result">

                <div className="FlyingCompanyColumn">
                    <img src={`data:image/jpeg;base64,${this.props.image}`} width="420px" height="280px" alt=""/>
                </div>

                <div className="ResultDetailsColumn">

                    <div className="AgencyColumn">
                        <h3 className="AgencyName">{this.props.agency}</h3>
                    </div>

                    <div className="PriceColumn">
                        <h3 className="PriceText">{this.props.price} DA</h3>
                        <h3 className="PriceDetails"> ttc/pers</h3>
                    </div>

                    <div className="HotelInfo">
                        <h3 className="HotelName">{this.props.hotel}</h3>
                        <div className="HotelStars">
                            <link rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                        </div>

                        <ul className="HotelOptions">
                            <li className="OfferDuration">{this.props.duration} jours</li>
                            <li>All inclusive 24h/24</li>
                            <li>Chambres aves vue</li>
                        </ul>
                    </div>

                    <div className="OfferDetails">
                        <button className="buttonOfferDetails" onClick={() => this.props.offerDetailsButtonClicked(this.props, this.props.index)}>Voir</button>
                    </div>

                </div>

            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {

    return {
        offerDetailsButtonClicked: (props, key) => {
            console.log("Result : ", key);
            dispatch(actionCreators.offerDetailsButtonClicked(0));


            props.history.push({
                pathname: "/details",
                search: '?query=abc',
                state: { offer:
                        {
                            flyingCompany: props.flyingCompany,
                            departureCity: props.departureCity,
                            destinationCity: props.destinationCity,
                            hotel: props.hotel,
                            price: props.price,
                            hotelImage: props.image,
                            travelAgency: props.agency,
                            travelDuration: props.duration,
                            hotelStars: props.hotelStars
                        }
                }
            });
        }
    };

};

export default connect(null, mapDispatchToProps)(withRouter(Result));