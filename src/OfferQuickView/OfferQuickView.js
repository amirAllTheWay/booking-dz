import {Component} from "react";
import React from "react";
import './OfferQuickView.css';
import {connect} from "react-redux";


class OfferQuickView extends Component {


    render() {
        let selectedView = null;
        console.log(" **** OfferQuickView render: ", this.props.selectedQuickViewOffer);

        if(this.props.selectedQuickViewOffer === undefined || this.props.selectedQuickViewOffer === null) {
            selectedView = (
                <div>
                </div>
            );
        }
        else {
            selectedView = (
                    <div className="OfferQuickView">

                        <div className="QVHotelPhotosColumn">
                            <img src={`data:image/jpeg;base64,${this.props.selectedQuickViewOffer.hotelImage}`} width="541px" height="300px" alt=""/>
                        </div>

                        <div className="QVOfferNameContainer">
                            <h5 className="QVhotelName">{this.props.selectedQuickViewOffer.offerTitle}</h5>
                        </div>

                        <div className="QVOfferNameContainer">
                            <h4 className="QVhotelName">Date de départ: {this.props.selectedQuickViewOffer.departureDate}</h4>
                        </div>

                        <div className="QVOfferNameContainer">
                            <h4 className="QVhotelName">Durée: {this.props.selectedQuickViewOffer.travelDuration} jours</h4>
                        </div>

                        <div className="QVhotelNameContainer">
                            <h2 className="QVhotelName">Au départ de: {this.props.selectedQuickViewOffer.departureCity}</h2>
                        </div>

                        <div className="QVhotelNameContainer">
                            <h2 className="QVhotelName">{this.props.selectedQuickViewOffer.hotel} Resort 4*</h2>
                        </div>

                        <div className="QVhotelNameContainer">
                            <h2 className="QVhotelName">Vol avec: {this.props.selectedQuickViewOffer.flyingCompany}</h2>
                        </div>

                        <div className="QVTravelAgencyRow">
                            <div className="QVagencyNameAddress">
                                <h3 className="QVagencyName">{this.props.selectedQuickViewOffer.travelAgency}</h3>
                                <h4 className="QVagencyAddress">{this.props.selectedQuickViewOffer.agencyAddress}</h4>
                            </div>
                            <div className="QVagencyPhoneNumber">
                                <h1 className="QVagencyPhoneNumberText">{this.props.selectedQuickViewOffer.agencyPhone}</h1>
                            </div>

                        </div>

                    </div>
            );
        }


        return (
            <div className="QVpageContainer">
                {selectedView}
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(" **** OfferQuickView BODY state was updated: ", state);

    return {
        selectedQuickViewOffer: state.selectedQuickViewOffer
    }

};

export default connect(mapStateToProps)(OfferQuickView);


