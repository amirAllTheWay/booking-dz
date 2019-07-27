import {Component} from "react";
import React from "react";
import 'rc-slider/assets/index.css';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';


import './ResultFilter.css';
import * as actionCreators from "../../../store/actions/actions";
import {connect} from "react-redux";
import {ClipLoader} from "react-spinners";


const Handle = Slider.Handle;

const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
        <Tooltip
            prefixCls="rc-slider-tooltip"
            overlay={value}
            visible={dragging}
            placement="top"
            key={index}
        >
            <Handle value={value} {...restProps} />
        </Tooltip>
    );
};

class ResultFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            priceFilterValue: 50000,
            durationFilterValue: 15,
            hotelStarsValue: 5
        };
    }


    handlePriceFilterChange = (priceValue) => {
        this.setState({priceFilterValue: priceValue}, () =>{
            console.log(" ++++++ handlePriceFilterChange: state: ", this.state);
            this.props.onFilterValuesChanged(this.state);
        });
    }

    handleDurationFilterChange = (durationValue) => {
        this.setState({durationFilterValue: durationValue}, () =>{
            this.props.onFilterValuesChanged(this.state);
        });
    }

    handleHotelStarsFilterChange = (hotelStarsValue) => {
        console.log(" ********** Handle hotel stars filter change", hotelStarsValue);
        this.setState({hotelStarsValue: hotelStarsValue}, () =>{
            console.log(" ++++++ handleHotelStarsFilterChange: state: ", this.state);
            this.props.onFilterValuesChanged(this.state);
        });
    }

    render() {

        let selectedView = null;

        if(this.props.filterMinMax === undefined || this.props.filterMinMax === null) {
            selectedView = (
                <div className='sweet-loading'>
                    <ClipLoader
                        sizeUnit={"px"}
                        size={150}
                        color={'#808080'}
                    />
                </div>
            );
        }
        else {
            selectedView = (
                <div className="divContainer">
                    <div className="FilterText">
                        <h3>Result Filter</h3>
                    </div>

                    <div className="FilterContent">

                        <div className="PriceFilter">
                            <div className="PriceFilterText">Price</div>
                            <div className="MinMaxText">
                                {this.props.filterMinMax.price.min} - {this.props.filterMinMax.price.max}
                            </div>
                            <div className="EmptySpaceText"></div>
                            <div className="SliderText">
                                <Slider min={this.props.filterMinMax.price.min} max={this.props.filterMinMax.price.max} defaultValue={this.props.filterMinMax.price.max} step={1000} handle={handle} onAfterChange={this.handlePriceFilterChange}/>
                            </div>

                        </div>


                        <div className="DurationFilter">
                            <div className="PriceFilterText">Duration</div>
                            <div className="MinMaxText">
                                {this.props.filterMinMax.duration.min} - {this.props.filterMinMax.duration.max}
                            </div>
                            <div className="EmptySpaceText"></div>
                            <div className="SliderText">
                                <Slider min={this.props.filterMinMax.duration.min} max={this.props.filterMinMax.duration.max} defaultValue={this.props.filterMinMax.duration.max} step={2} handle={handle} onAfterChange={this.handleDurationFilterChange}/>
                            </div>
                        </div>

                        <div className="StarsFilter">
                            <div className="PriceFilterText">Hotel stars</div>
                            <div className="MinMaxText">
                                {this.props.filterMinMax.stars.min} - {this.props.filterMinMax.stars.max}
                            </div>
                            <div className="EmptySpaceText"></div>
                            <div className="SliderText">
                                <Slider min={this.props.filterMinMax.stars.min} max={this.props.filterMinMax.stars.max} defaultValue={this.props.filterMinMax.stars.max} step={1} handle={handle} onAfterChange={this.handleHotelStarsFilterChange}/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="ResultFilterContainer">
                {selectedView}
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {

    return {
        onFilterValuesChanged: (filterValues) => {
            dispatch(actionCreators.filterValuesChanged(filterValues));
        }
    };

};


const mapStateToProps = state => {
    return {
        researchType: state.researchType,
        filterMinMax: state.filterMinMax
    };


};

export default connect(mapStateToProps, mapDispatchToProps)(ResultFilter);