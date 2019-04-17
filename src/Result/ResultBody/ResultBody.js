import {Component} from "react";
import React from "react";


import './ResultBody.css';
import ResultFilter from "./ResultFilter/ResultFilter";
import ResultList from "./ResultList/ResultList";
import AdBanner from "./AdBanner/AdBanner";
import ResultHeader from "../ResultHeader/ResultHeader";

class ResultBody extends Component {


    render() {

        return (
            <div className="ResultBody">
                <ResultHeader/>
                <div className="ResultMain">
                    <ResultFilter/>
                    <ResultList/>
                    <AdBanner/>
                </div>
            </div>
        );
    }
}

export default ResultBody;