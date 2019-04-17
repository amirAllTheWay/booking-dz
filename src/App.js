import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import  { connect } from 'react-redux';

import Toolbar from './Toolbar/Toolbar';
import Main from './Main/Main';
import ResultBody from "./Result/ResultBody/ResultBody";

class App extends Component {

  render() {

      let selectedView = null;

      if(this.props.isResearchButtonClicked === false) {
          selectedView = (
              <Main/>
          );
      } else {
          selectedView = (
              <ResultBody/>
          );
      }
    return (
      <div className="App">
        <Toolbar/>
          {selectedView}
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        isResearchButtonClicked: state.researchButtonPressed
    }

};




export default connect(mapStateToProps)(App);
