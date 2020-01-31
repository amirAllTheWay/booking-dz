import {Component} from "react";
import React from "react";
import './PhotoDisplayer.css';
import {connect} from "react-redux";


class PhotoDisplayer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mainIndex : 0,
        };
    }

    carousselPhotoClicked(index) {
        this.setState({
            mainIndex: index
        });
    }

    render() {

        return (
            <div className="PhotoDisplayer">
               <div className="MainPhoto">
                   <img src={`${this.props.selectedQuickViewOffer.hotelPhotos[this.state.mainIndex]}`} width="100%" height="100%" alt=""/>
               </div>
                <div className="Caroussel">
                        {this.props.selectedQuickViewOffer.hotelPhotos.map((photo, index) => {
                            return <div key = {index} className="CarousselElement" onClick={() => this.carousselPhotoClicked(index)}> <img src={`${photo}`} width="90px" height="80px" alt=""/></div>
                        })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedQuickViewOffer: state.selectedQuickViewOffer
    }
};

export default connect(mapStateToProps)(PhotoDisplayer);

