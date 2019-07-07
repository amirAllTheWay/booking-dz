import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import  { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Toolbar from './Toolbar/Toolbar';
import Main from './Main/Main';
import ResultBody from "./Result/ResultBody/ResultBody";
import OfferDetails from "./OfferDetails/OfferDetails";


class App extends Component {

  render() {

    return (
      <div className="App">

          <Toolbar/>
          <Switch>
              <Route path="/"  exact component={Main} />
              <Route path="/results"  exact component={ResultBody} />
              <Route path="/details"  exact component={OfferDetails} />
              <Route path="/tourismResults"  exact component={ResultBody} />
          </Switch>

      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        isResearchButtonClicked: state.researchButtonPressed,
        isOfferDetailsClicked: state.offerDetailsClicked,
        offerDetailsId: state.offerDetailsId
    }

};




export default connect(mapStateToProps)(App);
