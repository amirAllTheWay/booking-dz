import {Component} from "react";
import React from "react";


import './ResultBody.css';
import ResultFilter from "./ResultFilter/ResultFilter";
import ResultList from "./ResultList/ResultList";
import OfferQuickView from "../../OfferQuickView/OfferQuickView";
import ResultHeader from "../ResultHeader/ResultHeader";
import {connect} from "react-redux";

class ResultBody extends Component {

    constructor(props) {
        super(props);
        this.props.onResultBodyConstructorLaunched();
    }
    render() {

        return (
            <div className="ResultBody">
                <ResultHeader/>
                <div className="ResultMain">
                    <ResultList/>
                    <OfferQuickView/>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onResultBodyConstructorLaunched: () => dispatch({type: "CLEAR_SELECTED_QUICK_VIEW_OFFER"})
    };
};

export default connect(null, mapDispatchToProps)(ResultBody);
