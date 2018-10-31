import React from "react";
import { Button, Segment, Form ,Grid,Label, Divider} from 'semantic-ui-react'
import PersianRex from "persian-rex";


class Add_service_form extends React.Component{
        state = {
            informations:{
                service_name:"",
                contact_number:"",
                description:"",
                work_days:[]
                
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
                            <Grid.Row>
                            <Divider horizontal>جدول زمانی ساعات کاری</Divider>
                            <Form.Group inline>
                                <b>شنبه </b>
                                <Form.Input
                                    
                                    name="00"
                                />
                                
                                <Form.Input
                                    
                                    name="01"
                                    
                                />
                                
                            </Form.Group>
                            </Grid.Row>
                            <Grid.Row>
                            
                            <Form.Group inline>
                            <b>یکشنبه</b>
                                <Form.Input
                                    name="10"
                                />
                                <Form.Input
                                    name="11"
                                    
                                />
                                
                            </Form.Group>
                            </Grid.Row>
                            <Grid.Row>
                            
                            <Form.Group inline>
                            <b>دوشنبه</b>
                                <Form.Input
                                    name="20"
                                />
                                <Form.Input
                                    name="21"
                                    
                                />
                                
                            </Form.Group>
                            </Grid.Row>
                            <Grid.Row>
                            
                            <Form.Group inline>
                            <b>سه شنبه</b>
                                <Form.Input
                                    name="30"
                                />
                                <Form.Input
                                    name="31"
                                    
                                />
                                
                            </Form.Group>
                            </Grid.Row>
                            <Grid.Row>
                            
                            <Form.Group inline>
                            <b>چهارشنبه</b>
                                <Form.Input
                                    name="40"
                                />
                                <Form.Input
                                    name="41"
                                    
                                />
                                
                            </Form.Group>
                            </Grid.Row>
                            <Grid.Row>
                            
                            <Form.Group inline>
                            <b>پنجشنبه</b>
                                <Form.Input
                                    name="50"
                                />
                                <Form.Input
                                    name="51"
                                    
                                />
                                
                            </Form.Group>
                            </Grid.Row>
                            <Grid.Row>
                            
                            <Form.Group inline>
                            <b>جمعه</b>
                                <Form.Input
                                    name="60"
                                />
                                <Form.Input
                                    name="61"
                                    
                                />
                                
                            </Form.Group>
                            </Grid.Row>
                            
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