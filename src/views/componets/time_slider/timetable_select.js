import React from 'react'
import TimeRangeSlider from './time_slider'

class TimetableSelect extends React.Component{
    state={
        day1:{
            checked:true , 
            range:undefined
        },
        day2:{
            checked:true , 
            range:undefined
        },
        day3:{
            checked:true , 
            range:undefined
        },
        day4:{
            checked:true , 
            range:undefined
        },
        day5:{
            checked:true , 
            range:undefined
        },
        day6:{
            checked:true , 
            range:undefined
        },
        day7:{
            checked:true , 
            range:undefined
        },
    }        
    
    changeDayStateChange = (key , value) => {
        const day = key
        console.log('key is : ' , key ,'checked is : ', value.day_state.checked ,'range is : ',value.day_state.range)
        let newState = this.state[key]
        console.log(newState)
        newState.checked = value.day_state.checked
        newState.range = value.day_state.range
        
        console.log(newState)
        switch(day){
            case "day1":
                this.setState(() =>({ day1: newState}))
                console.log("day1" , this.state.day1)
                break
            case 1:
                this.setState(() =>({ 1: newState}))
                break
            case 2 :
                this.setState(() =>({ 2: newState}))
                break
            case 3 :
                this.setState(() =>({ 3: newState}))
                break
            case 4:
                this.setState(() =>({ 4: newState}))
                break
            case 5 :
                this.setState(() =>({ 5: newState}))
                break
            case 6 :
                this.setState(() =>({ 6: newState}))
                break
            default:
                break   
        }
        console.log(this.state)
    }
    render(){
        return(
            <div>
                <TimeRangeSlider 
                    id="day1" 
                    day_state={this.state[0]} 
                    handleChange={(key,value) => this.changeDayStateChange(key,value)}
                />
                <br></br>
                <TimeRangeSlider 
                    id="day2"
                    day_state={this.state[1]}
                    handleChange={(key,value) => this.changeDayStateChange(key,value)}                
                />
                <br></br>
                <TimeRangeSlider 
                    id="day3"
                    day_state={this.state[2]}
                    handleChange={(key,value) => this.changeDayStateChange(key,value)}                
                />
                <br></br>                
                <TimeRangeSlider 
                    id="day4"
                    day_state={this.state[3]}
                    handleChange={(key,value) => this.changeDayStateChange(key,value)}                
                />
            </div>
        )
    }
}
export default TimetableSelect