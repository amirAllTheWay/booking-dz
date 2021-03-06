import {Component} from "react";
import React from "react";
import './OfferQuickView.css';
import {connect} from "react-redux";
import PhotoDisplayer from "./PhotoDisplayer/PhotoDisplayer";
import DetailTabs from "./DetailTabs/DetailTabs";

class OfferQuickView extends Component {

    render() {
        let selectedView = null;
        if(this.props.selectedQuickViewOffer === undefined || this.props.selectedQuickViewOffer === null) {
            selectedView = (
                <div>
                </div>
            );
        }
        else {
            selectedView = (
                    <div className="OfferQuickView">
                        <div>
                            <PhotoDisplayer/>
                        </div>
                        <div>
                            <DetailTabs selectedQuickViewOffer={this.props.selectedQuickViewOffer}/>
                        </div>
                    </div>
            );
        }

        return (
            <div className="QVPageContainer">
                {selectedView}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedQuickViewOffer: state.selectedQuickViewOffer
    }
};

export default connect(mapStateToProps)(OfferQuickView);


