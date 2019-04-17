import React, {Component} from "react";
import './CitySearch.css';
import Select from 'react-select';


const options = [
    { value: 'alger', label: 'Alger' },
    { value: 'oran', label: 'Oran' },
    { value: 'sétif', label: 'Sétif' },
    { value: 'constantine', label: 'Constantine' },
    { value: 'paris', label: 'Paris' },
    { value: 'istanbul', label: 'Istanbul' }
];

class CitySearch extends Component {

    state = {
        selectedOption: null,
    }


    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }

    render() {
        const { selectedOption } = this.state;
        return (

            <div className="CitySearch">

                <div className="SearchTitle">
                    <h3>{this.props.searchTitle}</h3>
                </div>

                <Select
                    onChange={this.handleChange}
                    value={selectedOption}
                    options={options}/>

            </div>


        );
    }
}

export default CitySearch;