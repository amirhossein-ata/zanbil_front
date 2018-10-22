import React from 'react';
import { Button, Segment, Form ,Grid,Label} from 'semantic-ui-react';
import PersianRex from "persian-rex";
class Add_business extends React.Component {
    state = {
        informations:{
            name:"",
            phone_number:"",
            email:"",
            description:""
        },
        name_error: false,
        email_error: false,
        phone_number_error: false,
        description_error: false

    }

    handle_change= (e) => {
        const input = e.target.value;
        let informations = this.state.informations;
        const inputName = e.target.name;
        informations[inputName] = input;
        this.setState(() => ({informations : informations}))    
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
        if(/^[a-zA-Z]+@[a-zA-Z]+.[a-zA-z]/.test(email)) {
            this.setState(()=>({email_error:true}));      
        }else{
            this.setState(()=>({email_error:false}));       
            
        }

    }
    validate_phone_number = () => {
        const phone_number = this.state.informations.phone_number;
        if(/[^0-9+]/.test(phone_number)) {
            this.setState(()=>({phone_number_error:true}));      
        }else{
            this.setState(()=>({phone_number_error:false}));       
            
        }

    }
    validate_descriptopn = () => {
        const description = this.state.informations.description;
        if(!PersianRex.text.test(description)) {
            this.setState(()=>({description_error:true}));      
        }else{
            this.setState(()=>({description_error:false}));       
            
        }

    }

    render () {
        return (
            <Grid className="login_form">
            <Grid.Row verticalAlign="middle">
                <Grid.Column computer={3} tablet={2} mobile={1} ></Grid.Column>
                <Grid.Column computer={10} tablet={12} mobile={14}>
                    <Segment stacked color="blue" padded>  
                    <Form>
                        <Form.Field>
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
                    
                        </Form.Field>
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
export default Add_business;