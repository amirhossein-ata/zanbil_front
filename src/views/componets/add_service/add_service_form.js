import React from "react";
import * as add_service_actions from '../../../core/add_service/add_service_actions';
import { Button, Segment, Form ,Grid,Label, Divider, Input, Header, Checkbox} from 'semantic-ui-react'
import PersianRex from "persian-rex";
import TimeRangeSlider from "../time_slider/time_slider";
import {connect} from "react-redux";
import * as business_page_actions from '../../../core/business_page/business_page_actions'
import {change_panel} from '../../../core/main_page/active_panel_actions'
import Fade from 'react-reveal/Fade';

class Add_service extends React.Component{
    constructor(props){
        super(props)

        this.onSubmit = this.onSubmit.bind(this)
    }
    state = {
        informations:{
            service_name:"",
            cancellation_range:'',
            description:"",
            price:"",
            capacity: 1, 
            is_protected: 0,
            password:""
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
        capacity_error:false,
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

    change_day_open = (key , value) => {
        const day = key
        let newState =this.state[key]
        newState.checked = value.day_state.checked
        switch(day){
            case "day1":
                this.setState(() =>({ day1: newState}))
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
    }
    on_duration_change = (e) => {
        const value = e.target.value
        
        let newState = this.state.duration
        newState = value
        
        this.setState(() => ({duration:newState}))
    }
    on_ckeck_box_click = () =>{
        let informations = this.state.informations
        if (this.state.informations.is_protected){
            informations.is_protected = 0
        }
         else{
            informations.is_protected = 1
         }
        console.log(this.state.informations.is_protected)
        this.setState(() =>({informations: informations}))
    }
    validate_service_name = () => {
        const name = this.state.informations.service_name
        if(!PersianRex.text.test(name)) {
            this.setState(()=>({service_name_error:true}));      
        }else{
            this.setState(()=>({service_name_error:false}));       
            
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
    validate_capacity = () => {
            const price = this.state.informations.capacity;
            if(/[0-9]/.test(price)) {
                this.setState(()=>({capacity_error:false}));      
            }else{
                this.setState(()=>({capacity_error:true}));       
                
        }

    }
    validate_address = () => {
        const address = this.state.informations.address;
        if(PersianRex.punctuation.test(address)|| /-[0-9]/.test(address)) {
            this.setState(()=>({address_error:false}));      
        }else{
            this.setState(()=>({address_error:true}));       
            
        }
    }

    validate_descriptopn = () => {
        const description = this.state.informations.description;
        if(PersianRex.text.test(description) || /-[0-9]/.test(description)) {
            this.setState(()=>({description_error:false}));      
        }else{
            this.setState(()=>({description_error:true}));       
            
        }
    

    }
    async onSubmit(){
        console.log(this.state.day1)
        const d = [
                    {   capacity:this.state.informations.capacity,
                        open:this.state.day1.checked ? "1" : "0",
                        start_time:this.state.day1.first_range[0],
                        end_time:this.state.day1.second_range[1],
                        duration:this.state.duration,
                        rest_start_time:this.state.day1.first_range[1],
                        rest_end_time:this.state.day1.second_range[0]  
                    },
                    {   capacity:this.state.informations.capacity,
                        open:this.state.day2.checked ? "1" : "0",
                        start_time:this.state.day2.first_range[0],
                        end_time:this.state.day2.second_range[1],
                        duration:this.state.duration,
                        rest_start_time:this.state.day2.first_range[1],
                        rest_end_time:this.state.day2.second_range[0]  
                    },
                    {   capacity:this.state.informations.capacity,
                        open:this.state.day3.checked ? "1" : "0",
                        start_time:this.state.day3.first_range[0],
                        end_time:this.state.day3.second_range[1],
                        duration:this.state.duration,
                        rest_start_time:this.state.day3.first_range[1],
                        rest_end_time:this.state.day3.second_range[0]  
                    },
                    {   capacity:this.state.informations.capacity,
                        open:this.state.day4.checked ? "1" : "0",
                        start_time:this.state.day4.first_range[0],
                        end_time:this.state.day4.second_range[1],
                        duration:this.state.duration,
                        rest_start_time:this.state.day4.first_range[1],
                        rest_end_time:this.state.day4.second_range[0]  
                    },
                    {   capacity:this.state.informations.capacity,
                        open:this.state.day5.checked ? "1" : "0",
                        start_time:this.state.day5.first_range[0],
                        end_time:this.state.day5.second_range[1],
                        duration:this.state.duration,
                        rest_start_time:this.state.day5.first_range[1],
                        rest_end_time:this.state.day5.second_range[0]  
                    },
                    {   capacity:this.state.informations.capacity,
                        open: this.state.day6.checked ? "1" : "0",
                        start_time:this.state.day6.first_range[0],
                        end_time:this.state.day6.second_range[1],
                        duration:this.state.duration,
                        rest_start_time:this.state.day6.first_range[1],
                        rest_end_time:this.state.day6.second_range[0]  
                    },
                    {   capacity:this.state.informations.capacity,
                        open:this.state.day7.checked ? "1" : "0",
                        start_time:this.state.day7.first_range[0],
                        end_time:this.state.day7.second_range[1],
                        duration:this.state.duration,
                        rest_start_time:this.state.day7.first_range[1],
                        rest_end_time:this.state.day7.second_range[0].toString()+":00"  
                    }
                    
                ]
    
        // await this.props.add_service(this.state.informations,d,this.props.business_id)
        // await this.props.get_business_info(this.props.business_id)
        this.props.set_service_information(this.state.informations,d,this.props.business_id)
        this.props.change_panel('preview_timetable_on_addService')
    }


    render(){
        return(
            <Grid centered textAlign="right">
                <Grid.Column width={13} textAlign="right">  
                    <Header dividing>
                        فرم اضافه کردن سرویس
                        <Header.Subheader>اطلاعات سرویس خود را وارد کنید</Header.Subheader>
                    </Header>              
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group widths="equal">
                            <Form.Field>
                                <Form.Input
                                    fluid
                                    label="نام سرویس"
                                    name="service_name"
                                    error={this.service_name_error}
                                    onBlur={this.validate_service_name}
                                    value={this.state.informations.service_name}
                                    onChange={this.handle_change}
                                
                                    
                                />
                                <Fade bottom collapse when={this.state.service_name_error}>
                                        <div className="invalid-feedback" 
                                        style={{ display: 'block',color:"#820b0b" }}
                                        >
                                        لطفا فقط از زبان فارسی استفاده کنید        
                                        </div>
                                    </Fade>

                                
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
                                <Fade bottom collapse when={this.state.price_error}>
                                        <div className="invalid-feedback" 
                                        style={{ display: 'block',color:"#820b0b" }}
                                        >
                                        تنها میتوانید از اعداد و . استفاده کنید
                                        </div>
                                    </Fade>

                        
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    fluid
                                    label="ظرفیت"
                                    name="capacity"
                                    onBlur={this.validate_capacity}
                                    value={this.state.informations.capacity}
                                    onChange={this.handle_change}
                                
                                    
                                />
                                <Fade bottom collapse when={this.state.capacity_error}>
                                        <div className="invalid-feedback" 
                                        style={{ display: 'block',color:"#820b0b" }}
                                        >
                                        تنها میتوانید از اعداد استفاده کنید
                                        </div>
                                    </Fade>

                            </Form.Field>
                        </Form.Group>    
                        <Form.Group>
                            <Form.Field width="5">
                                <br></br>  
                                <Checkbox onClick={this.on_ckeck_box_click} label='سرویس مخصوص اعضا' />
                            </Form.Field>
                            
                           {} <Form.Field inline width="6">
                           <Fade left collapse when={this.state.informations.is_protected}>
                                    <label> رمز عبور</label>
                                    <Input 
                                        fluid
                                        name="password"
                                        type='password'
                                        // error={this.service_name_error}
                                        // onBlur={this.validate_service_name}
                                        value={this.state.informations.password}
                                        onChange={this.handle_change}    
                                    />
                                    </Fade> 
                                </Form.Field>
                                   
                        </Form.Group> 
                        <Form.Field>
                            <Form.Input
                                fluid
                                label="بازه‌ی مجاز لغو رزرو"
                                name="cancellation_range"
                                value={this.state.informations.cancellation_range}
                                onChange={this.handle_change}
                            
                                
                            />
                        </Form.Field>
                              
                        <Form.Field>
                            <Form.TextArea
                              
                                label="توضیحات"
                                name="description"
                                onBlur={this.validate_descriptopn}
                                value={this.state.informations.description}
                                onChange={this.handle_change}
                            />
                            <Fade bottom collapse when={this.state.description_error}>
                                        <div className="invalid-feedback" 
                                        style={{ display: 'block',color:"#820b0b" }}
                                        >
                                        لطفا فقط از زبان فارسی استفاده کنید        
                                        </div>
                                    </Fade>

                            
                    
                        </Form.Field>
                        
                        <Divider section horizontal> زمانبندی سانس ها</Divider>
                        <Grid >
                            <Grid.Column width="2" textAlign="center">روز هفته</Grid.Column>
                            <Grid.Column width="4"></Grid.Column>
                            <Grid.Column width="3" textAlign="center">
                                <h4>بازه ی کاری اول</h4>                                
                            </Grid.Column>
                            <Grid.Column width="2"></Grid.Column>
                            <Grid.Column width="5" textAlign="center">
                                <h4>بازه ی کاری دوم</h4>
                            </Grid.Column>
                        </Grid>
                        <Grid>
                            <Grid.Column width="2" textAlign="center"> 
                                <div style={{paddingTop:'13%'}}>
                                    <h5>شنبه</h5>  
                                </div>    
                            </Grid.Column>
                            <Grid.Column width="14" textAlign="center">
                            
                                <TimeRangeSlider 
                                    id="day1" 
                                    day_state={this.state[0]} 
                                    handleFirstRange={(key,value) => this.change_first_range(key,value)}
                                    handleSecondRange={(key,value) => this.change_second_range(key,value)}
                                    handleOpenChecked={(key,value) => this.change_day_open(key,value)}
                                />
                            </Grid.Column>
                        
                        </Grid>
                        <Grid>
                            <Grid.Column width="2" textAlign="center"> 
                                <div style={{paddingTop:'13%'}}>
                                    <h5>۱شنبه</h5>  
                                </div>    
                            </Grid.Column>
                            <Grid.Column width="14" textAlign="center">
                            
                                <TimeRangeSlider 
                                    id="day2" 
                                    day_state={this.state[1]} 
                                    handleFirstRange={(key,value) => this.change_first_range(key,value)}
                                    handleSecondRange={(key,value) => this.change_second_range(key,value)}
                                    handleOpenChecked={(key,value) => this.change_day_open(key,value)}
                                />
                            </Grid.Column>
                        
                        </Grid>
                        
                        <Grid>
                            <Grid.Column width="2" textAlign="center"> 
                                <div style={{paddingTop:'13%'}}>
                                    <h5>۲شنبه</h5>  
                                </div>    
                            </Grid.Column>
                            <Grid.Column width="14" textAlign="center">
                            
                                <TimeRangeSlider 
                                    id="day3" 
                                    day_state={this.state[2]} 
                                    handleFirstRange={(key,value) => this.change_first_range(key,value)}
                                    handleSecondRange={(key,value) => this.change_second_range(key,value)}
                                    handleOpenChecked={(key,value) => this.change_day_open(key,value)}
                                />
                            </Grid.Column>
                        
                        </Grid>
                        <Grid>
                            <Grid.Column width="2" textAlign="center"> 
                                <div style={{paddingTop:'13%'}}>
                                    <h5>۳شنبه</h5>  
                                </div>    
                            </Grid.Column>
                            <Grid.Column width="14" textAlign="center">
                            
                                <TimeRangeSlider 
                                    id="day4" 
                                    day_state={this.state[3]} 
                                    handleFirstRange={(key,value) => this.change_first_range(key,value)}
                                    handleSecondRange={(key,value) => this.change_second_range(key,value)}
                                    handleOpenChecked={(key,value) => this.change_day_open(key,value)}
                                />
                            </Grid.Column>
                        
                        </Grid>
                        <Grid>
                            <Grid.Column width="2" textAlign="center"> 
                                <div style={{paddingTop:'13%'}}>
                                    <h5>۴شنبه</h5>  
                                </div>    
                            </Grid.Column>
                            <Grid.Column width="14" textAlign="center">
                            
                                <TimeRangeSlider 
                                    id="day5" 
                                    day_state={this.state[4]} 
                                    handleFirstRange={(key,value) => this.change_first_range(key,value)}
                                    handleSecondRange={(key,value) => this.change_second_range(key,value)}
                                    handleOpenChecked={(key,value) => this.change_day_open(key,value)}
                                />
                            </Grid.Column>
                        
                        </Grid>
                        <Grid>
                            <Grid.Column width="2" textAlign="center"> 
                                <div style={{paddingTop:'13%'}}>
                                    <h5>۵شنبه</h5>  
                                </div>    
                            </Grid.Column>
                            <Grid.Column width="14" textAlign="center">
                            
                                <TimeRangeSlider 
                                    id="day6" 
                                    day_state={this.state[5]} 
                                    handleFirstRange={(key,value) => this.change_first_range(key,value)}
                                    handleOpenChecked={(key,value) => this.change_day_open(key,value)}
                                    handleSecondRange={(key,value) => this.change_second_range(key,value)}
                                />
                            </Grid.Column>
                        
                        </Grid>
                        <Grid>
                            <Grid.Column width="2" textAlign="center"> 
                                <div style={{paddingTop:'13%'}}>
                                    <h5>جمعه</h5>  
                                </div>    
                            </Grid.Column>
                            <Grid.Column width="14" textAlign="center">
                            
                                <TimeRangeSlider 
                                    id="day7" 
                                    day_state={this.state[6]} 
                                    handleFirstRange={(key,value) => this.change_first_range(key,value)}
                                    handleOpenChecked={(key,value) => this.change_day_open(key,value)}
                                    handleSecondRange={(key,value) => this.change_second_range(key,value)}
                                />
                            </Grid.Column>
                        
                        </Grid>
    
                        <Grid centered>
                                <Grid.Column width="4" textAlign="right">
                                    <Form.Field>
                                        <Form.Input 
                                            label="طول هر سانس"
                                            value={this.state.duration}
                                            onChange={this.on_duration_change}
                                        />
            
                                    </Form.Field>
                                            
                                </Grid.Column>
                        </Grid>
                        <Grid centered>
                            <Button 
                                primary 
                                disbled={this.state.description_error || this.state.price_error || this.state.price_error ||this.state.service_name_error}
                                type='submit'>مشاهده‌ی جدول زمانی
                            </Button>
                        
                        </Grid>
                        
                        <Divider hidden section />
                                
                    </Form>
                </Grid.Column>
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
        set_service_information : (informations, days,business_id) => dispatch(add_service_actions.set_service_information(informations, days,business_id)),
        get_business_info : (business_id) => dispatch(business_page_actions.get_business_info(business_id)),
        change_panel:(panel_name) => dispatch(change_panel(panel_name)),

    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Add_service);