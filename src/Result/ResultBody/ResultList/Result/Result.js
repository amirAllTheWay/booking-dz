import {Component} from "react";
import React from "react";

import './Result.css';
import * as actionCreators from "../../../../store/actions/actions";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';

class Result extends Component {

    render() {

        const items = []
        // process hotel stars
        for (let i = 0; i < this.props.hotalStars; i++) {
            items.push(<span className="fa fa-star checked"></span>)
        }

        //process original price
        let originalPrice = Number((this.props.price*1.1).toFixed(1));


        return (
            <div className="Result" id='Result'>

                <div className="FlyingCompanyColumn">
                    <img src={`data:image/jpeg;base64,${this.props.image}`} width="420px" height="280px" alt=""/>
                </div>

                <div className="ResultDetailsColumn">
                    <div className="TitleRow">
                        <h3 className="TitleText">{this.props.title}</h3>
                    </div>

                    <div className="ElementaryRow">
                        <i className = "fas fa-map-marked-alt icon"></i>
                        <h3 className = "DestinationText">{this.props.destinationCity}</h3>
                    </div>

                    <div className="DestinationRow">
                        <i className="fas fa-hotel icon"></i>
                        <h3 className = "DestinationText">{this.props.hotel}</h3>
                        <div className="HotelStars">
                            {items}
                        </div>
                    </div>

                    <div className="DestinationRow">
                        <i className="fas fa-plane-departure icon"></i>
                        <h3 className = "DestinationText">{this.props.flyingCompany}</h3>
                    </div>

                    <div className="DestinationRow">
                        <i className="fas fa-calendar-alt icon"></i>
                        <h3 className = "DestinationText">{this.props.duration} jours et {this.props.duration - 1} nuits</h3>
                    </div>
                </div>

                <div className="AgencyLogoPriceColumn">
                    <div className="AgencyLogoRow">
                        <img src={`data:image/jpeg;base64,${this.props.image}`} width="120px" height="100px" alt=""/>
                    </div>
                    <div className="OfferDetails">
                        <div className="PriceColumn">
                            <div className="ReducedPriceColumn">
                                <h3 className="PriceText">{this.props.price} DA</h3>
                                <h3 className="PriceDetails">ttc/pers</h3>
                            </div>
                            <div className="OriginalPriceColumn">
                                <h3 className="OriginalPriceText"><strike>{originalPrice} DA</strike></h3>
                            </div>
                        </div>
                        <div className="DetailsButtonColumn">
                            <button className="buttonOfferDetails" onClick={() => this.props.offerDetailsButtonClicked(this.props, this.props.offerReference)}>Détails</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {

    return {
        offerDetailsButtonClicked: (props, offerReference) => {
            console.log("Result : ", props);
            dispatch(actionCreators.offerQuickViewButtonClicked(offerReference));
        }
    };

};

export default connect(null, mapDispatchToProps)(withRouter(Result));
