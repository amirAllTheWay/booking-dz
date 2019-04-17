import {Component} from "react";
import React from "react";
import Search from '../Search/Search';


import './Main.css';

class Main extends Component {

    render() {

        return (
            <div className="Container Main">
                <Search/>

            </div>
        );
    }
}

export default Main;