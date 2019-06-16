import {Component} from "react";
import React from "react";
import 'rc-slider/assets/index.css';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';


import './ResultFilter.css';


const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
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

    handleSearchClick = (event) => {
        console.log("*** value *** ", event.target.value);
    }
    render() {
        const wrapperStyle = { width: 400, margin: 50 };
        return (
            <div className="ResultFilter">
                <h3>Result Filter</h3>


                <div className="PriceFilter">
                    <h4 className="PriceFilterText">Prix</h4>
                    <div className="PriceSlider">
                        <Slider min={25000} max={65000} defaultValue={55000} step={5000} handle={handle} />
                    </div>
                </div>

                <div className="PriceFilter">
                    <h4 className="PriceFilterText">Durée</h4>
                    <div className="PriceSlider">
                        <Slider min={5} max={21} defaultValue={8} step={2} handle={handle} />
                    </div>
                </div>

                <div className="PriceFilter">
                    <h4 className="PriceFilterText">Etoiles</h4>
                    <div className="PriceSlider">
                        <Slider min={1} max={5} defaultValue={3} step={1} handle={handle} />
                    </div>
                </div>

            </div>
        );
    }
}

export default ResultFilter;