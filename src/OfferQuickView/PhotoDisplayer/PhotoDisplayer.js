import {Component} from "react";
import React from "react";
import './PhotoDisplayer.css';
import {connect} from "react-redux";
import {ClipLoader} from "react-spinners";


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
        let selectedView = null;

        if (this.props.selectedQuickViewOffer === null || this.props.selectedQuickViewOffer === undefined) {
            selectedView = (
                <div className='sweet-loading'>
                    <ClipLoader
                        sizeUnit={"px"}
                        size={150}
                        color={'#808080'}
                    />
                </div>
            );
        } else {
            console.log("------- selectedQuickViewOffer: ", this.props.selectedQuickViewOffer);
            selectedView = (
                <div>
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
        return (
            <div className="PhotoDisplayer">
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

export default connect(mapStateToProps)(PhotoDisplayer);

