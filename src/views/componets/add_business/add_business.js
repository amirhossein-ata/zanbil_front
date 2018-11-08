import React from 'react';
import * as add_business_actions from '../../../core/add_business/add_business_actions';
import { Button, Segment, Form ,Grid,Label, Dropdown} from 'semantic-ui-react';
import {categories} from "../../../core/constants"
import PersianRex from "persian-rex";
import {connect} from "react-redux";
import {change_panel} from '../../../core/main_page/active_panel_actions'

class Add_business extends React.Component {
    state = {
        informations:{
            name:"",
            phone_number:"",
            email:"",
            description:"",
            address:"",
            category:""
        },
        name_error: false,
        email_error: false,
        phone_number_error: false,
        description_error: false,
        address_error:false

    }

    handle_change= (e) => {
        const input = e.target.value;
        
        let informations = this.state.informations;
        const inputName = e.target.name;
        
        informations[inputName] = input;
        this.setState(() => ({informations : informations}))    
    }
    on_category_change = (e, {value}) => {
            let informations = this.state.informations;
            console.log(value)
            informations.category = value.toString();
            this.setState(() => ({informations:informations}));
    }
    validate_name = () => {
        const name = this.state.informations.name
        if(!PersianRex.text.test(name)) {
            this.setState(()=>({name_error:true}));      
        }else{
            this.setState(()=>({name_error:false}));       
            
        }

    }
    validate_email = () => {
        const email = this.state.informations.email
        if(/[a-zA-Z]+@[a-zA-Z]+.[a-zA-z]/.test(email)) {
            this.setState(()=>({email_error:false})); 
        }else{
            this.setState(()=>({email_error:true}));
                 
            
        }

    }
    validate_phone_number = () => {
        const phone_number = this.state.informations.phone_number;
        if(/[0-9+]/.test(phone_number)) {
            this.setState(()=>({phone_number_error:false}));      
        }else{
            this.setState(()=>({phone_number_error:true}));       
            
        }

    }
    validate_address = () => {
        const address = this.state.informations.address;
        if(!PersianRex.punctuation.test(address)|| /-/.test(address)) {
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
        this.props.add_business(this.state.informations)
        this.props.change_panel('category')
    }

    render () {
        return (
            <Grid className="add_business_form">
            <Grid.Row verticalAlign="middle">
                <Grid.Column computer={3} tablet={2} mobile={1} ></Grid.Column>
                <Grid.Column computer={10} tablet={12} mobile={14}>
                    <Segment stacked color="blue" padded>  
                    <Form onSubmit={this.onSubmit}>
                        <Form.Field>
                        <div dir = "rtl">
                            <Form.Input
                                fluid
                                error={this.state.name_error}
                                label=" نام"
                                name="name"
                               onBlur={this.validate_name}
                               value={this.state.informations.name}
                               onChange={this.handle_change}
                            
                                
                            />

                            {this.state.name_error && (
                                <Label basic pointing color="red">
                                   لطفا فقط از زبان فارسی استفاده کنید
                                </Label>    
                            )} 
                            </div>
                        </Form.Field>
                        <b><span>دسته بندی</span></b>
                        <Dropdown
                            fluid
                            selection  
                            options={categories}
                            onChange={this.on_category_change}
                        />
                        <br></br>
                        {/*<Form.Select 
                            name="category"
                            label="دسته بندی" 
                            onChange={this.handle_change}
                        options = {categories}/>*/}
                        
                        <Form.Field>
                        <b><span>‌شماره‌ی تماس</span></b>
                        <div dir="ltr">
                                <Form.Input
                                    fluid
                                    error={this.state.phone_number_error}
                                 //   label="شماره‌ی تماس "
                                    name="phone_number"
                                onBlur={this.validate_phone_number}
                                value={this.state.informations.phone_number}
                                onChange={this.handle_change}
                                
                                    
                                />
                        </div>
                            {this.state.phone_number_error && (
                                <Label basic pointing color="red">
                                    تنها میتوانید از ارقام ۰تا۹ استفاده کنید
                                </Label>    
                            )} 
                    
                        </Form.Field>
                        
                        <Form.Field>
                            <Form.Input
                                fluid
                                error={this.state.email_error}
                                label="ایمیل"
                                name="email"
                               onBlur={this.validate_email}
                               value={this.state.informations.email}
                               onChange={this.handle_change}
                            
                                
                            />

                            {this.state.email_error && (
                                <Label basic pointing color="red">
                                    تنها میتوانید از (a-z A-Z . 0-9 @ )استفاده کنید
                                </Label>    
                            )}
                            </Form.Field>
                            <Form.Field>
                            <Form.Input
                                fluid
                                error={this.state.address_error}
                                label="آدرس"
                                name="address"
                               onBlur={this.validate_address}
                               value={this.state.informations.address}
                               onChange={this.handle_change}
                            
                                
                            />

                            {this.state.address_error && (
                                <Label basic pointing color="red">
                                        لطفا فقط از زبان فارسی استفاده کنید.
                                </Label>    
                            )} 
                    
                        </Form.Field>
                        <Form.Field>
                            <Form.Input
                                fluid
                                error={this.state.description_error}
                                label="توضیحات"
                                name="description"
                               onBlur={this.validate_descriptopn}
                               value={this.state.informations.description}
                               onChange={this.handle_change}
                            
                                
                            />

                            {this.state.description_error && (
                                <Label basic pointing color="red">
                                    فقط از زبان فارسی استفاده کنید
                                </Label>    
                            )} 
                    
                        </Form.Field>
                        
                        <Button primary type='submit'>ثبت</Button>
                    </Form>
                    </Segment>
                
                </Grid.Column>
            
            </Grid.Row>
        </Grid>
        );
    }
}
const mapStateToProps = (state) => {
    
    return{
        state:state
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        add_business : (informations) => dispatch(add_business_actions.add_business(informations)),
        change_panel:(panel_name) => dispatch(change_panel(panel_name)),    
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Add_business);