import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React from 'react';
import Slider from 'rc-slider';
import { Checkbox, Label, Input,Grid } from 'semantic-ui-react';

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
        let newDayState = this.state.day_state
        newDayState.first_range = first_range
        this.setState(()=>({day_state:newDayState}))
        const passedState = this.state
        console.log('passed state is : ',passedState)
        this.props.handleFirstRange(this.props.id,passedState)
    }

    onSecondRangeChange= (second_range) => {
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
        const passedState = this.state
        this.props.handleOpenChecked(this.props.id,passedState)
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
            <div>
            {this.state.day_state.checked ? (
            
                <Grid>

                    <Grid.Column width="2">
                        <br></br>
                        <Checkbox
                            checked={this.state.day_state.checked}
                            fitted
                            toggle 
                            onChange={ this.onCheckBoxChange}
                        /> 
                    </Grid.Column>
                    <Grid.Column width="1"></Grid.Column>
                    <Grid.Column width="6">
                        <div>
                            <div>
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
        
                    </Grid.Column>
                    <Grid.Column width="1"></Grid.Column>
                    <Grid.Column width="6">
                        <div >
                            <div>
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
    
                    </Grid.Column>
                </Grid>
            ):
        (
            <Grid>
                <Grid.Column width="2">
                    <Checkbox
                        checked={this.state.day_state.checked}
                        fitted
                        toggle 
                        onChange={ this.onCheckBoxChange}
                    /> 
                </Grid.Column>
                
                <Grid.Column width="14" textAlign="center">
                    تعطیل   
                </Grid.Column>
            </Grid>
        )}
        </div>
        )
    }
}

export default Time_range_slider
