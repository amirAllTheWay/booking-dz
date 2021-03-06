import React, {Component} from "react";
import './CitySearch.css';
import Select from 'react-select';


const options = [
    { value: 'Alger', label: 'Alger' },
    { value: 'Oran', label: 'Oran' },
    { value: 'Sétif', label: 'Sétif' },
    { value: 'Constantine', label: 'Constantine' },
    { value: 'Paris', label: 'Paris' },
    { value: 'Rome', label: 'Rome' },
    { value: 'istanbul', label: 'Istanbul' }
];

class CitySearch extends Component {

    state = {
        selectedOption: null,
    }


    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        this.props.onCitySelected(selectedOption);
    }

    render() {
        const { selectedOption } = this.state;
        return (

            <div className="CitySearch">

                <div className="SearchTitle">
                    <p className="TitleContainer">{this.props.searchTitle}</p>
                </div>
                <div>
                    <Select
                        onChange={this.handleChange}x
                        value={selectedOption}
                        options={options}/>
                </div>
            </div>


        );
    }
}

export default CitySearch;