import React from "react";
import * as add_service_actions from '../../../core/add_service/add_service_actions';
import { Button, Segment, Form ,Grid,Label, Divider, Input} from 'semantic-ui-react'
import PersianRex from "persian-rex";
import TimeRangeSlider from "../time_slider/time_slider";
import {connect} from "react-redux";
import * as business_page_actions from '../../../core/business_page/business_page_actions'
import {change_panel} from '../../../core/main_page/active_panel_actions'

class Add_service extends React.Component{
        state = {
            informations:{
                service_name:"",
               
                description:"",
                price:""
                
                },
                duration:"",
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
            price_error:false,
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

        validate_contact_number = () => {
            const contact_number = this.state.informations.contact_number;
            if(/[0-9+]/.test(contact_number)) {
                this.setState(()=>({contact_number_error:false}));      
            }else{
                this.setState(()=>({contact_number_error:true}));       
                
            }
    
        }
        validate_price = () => {
            const price = this.state.informations.price;
            if(/[0-9.]/.test(price)) {
                this.setState(()=>({price_error:false}));      
            }else{
                this.setState(()=>({price_error:true}));       
                
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
        onSubmit = () => {
            console.log(this.state.informations)
            const d = [{open:this.state.day1.checked ? "1" : "0",
                      start_time:this.state.day1.first_range[0].toString() + ":00",
                      end_time:this.state.day1.first_range[1].toString()+ ":00",
                      duration:this.state.duration,
                      rest_start_time:this.state.day1.second_range[0].toString()+ ":00",
                      rest_end_time:this.state.day1.second_range[1].toString()+ ":00"  
                        },
                    {open:this.state.day2.checked ? "1" : "0",
                    start_time:this.state.day2.first_range[0].toString()+ ":00",
                    end_time:this.state.day2.first_range[1].toString()+ ":00",
                    duration:this.state.duration,
                    rest_start_time:this.state.day2.second_range[0].toString()+ ":00",
                    rest_end_time:this.state.day2.second_range[1].toString()+ ":00"  
                        },
                    {open:this.state.day3.checked ? "1" : "0",
                    start_time:this.state.day3.first_range[0].toString()+ ":00",
                    end_time:this.state.day3.first_range[1].toString()+ ":00",
                    duration:this.state.duration,
                    rest_start_time:this.state.day3.second_range[0].toString()+ ":00",
                    rest_end_time:this.state.day3.second_range[1].toString()+ ":00"  
                        },
                    {open:this.state.day4.checked ? "1" : "0",
                    start_time:this.state.day4.first_range[0].toString()+ ":00",
                    end_time:this.state.day4.first_range[1].toString()+ ":00",
                    duration:this.state.duration,
                    rest_start_time:this.state.day4.second_range[0].toString()+ ":00",
                    rest_end_time:this.state.day4.second_range[1].toString()+ ":00"  
                        },
                    {open:this.state.day5.checked ? "1" : "0",
                    start_time:this.state.day5.first_range[0].toString()+ ":00",
                    end_time:this.state.day5.first_range[1].toString()+ ":00",
                    duration:this.state.duration,
                    rest_start_time:this.state.day5.second_range[0].toString()+ ":00",
                    rest_end_time:this.state.day5.second_range[1].toString()+ ":00"  
                        },
                    {open: this.state.day6.checked ? "1" : "0",
                    start_time:this.state.day6.first_range[0].toString()+ ":00",
                    end_time:this.state.day6.first_range[1].toString()+ ":00",
                    duration:this.state.duration,
                    rest_start_time:this.state.day6.second_range[0].toString()+ ":00",
                    rest_end_time:this.state.day6.second_range[1].toString()+ ":00"  
                        },
                    {open:this.state.day7.checked ? "1" : "0",
                    start_time:this.state.day7.first_range[0].toString()+ ":00",
                    end_time:this.state.day7.first_range[1].toString()+ ":00",
                    duration:this.state.duration,
                    rest_start_time:this.state.day7.second_range[0].toString()+ ":00",
                    rest_end_time:this.state.day7.second_range[1].toString()+ ":00"  
                        }
                    
                    ]
        
                
                
            console.log(d)
            this.props.add_service(this.state.informations,d,this.props.business_id)
            this.props.get_business_info(this.props.business_id)
            this.props.change_panel('business_page')
        }

        render(){
            return(
                <Grid classservice_name="add_service_form" verticalAlign="right">
                <Grid.Row verticalAlign="middle">
                    <Grid.Column computer={3} tablet={2} mobile={1} ></Grid.Column>
                    <Grid.Column computer={10} tablet={12} mobile={14}>
                        <Segment raised color="blue" padded>  
                        <Form onSubmit={this.onSubmit}>
                            <Form.Field>
                                <Form.Input
                                    fluid
                                    label="نام سرویس"
                                    name="service_name"
                                    onBlur={this.validate_service_name}
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
                                    label="قیمت سرویس"
                                    name="price"
                                    onBlur={this.validate_price}
                                    value={this.state.informations.price}
                                    onChange={this.handle_change}
                                
                                    
                                />

                                {this.state.price_error && (
                                    <Label basic pointing color="red">
                                        تنها میتوانید از اعداد استفاده کنید. 
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
                                {this.state.description_error && (
                                    <Label basic pointing color="red">
                                        تنها میتوانید از حروف فارسی استفاده کنید
                                    </Label>    
                                )} 
                        
                            </Form.Field>
                    <Divider horizontal> زمانبندی سانس ها</Divider>
                    <Grid >
                        <Grid.Column computer={3} tablet={2} mobile={3} > 
                                    <span><b>روز هفته</b></span>
                        </Grid.Column>
                        <Grid.Column computer={3} tablet={2} mobile={3} > 
                                    
                        </Grid.Column>
                        <Grid.Column computer={3} tablet={2} mobile={3} > 
                                    <span><b>بازه ی استراحت</b></span>
                        </Grid.Column>
                        <Grid.Column computer={3} tablet={2} mobile={3} > 
                                    <span><b>بازه ی کاری</b></span>
                        </Grid.Column>
                    
                    </Grid>
                    <Grid >
                    <Grid.Column computer={3} tablet={2} mobile={3} > 
                             <Grid.Row verticalAlign>   <span><b>شنبه</b>  </span></Grid.Row>
                             
                             
                               
                    </Grid.Column>
                    </Grid>
                    <TimeRangeSlider 
                    id="day1" 
                    day_state={this.state[0]} 
                    handleFirstRange={(key,value) => this.change_first_range(key,value)}
                    handleSecondRange={(key,value) => this.change_second_range(key,value)}
                />
                
                <Grid.Column computer={3} tablet={2} mobile={3} > 
                            
                            <Grid.Row verticalAlign>   <span><b>یکشنبه</b>  </span></Grid.Row>              
                               
                    </Grid.Column>
                <TimeRangeSlider 
                    id="day2"
                    day_state={this.state[1]}
                    handleFirstRange={(key,value) => this.change_first_range(key,value)}
                    handleSecondRange={(key,value) => this.change_second_range(key,value)}
                />
                
                <Grid.Column computer={3} tablet={2} mobile={3} > 
                <Grid.Row verticalAlign>   <span><b>دوشنبه</b>  </span></Grid.Row>
                
                
                  
                </Grid.Column>
                <TimeRangeSlider 
                    id="day3"
                    day_state={this.state[2]}
                    handleFirstRange={(key,value) => this.change_first_range(key,value)}
                    handleSecondRange={(key,value) => this.change_second_range(key,value)}
                />
                <Grid.Column computer={3} tablet={2} mobile={3} > 
                <Grid.Row verticalAlign>   <span><b>سه‌شنبه</b>  </span></Grid.Row>
                
                
                  
                </Grid.Column>
                <TimeRangeSlider 
                    id="day4"
                    day_state={this.state[3]}
                    handleFirstRange={(key,value) => this.change_first_range(key,value)}
                    handleSecondRange={(key,value) => this.change_second_range(key,value)}
                />
                <Grid.Column computer={3} tablet={2} mobile={3} > 
                <Grid.Row verticalAlign>   <span><b>چهارشنبه</b>  </span></Grid.Row>
                
                
                  
                </Grid.Column>
                <TimeRangeSlider 
                    id="day5"
                    day_state={this.state[4]}
                    handleFirstRange={(key,value) => this.change_first_range(key,value)}
                    handleSecondRange={(key,value) => this.change_second_range(key,value)}
                />
                <Grid.Column computer={3} tablet={2} mobile={3} > 
                <Grid.Row verticalAlign>   <span><b>پنجشنبه</b>  </span></Grid.Row>
                
                
                  
                </Grid.Column>
                <TimeRangeSlider 
                    id="day6"
                    day_state={this.state[5]}
                    handleFirstRange={(key,value) => this.change_first_range(key,value)}
                    handleSecondRange={(key,value) => this.change_second_range(key,value)}
                />
                <Grid.Column computer={3} tablet={2} mobile={3} > 
                <Grid.Row verticalAlign>   <span><b>جمعه</b>  </span></Grid.Row>
                
                
                  
                </Grid.Column>                
                <TimeRangeSlider 
                    id="day7"
                    day_state={this.state[6]}
                    handleFirstRange={(key,value) => this.change_first_range(key,value)}
                    handleSecondRange={(key,value) => this.change_second_range(key,value)}
                />
                <br></br><br></br>
                <Grid centered>
                    <Grid.Column computer={5}>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <div style={{width:'60%' , verticalAlign:'center'}}>
                             {/*   <Label>
                                    طول هر سانس
                             </Label>*/}
                            </div>
                            <div style={{width:'30%'}} dir="rtl">
                            <Form.Field>
                            <Form.Input inline
                             label="طول هر سانس"
                             onChange={this.on_duration_change}
                            />

                            {/*
                                <Input
                                    onChange={this.on_duration_change}
                                    size="mini"
                                    value={this.state.duration}
                             /> */}
                             </Form.Field>
                             <Button primary type='submit'>ایجاد سرویس</Button>
                            </div>
                            
                        </div>
                        
                    </Grid.Column>
                    
                </Grid>
                
             
                                            
                            
                        </Form>
                        </Segment>
                        
                    </Grid.Column>
                
                </Grid.Row>
                
            </Grid>
            

            )
        }
}
const mapStateToProps = (state) => {
    
    return{
        state:state,
        business_id:state.business_page_reducer.business.id
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        add_service : (informations, days,business_id) => dispatch(add_service_actions.add_service(informations, days,business_id)),
        get_business_info : (business_id) => dispatch(business_page_actions.get_business_info(business_id)),
        change_panel:(panel_name) => dispatch(change_panel(panel_name)),

    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Add_service);