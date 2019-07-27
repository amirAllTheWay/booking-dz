import React, {Component} from "react";
import './DateSearch.css';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class CitySearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return (

            <div className="DateSearch">

                <div className="DateTitle">
                    <p className="TitleContainer">{this.props.dateTitle}</p>
                </div>
                <DatePicker
                    className="DatePicker"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                />

            </div>


        );
    }
}

export default CitySearch;