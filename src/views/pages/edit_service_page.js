import React from "react";
import PersianRex from "persian-rex";
import {Form,Label,Segment,Button} from "semantic-ui-react";
import * as edit_service_actions from "../edit_service/edit_service_actions"
import {connect} from "react-redux"

class Edit_service_page extends React.Component {
    state = {
        informations:{
            service_name:"",
            
            description:"",
            price:""
            
            },
            duration:"",
        sanses:"",
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
        
    }
    render(){
        return (
            <div>
            <Segment textAlign="right">  
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
                            <Button primary type='submit'>اعمال تغییرات</Button>
                            </Form>
                            </Segment>
            
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        sanses : state.edit_service_reducer.sanses,
        fee : state.edit_service_reducer.fee,
        description: state.edit_service_reducer.description,
        service_id:state.edit_service_reducer.service_id
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        edit_service : (description,fee,sanses) => dispatch(edit_service_actions.edit_service(description,fee,sanses)),
        
        get_service_info : (service_id) => dispatch(edit_service_actions.get_services_info(service_id)),

    }
}
export default connect(mapStateToProps , mapDispatchToProps)(Edit_service_page);