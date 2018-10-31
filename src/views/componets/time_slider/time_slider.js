import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class Time_range_slider extends React.Component{
    state={
        range :undefined
    }

    onRangeChange = (range) => {
        console.log('heeeeeeeeeeeey ' ,range)
        this.setState(()=>({range}))
    }
    render(){
        return(
            <div>
                <p>Range with custom handle</p>
                <Range min={6} max={24} defaultValue={[8, 18]} onChange={value => this.onRangeChange(value)} tipFormatter={value => `${value}`} />
            </div>
        )
    }
}

export default Time_range_slider
