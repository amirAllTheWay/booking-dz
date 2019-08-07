import {Component} from "react";
import React from "react";
import './OfferDetails.css';


class OfferDetails extends Component {


    render() {
        console.log("----- OfferDetails : ", this.props);
        return (
            <div className="pageContainer">
                <div className="offerDetails">

                    <div className="hotelNameContainer">
                        <h1 className="hotelName">{this.props.location.state.offer.hotel} Resort 4*</h1>
                    </div>

                    <div className="HotelDetailsRecap">
                        <div className="HotelPhotosColumn">
                            <img src={`data:image/jpeg;base64,${this.props.location.state.offer.hotelImage}`} width="655px" height="460px" alt=""/>
                        </div>

                        <div className="StayDetailsColumn">
                            <div className="hotelOptions">
                                <ul>
                                    <li className="offerDuration">{this.props.location.state.offer.travelDuration} jours</li>
                                    <li>All inclusive 24h/24</li>
                                    <li>Chambres aves vue</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="TravelAgencyRow">
                        <div className="agencyNameAddress">
                            <h2 className="agencyName">{this.props.location.state.offer.travelAgency}</h2>
                            <h4 className="agencyAddress">{this.props.location.state.offer.agencyAddress}</h4>
                        </div>
                        <div className="agencyPhoneNumber">
                            <h2>{this.props.location.state.offer.agencyPhone}</h2>
                        </div>

                    </div>

                </div>

                <div className="hotelDetails">
                    <div className="HotelPresentation">
                    </div>
                </div>
            </div>

        );
    }
}

export default OfferDetails;