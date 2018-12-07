import React from 'react';
import {edit_business} from '../../../core/edit_business/edit_business_actions';
import {get_business_info} from '../../../core/business_page/business_page_actions'

import { Button, Segment, Form ,Grid,Label, Dropdown, Message} from 'semantic-ui-react';
import {categories} from "../../../core/constants"
import PersianRex from "persian-rex";
import {connect} from "react-redux";

class Edit_business extends React.Component {
    constructor(props){

        super(props)
        this.state = {
            informations:{
                name:this.props.business.name,
                phone_number:this.props.business.phone_number,
                email:this.props.business.email,
                description:this.props.business.description,
                address:this.props.business.address,
                category:this.props.business.category_id
            },
            name_error: false,
            email_error: false,
            phone_number_error: false,
            description_error: false,
            address_error:false,
            edit_success:false
    
        }
    
        this.onSubmit= this.onSubmit.bind(this)
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
    async onSubmit(){
        console.log(this.state.informations)
        await this.props.edit_business(this.state.informations,this.props.business.id)
        await this.props.get_business_info(this.props.business.id)
        this.setState(()=>({edit_success:true}))
    }

    render () {
        return (
            <div>

                <Grid className="add_business_form" centered textAlign="right">
                        <Grid.Column computer={10} tablet={12} mobile={14} textAlign="right">
                            <Form onSubmit={this.onSubmit}>
                                <Form.Field>
                                    <Form.Input
                                        fluid
                                        label="نام"
                                        error={this.state.name_error}
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
                                <b><span>دسته بندی</span></b>
                                <Dropdown
                                    fluid
                                    selection  
                                    options={categories}
                                    onChange={this.on_category_change}
                                />
                                <br></br>
                                
                                <Form.Field>
                                    <b><span>‌شماره‌ی تماس</span></b>
                                        <Form.Input
                                            fluid
                                            error={this.state.phone_number_error}
                                            //   label="شماره‌ی تماس "
                                            name="phone_number"
                                            onBlur={this.validate_phone_number}
                                            value={this.state.informations.phone_number}
                                            onChange={this.handle_change}
                                        
                                            
                                        />
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
                                {this.state.edit_success && (
                                    <Message success>
                                        تغیرات با موفقیت ثبت شد .         
                                    </Message>
                                   
                                )}
                                <Button primary type='submit'>ثبت</Button>
                            </Form>
                        </Grid.Column>         
                </Grid>
            </div>
            
        );
    }
}
const mapStateToProps = (state) => {
    
    return{
        state:state,
        business : state.business_page_reducer.business ,

    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        edit_business : (informations,business_id) => dispatch(edit_business(informations,business_id)),
        get_business_info : (business_id) => dispatch(get_business_info(business_id)),
 
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Edit_business);