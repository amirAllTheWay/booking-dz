import {Component} from "react";
import React from "react";
import Search from './Search/Search';
import { withRouter } from 'react-router-dom';


import './Main.css';
import HotOffers from "./HotOffers/HotOffers";
import * as actionCreators from "../store/actions/actions";
import {connect} from "react-redux";

class Main extends Component {

    render() {
        // Ask for hot offers on launch
        this.props.onMainScreenLaunched()

        return (
            <div className="Container Main">
                <Search/>
                <HotOffers/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    // TODO new research request need to pass selected cities and selected dates
    // TODO This data should be stored in a Form
    // TODO search button should be deactivated since data not inserted

    //let  researchParams  = {departureCity: this.state.departureCity, destinationCity: this.state.destinationCity};
    return {
        onMainScreenLaunched: () => {
            console.log(" ***** onMainScreenLaunched: ");
            dispatch(actionCreators.mainScreenLaunched());
        }
    };
};

export default connect(null, mapDispatchToProps)(withRouter(Main));