import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import { Checkbox, Label } from 'semantic-ui-react';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class Time_range_slider extends React.Component{
    state={
        day_state:{
            checked:true,
            range :[8 , 18]
        }
    }
    onRangeChange = (range) => {
        console.log('heeeeeeeeeeeey ' ,range)
        let newDayState = this.state.day_state
        newDayState.range = range
        this.setState(()=>({day_state:newDayState}))
        const passedState = this.state
        console.log('passed state is : ',passedState)
        this.props.handleChange(this.props.id,passedState)
    }
    onCheckBoxChange = () => {
        let newDayState = this.state.day_state
        
        newDayState.checked=!newDayState.checked
        console.log(newDayState)
        this.setState(()=>({day_state:newDayState}))
        console.log(this.state)
    }
    render(){
        return(
            <div  style={{
                display:'flex',
                justifyContent:'space-around'
                
            }}>
                <Checkbox
                    checked={this.state.day_state.checked}
                    fitted
                    toggle 
                    onChange={ this.onCheckBoxChange}
                />
                {this.state.day_state.range && <Label circular size="large">{this.state.day_state.range[0]} - {this.state.day_state.range[1]}</Label>}
                {this.state.day_state.checked ? (
                    <div style={
                        {
                            width:'60%'
                        }
                    }>
                        <Range
                            min={6} 
                            max={24} 
                            defaultValue={[8, 18]} 
                            onChange={value => this.onRangeChange(value)} 
                            tipFormatter={value => `${value}`} 
                        />
                    </div>          
                    
                ) : (
                    <div style={
                        {
                            width:'60%'
                        }}></div>
                )}     
                
            </div>
        )
    }
}

export default Time_range_slider
