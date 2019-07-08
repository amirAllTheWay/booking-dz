import {Component} from "react";
import React from "react";

import  { connect } from 'react-redux';

import './ResultList.css';
import Result from "./Result/Result";


class ResultList extends Component {

    render() {
        return (
            <div className="ResultList">

                {this.props.filteredTourismResults.map((result, index) => {
                    return <Result
                        key = {index}
                        index = {index}
                        flyingCompany = {result.flyingCompany}
                        departureCity = {result.departureCity}
                        destinationCity = {result.destinationCity}
                        hotel = {result.hotel}
                        price = {result.price}
                        image = {result.hotelImage}
                        agency = {result.travelAgency}
                        duration = {result.travelDuration}
                        hotalStars = {result.hotalStars}
                        agencyAddress = {result.agencyAddress}
                        agencyPhone = {result.agencyPhone}
                        />
                })}

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

export default connect(mapStateToProps)(ResultList);