import React from "react";
import { Button, Segment, Form ,Grid,Label, Divider} from 'semantic-ui-react'
import PersianRex from "persian-rex";
import TimeRangeSlider from "../time_slider/time_slider";

class Add_service_form extends React.Component{
        state = {
            informations:{
                service_name:"",
                contact_number:"",
                description:""},
                
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
            service_name_error:false,
            contact_number_error:false,
            description_error:false
        }
        handle_change= (e) => {
            const input = e.target.value;
            let informations = this.state.informations;
            const input_name = e.target.name
            informations[input_name] = input
            this.setState(() => ({informations : informations}))    
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

        validate_contact_number = () => {
            const contact_number = this.state.informations.contact_number;
            if(/[0-9+]/.test(contact_number)) {
                this.setState(()=>({contact_number_error:false}));      
            }else{
                this.setState(()=>({contact_number_error:true}));       
                
            }
    
        }
        validate_address = () => {
            const address = this.state.informations.address;
            if(!PersianRex.punctuation.test(address)) {
                this.setState(()=>({address_error:true}));      
            }else{
                this.setState(()=>({address_error:false}));       
                
            }
        }
    
        validate_descriptopn = () => {
            const description = this.state.informations.description;
            if(!PersianRex.text.test(description) || /-/.test(description)) {
                this.setState(()=>({description_error:true}));      
            }else{
                this.setState(()=>({description_error:false}));       
                
            }
        }

        render(){
            return(
                <Grid classservice_name="add_service_form">
                <Grid.Row verticalAlign="middle">
                    <Grid.Column computer={3} tablet={2} mobile={1} ></Grid.Column>
                    <Grid.Column computer={10} tablet={12} mobile={14}>
                        <Segment raised color="blue" padded>  
                        <Form onSubmit={this.onSubmit}>
                            <Form.Field>
                                <Form.Input
                                    fluid
                                    label="نام سرویس"
                                    name="service_service_name"
                                    onBlur={this.validate_service_service_name}
                                    value={this.state.informations.service_name}
                                    onChange={this.handle_change}
                                
                                    
                                />

                                {this.state.service_name_error && (
                                    <Label basic pointing color="red">
                                        تنها میتوانید از حروف فارسی استفاده کنید. 
                                    </Label>    
                                )} 
                        
                            </Form.Field>
                            <Form.Field>
                            <Form.Input
                                fluid
                                error={this.state.email_error}
                                label=" شماره ی تماس"
                                name="contact_number"
                                onBlur={this.validate_contact_number}
                                value={this.state.informations.contact_number}
                                onChange={this.handle_change}                                
                            />

                            {this.state.email_error && (
                                <Label basic pointing color="red">
                                   تنها میتوانید از اعداد ۰ تا ۹ استفاده کنید.
                                </Label>    
                            )} 
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    fluid
                                    label="توضیحات"
                                    name="description"
                                    onBlur={this.validate_descriptopn}
                                    value={this.state.informations.description}
                                    onChange={this.handle_change}
                                />
                                {this.state.password_error && (
                                    <Label basic pointing color="red">
                                        تنها میتوانید از حروف فارسی استفاده کنید
                                    </Label>    
                                )} 
                        
                            </Form.Field>
                            
                            
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
                                <br></br>                
                            <TimeRangeSlider 
                                    id="day5"
                                    day_state={this.state[4]}
                                    handleChange={(key,value) => this.changeDayStateChange(key,value)}                
                                />
                                <br></br>                
                            <TimeRangeSlider 
                                    id="day6"
                                    day_state={this.state[5]}
                                    handleChange={(key,value) => this.changeDayStateChange(key,value)}                
                                />
                                <br></br>                
                            <TimeRangeSlider 
                                    id="day7"
                                    day_state={this.state[7]}
                                    handleChange={(key,value) => this.changeDayStateChange(key,value)}                
                                />
                                <br></br>                
                            
                                            
                            <Button primary type='submit'>ایجاد سرویس</Button>
                        </Form>
                        </Segment>
                        
                    </Grid.Column>
                
                </Grid.Row>
                
            </Grid>
            

            )
        }
}

export default Add_service_form;