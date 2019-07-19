import {Component} from "react";
import React from "react";

import './TourismFilterPage.css';
import Toolbar from "../Toolbar/Toolbar";
import * as actionCreators from "../store/actions/actions";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
import TourismFilter from "../Filters/TourismFilter/TourismFilter";

// TODO change background image, different from Main page one

class TourismFilterPage extends Component {

    render() {

        //this.props.onTourismPageLaunched();

        return (
            <div className="TourismFilterPage">
                <div className="PageMessageContainer">
                    <h1 className="TourismFilterPageMessage">Les meilleurs offres au départ d'Alger</h1>
                </div>
                <div className="TourismFilterContainer">
                    <TourismFilter/>
                </div>

            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {

    //let  researchParams  = {departureCity: this.state.departureCity, destinationCity: this.state.destinationCity};
    return {
        onTourismPageLaunched: () => {
            console.log(" ***** onTourismPageLaunched: ");
            //dispatch(actionCreators.mainScreenLaunched());
        }
    };
};

export default connect(null, mapDispatchToProps)(withRouter(TourismFilterPage));