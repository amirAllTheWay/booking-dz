import React from 'react';
import {Component} from "react";

import './Toolbar.css';
import { withRouter } from 'react-router-dom';
import { Button } from "react-bootstrap";

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

    updateToolbarState = (key, props) => {

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

        this.setState({toolbarButtons: btnsState});
    }

    onToolbarTourismButtonClicked = (btnKey, property) => {
        this.updateToolbarState(btnKey);


        if (btnKey === 0) {
            property.history.push("/");
        }else if(btnKey === 1){
            property.history.push("/tourismPage");
        }
    }

    onLoginButtonClicked = (property) => {

            property.history.push("/auth");
    }

    render() {
        return(
            <header className="Toolbar">
                <button className="LogoButton"></button>

                <div className="ToolbarLeft">
                    <div className="TabsContainer">
                        <button className={this.state.toolbarButtons[0].style} onClick={() =>this.onToolbarTourismButtonClicked(this.state.toolbarButtons[0].key, this.props)}>
                            {this.state.toolbarButtons[0].name}
                        </button>

                        <button className={this.state.toolbarButtons[1].style} onClick={() =>this.onToolbarTourismButtonClicked(this.state.toolbarButtons[1].key, this.props)}>
                            {this.state.toolbarButtons[1].name}
                        </button>

                        <button className={this.state.toolbarButtons[2].style} onClick={() =>this.onToolbarTourismButtonClicked(this.state.toolbarButtons[2].key, this.props)}>
                            {this.state.toolbarButtons[2].name}
                        </button>

                        <button className={this.state.toolbarButtons[3].style} onClick={() =>this.onToolbarTourismButtonClicked(this.state.toolbarButtons[3].key, this.props)}>
                            {this.state.toolbarButtons[3].name}
                        </button>
                    </div>

                    <Button className=" LoginButtonContainer btn-block" variant="primary" type="submit" onClick={() =>this.onLoginButtonClicked(this.props)}>
                        Espace Pro
                    </Button>


                </div>

            </header>
        );
    }
}



export default withRouter(Toolbar);
