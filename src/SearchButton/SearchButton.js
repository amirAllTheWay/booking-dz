import React, {Component} from "react";
import './SearchButton.css';

class SearchButton extends Component {



    handleSearchClick = () => {
        this.props.clicked();
    }

    render() {
        return (

            <div className="SearchButton">

                <button className="button" onClick={this.props.clicked}>Rechercher</button>

            </div>


        );
    }
}

export default SearchButton;