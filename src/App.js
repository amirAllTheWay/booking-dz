import React, { Component } from 'react';
import './App.css';

import  { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Toolbar from './Toolbar/Toolbar';
import Main from './Main/Main';
import ResultBody from "./Result/ResultBody/ResultBody";
import OfferDetails from "./OfferDetails/OfferDetails";
import TourismFilterPage from "./TourismFilterPage/TourismFilterPage";


class App extends Component {

  render() {

    return (
      <div className="App">
          <div className="ToolbarContainer">
              <Toolbar/>
          </div>

          <Switch>
              <Route path="/"  exact component={Main} />
              <Route path="/results"  exact component={ResultBody} />
              <Route path="/details"  exact component={OfferDetails} />
              <Route path="/tourismResults"  exact component={ResultBody} />
              <Route path="/tourismPage"  exact component={TourismFilterPage} />
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
