import {Component} from "react";
import React from "react";

import  { connect } from 'react-redux';

import './ResultList.css';
import Result from "./Result/Result";



class ResultList extends Component {



    render() {

        return (
            <div className="ResultList">

                {this.props.tourismResults.map((result, index) => {
                    return <Result
                        key = {index}
                        flyingCompany = {result.flyingCompany}
                        departureCity = {result.departureCity}
                        destinationCity = {result.destinationCity}
                        hotel = {result.hotel}
                        price = {result.price}
                        image = {result.hotelImage}
                        agency = {result.travelAgency}
                        duration = {result.travelDuration}
                        />
                })}

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        researchType: state.researchType,
        tourismResults: state.tourismResults
    }

};

export default connect(mapStateToProps)(ResultList);