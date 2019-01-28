import React from 'react';
import * as add_business_actions from '../../../core/add_business/add_business_actions';
import * as account_page_actions from '../../../core/account_page/account_page_actions';
import { Button,Form ,Grid,Label, Dropdown, Divider, Header} from 'semantic-ui-react';
import {categories} from "../../../core/constants"
import PersianRex from "persian-rex";
import {connect} from "react-redux";
import {change_panel} from '../../../core/main_page/active_panel_actions'
import Fade from 'react-reveal/Fade';


import StoreIcon from '../../../assessts/icons/online-shopping.svg'
class Add_business extends React.Component {
    
    constructor(props){
        super(props)

        this.onSubmit = this.onSubmit.bind(this)
    }
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
        var validator = require("email-validator");
        const email = this.state.informations.email
        if(validator.validate(email)) {
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
        if(!PersianRex.punctuation.test(address)) {
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
        console.log(this.state.informations)
        this.props.add_business(this.state.informations)
        await this.props.get_account_page()
        this.props.change_panel('account_page')
    }

    render () {
        return (
            <div>
                <Grid className="add_business_form" centered>
                    <Grid.Column width={10} textAlign="right">
                        <Form onSubmit={this.onSubmit}>
                            <Divider hidden />
                            <Header dividing>
                                فرم اضافه کردن کسب وکار
                                <Header.Subheader>
                                    مشخصات کسب و کار خود را وارد نمایید     
                                </Header.Subheader>
                            </Header>
                            
                            <Form.Group widths="equal">
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
                                    <Fade bottom collapse when={this.state.name_error}>
                                        <div className="invalid-feedback" 
                                        style={{ display: 'block',color:"#820b0b" }}
                                        >
                                        لطفا فقط از زبان فارسی استفاده کنید        
                                        </div>
                                    </Fade>
                                    
                                </Form.Field>
                                     
                                <Form.Field>
                                        <label>دسته بندی</label>
                                        <Dropdown
                                            fluid
                                            selection  
                                            options={categories}
                                            onChange={this.on_category_change}
                                        />
                                        
                                </Form.Field>
                                    
                            </Form.Group>
                            <Form.Group widths="equal">
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
                                    <Fade bottom collapse when={this.state.phone_number_error}>
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
                                        error={this.state.email_error}
                                        label="ایمیل"
                                        name="email"
                                        onBlur={this.validate_email}
                                        value={this.state.informations.email}
                                        onChange={this.handle_change}
                                    
                                        
                                    />
                                    <Fade bottom collapse when={this.state.email_error}>
                                        <div className="invalid-feedback" 
                                        style={{ display: 'block',color:"#820b0b" }}
                                        >
                                        تنها میتوانید از (a-z A-Z . 0-9 @ )استفاده کنید
                                        </div>
                                    </Fade>
                                    
                                </Form.Field>
                            
                            
                            </Form.Group>
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
                                <Fade bottom collapse when={this.state.address_error}>
                                        <div className="invalid-feedback" 
                                        style={{ display: 'block',color:"#820b0b" }}
                                        >
                                        لطفا فقط از زبان فارسی استفاده کنید        
                                        </div>
                                </Fade>
                               
                        
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
                            
                            <Button primary type='submit'>ثبت</Button>
                        </Form>
                    </Grid.Column>         
                    <Grid.Column width={5}>
                        <br></br>
                        <img src={StoreIcon}/>

                    </Grid.Column>
                </Grid>
            </div>
            
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
        get_account_page:() => dispatch(account_page_actions.get_account_page()),
        add_business : (informations) => dispatch(add_business_actions.add_business(informations)),
        change_panel:(panel_name) => dispatch(change_panel(panel_name)),    
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Add_business);