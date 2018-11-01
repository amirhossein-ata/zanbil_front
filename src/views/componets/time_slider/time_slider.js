import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React from 'react';
import Slider from 'rc-slider';
import { Checkbox, Label, Input } from 'semantic-ui-react';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class Time_range_slider extends React.Component{
    state={
        day_state:{
            checked:true,
            first_range :[8,12],
            second_range:[13,18],
            duration:1
        }
    }
    onFirstRangeChange = (first_range) => {
        console.log('heeeeeeeeeeeey first range' ,first_range)
        let newDayState = this.state.day_state
        newDayState.first_range = first_range
        this.setState(()=>({day_state:newDayState}))
        const passedState = this.state
        console.log('passed state is : ',passedState)
        this.props.handleFirstRange(this.props.id,passedState)
    }

    onSecondRangeChange= (second_range) => {
        console.log('heeeeeeeeeeeey second range :' ,second_range)
        let newDayState = this.state.day_state
        newDayState.second_range = second_range
        this.setState(()=>({day_state:newDayState}))
        const passedState = this.state
        console.log('passed state is : ',passedState)
        this.props.handleSecondRange(this.props.id,passedState)    
    }

    onCheckBoxChange = () => {
        let newDayState = this.state.day_state
        
        newDayState.checked=!newDayState.checked
        console.log(newDayState)
        this.setState(()=>({day_state:newDayState}))
        console.log(this.state)
    }

    onSansDurationChange = () => {
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

                
                {this.state.day_state.checked ? (
                    <div style={
                        {
                            width:'60%',
                            display:'flex',
                            justifyContent:'space-around'
                        }
                    }>
                        <div style={{width:'40%',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                            <div style={{width:'60%'}}>
                                <Label color size="medium">{this.state.day_state.first_range[1]} - {this.state.day_state.first_range[0]}</Label>
                            </div>
                            <Range
                                min={6} 
                                max={24} 
                                defaultValue={[8, 18]} 
                                onChange={value => this.onFirstRangeChange(value)} 
                                tipFormatter={value => `${value}`} 
                            />
                        </div>
                
                        <div style={{width:'40%',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                            <div style={{width:'60%'}}>
                                <Label color size="medium">{this.state.day_state.second_range[1]} - {this.state.day_state.second_range[0]}</Label>
                            </div>
                            <Range
                                min={6} 
                                max={24} 
                                defaultValue={[8, 18]} 
                                onChange={value => this.onSecondRangeChange(value)} 
                                tipFormatter={value => `${value}`} 
                            />
                        </div>
                    
                    </div>          
                        
                    ) : (
                        <div style={{width:'60%'}}></div>
                    )}     
                
            </div>
        )
    }
}

export default Time_range_slider
