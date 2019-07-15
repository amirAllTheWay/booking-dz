import React from 'react';
import {Component} from "react";

import './Toolbar.css';


class Toolbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toolbarButtons: [
                {key: 0, name: "Home", isSelected: true, style: "HadjButton ButtonClicked"},
                {key: 1, name: "Tourisme", isSelected: false, style: "HadjButton ButtonNotClicked"},
                {key: 2, name: "Hadj", isSelected: false, style: "HadjButton ButtonNotClicked"},
                {key: 3, name: "Omra", isSelected: false, style: "HadjButton ButtonNotClicked"}

            ]
        };
    }

    updateToolbarState = (key) => {
        console.log("Button clicked");

        let btnsState = this.state.toolbarButtons;
        for(let i =0; i <4; i++){
            if(btnsState[i].key === key){
                btnsState[i].isSelected = true;
                btnsState[i].style = "HadjButton ButtonClicked";
            }else{
                btnsState[i].isSelected = false;
                btnsState[i].style = "HadjButton ButtonNotClicked";
            }
        }

        this.setState({toolbarButtons: btnsState}, () => {console.log("updateToolbarState: ", this.state);});
    }

    render() {
        return(
            <header className="Toolbar">
                <button className="LogoButton">Mr Siya7a</button>

                <div className="ToolbarLeft">
                    <button className={this.state.toolbarButtons[0].style} onClick={() =>this.updateToolbarState(this.state.toolbarButtons[0].key)}>{this.state.toolbarButtons[0].name}</button>

                    <button className={this.state.toolbarButtons[1].style} onClick={() =>this.updateToolbarState(this.state.toolbarButtons[1].key)}>{this.state.toolbarButtons[1].name}</button>

                    <button className={this.state.toolbarButtons[2].style} onClick={() =>this.updateToolbarState(this.state.toolbarButtons[2].key)}>{this.state.toolbarButtons[2].name}</button>

                    <button className={this.state.toolbarButtons[3].style} onClick={() =>this.updateToolbarState(this.state.toolbarButtons[3].key)}>{this.state.toolbarButtons[3].name}</button>

                    <button className="LoginButton">Se connecter</button>
                </div>

            </header>
        );
    }
}



export default Toolbar;