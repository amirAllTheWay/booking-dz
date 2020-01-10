import {Component} from "react";
import React from "react";

import  { connect } from 'react-redux';

import './ResultList.css';
import Result from "./Result/Result";
import {ClipLoader} from "react-spinners";
import * as actionCreators from "../../../store/actions/actions";


class ResultList extends Component {

    componentWillMount(prevProps, prevState) {
        if(!(this.props.filteredTourismResults === undefined || this.props.filteredTourismResults === null)) {
            this.props.defaultLaunch(this.props.filteredTourismResults[0].offerReference);
        }
    }

    render() {
        let selectedView = null;

        if(this.props.filteredTourismResults === undefined || this.props.filteredTourismResults === null) {
            selectedView = (
                <div className='sweet-loading'>
                    <ClipLoader
                        sizeUnit={"px"}
                        size={150}
                        color={'#808080'}
                    />
                </div>
            );
        } else {
            selectedView = (
                <div className="ListContainer">
                    {this.props.filteredTourismResults.map((result, index) => {
                        return <Result
                            key = {index}
                            index = {index}
                            flyingCompany = {result.flyingCompany}
                            departureCity = {result.departureCity}
                            destinationCity = {result.destinationCity}
                            hotel = {result.hotelName}
                            price = {result.offerPrice}
                            image = {result.hotelImage}
                            agency = {result.travelAgency}
                            duration = {result.travelDuration}
                            hotalStars = {result.hotelStars}
                            agencyAddress = {result.agencyAddress}
                            agencyPhone = {result.agencyPhone}
                            offerReference = {result.offerReference}
                        />
                    })}
                </div>
            );
        }

        return (
            <div className="ResultList">
                {selectedView}
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(" **** ResultList state was updated: ", state);
    return {
        researchType: state.researchType,
        filteredTourismResults: state.filteredTourismResults
    }

};

const mapDispatchToProps = dispatch => {

    return {
        defaultLaunch: (offerReference) => {
            dispatch(actionCreators.offerQuickViewButtonClicked(offerReference));

        }
    };

};
export default connect(mapStateToProps, mapDispatchToProps)(ResultList);
