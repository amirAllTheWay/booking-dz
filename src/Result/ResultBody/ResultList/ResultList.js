import {Component} from "react";
import React from "react";

import  { connect } from 'react-redux';

import './ResultList.css';
import Result from "./Result/Result";



class ResultList extends Component {



    render() {

/*
        let searchResults = [
            {
                flyingCompany: "Air Algérie",
                departureCity: "Alger",
                destinationCity: "Rome",
                hotel: "Hilton",
                price: "380€"
            },
            {
                flyingCompany: "Air France",
                departureCity: "Paris",
                destinationCity: "New York",
                hotel: "Hilton",
                price: "550€"
            },
            {
                flyingCompany: "Alitalia",
                departureCity: "Alger",
                destinationCity: "Rome",
                hotel: "Hilton",
                price: "180€"
            },
            {
                flyingCompany: "Vueling",
                departureCity: "Alger",
                destinationCity: "Prague",
                hotel: "Hilton",
                price: "475€"
            }

        ];*/

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