import React from 'react'
import TimeRangeSlider from './time_slider'
import { Input, Label, Grid } from 'semantic-ui-react';

class TimetableSelect extends React.Component{
    state={
        duration:1,
        day1:{
            checked:true , 
            first_range :[8,12],
            second_range:[13,18],
        },
        day2:{
            checked:true , 
            first_range :[8,12],
            second_range:[13,18],
        },
        day3:{
            checked:true ,          
            first_range :[8,12],
            second_range:[13,18],
        },
        day4:{
            checked:true , 
            first_range :[8,12],
            second_range:[13,18],
        },
        day5:{
            checked:true , 
            first_range :[8,12],
            second_range:[13,18],
        },
        day6:{
            checked:true , 
            first_range :[8,12],
            second_range:[13,18],
          
        },
        day7:{
            checked:true , 
            first_range :[8,12],
            second_range:[13,18],
        },
    }        
    
    change_first_range = (key , value) => {
        const day = key
        console.log('key is : ' , key ,'checked is : ', value.day_state.checked ,'first range is : ',value.day_state.first_range)
        let newState = this.state[key]
        console.log(newState)
        newState.checked = value.day_state.checked
        newState.first_range = value.day_state.first_range
        
        console.log(newState)
    
    
        switch(day){
            case "day1":
                this.setState(() =>({ day1: newState}))
                console.log("day1" , this.state.day1)
                break
            case "day2":
                this.setState(() =>({ day2: newState}))
                break
            case "day3" :
                this.setState(() =>({ day3: newState}))
                break
            case "day4" :
                this.setState(() =>({ day4: newState}))
                break
            case "day5":
                this.setState(() =>({ day5: newState}))
                break
            case "day6" :
                this.setState(() =>({ day6: newState}))
                break
            case "day7" :
                this.setState(() =>({ day7: newState}))
                break
            default:
                break   
        }
        console.log(this.state)
    }

    change_second_range = (key , value) => {
        const day = key
        console.log('key is : ' , key ,'checked is : ', value.day_state.checked ,'second range is : ',value.day_state.second_range)
        let newState = this.state[key]
        console.log(newState)
        newState.checked = value.day_state.checked
        newState.second_range = value.day_state.second_range
        
        console.log(newState)

        switch(day){
            case "day1":
                this.setState(() =>({ day1: newState}))
                console.log("day1" , this.state.day1)
                break
            case "day2":
                this.setState(() =>({ day2: newState}))
                break
            case "day3" :
                this.setState(() =>({ day3: newState}))
                break
            case "day4" :
                this.setState(() =>({ day4: newState}))
                break
            case "day5":
                this.setState(() =>({ day5: newState}))
                break
            case "day6" :
                this.setState(() =>({ day6: newState}))
                break
            case "day7" :
                this.setState(() =>({ day7: newState}))
                break
            default:
                break   
        }
        console.log(this.state)
    
    }

    on_duration_change = (e) => {
        const value = e.target.value
        let newState = this.state.duration
        newState = value
        this.setState(() => ({duration:newState}))
    }
    render(){
        return(
            <div>
                
                <TimeRangeSlider 
                    id="day1" 
                    day_state={this.state[0]} 
                    handleFirstRange={(key,value) => this.change_first_range(key,value)}
                    handleSecondRange={(key,value) => this.change_second_range(key,value)}
                />
                <br></br>
                <TimeRangeSlider 
                    id="day2"
                    day_state={this.state[1]}
                    handleFirstRange={(key,value) => this.change_first_range(key,value)}
                    handleSecondRange={(key,value) => this.change_second_range(key,value)}
                />
                <br></br>
                <TimeRangeSlider 
                    id="day3"
                    day_state={this.state[2]}
                    handleFirstRange={(key,value) => this.change_first_range(key,value)}
                    handleSecondRange={(key,value) => this.change_second_range(key,value)}
                />
                <br></br>                
                <TimeRangeSlider 
                    id="day4"
                    day_state={this.state[3]}
                    handleFirstRange={(key,value) => this.change_first_range(key,value)}
                    handleSecondRange={(key,value) => this.change_second_range(key,value)}
                />
                <br></br><br></br>
                <Grid centered>
                    <Grid.Column computer={5}>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <div style={{width:'60%' , verticalAlign:'center'}}>
                                <Label>
                                    طول هر سانس
                                </Label>
                            </div>
                            <div style={{width:'30%'}}>
                                <Input
                                    onChange={this.on_duration_change}
                                    size="mini"
                                    value={this.state.duration}
                                />
                            </div>
                            
                        </div>
                        
                    </Grid.Column>
                    
                </Grid>
                
             </div>
        )
    }
}
export default TimetableSelect