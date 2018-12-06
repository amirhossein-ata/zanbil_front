import React from "react";
import PersianRex from "persian-rex";
import {Form,Label,Segment,Button} from "semantic-ui-react";
import * as edit_service_actions from "../../core/edit_service/edit_service_actions";
import PreviewTimeTable from "../componets/timetable/preview_timetable";
import {connect} from "react-redux"

class Edit_service_page extends React.Component {
    state = {
        service_id:20,
        modified_sanses:undefined,
        informations:{
            service_name:undefined,
            
            description:undefined,
            price:undefined
            
            },
        sanses:[],
        price_error:false,
        name_error:false,
        description_error:false
    }
    async componentDidMount(){
        await this.props.get_service_info(this.state.service_id);
        console.log("props are:" ,this.props.sanses)
        let temp_information = this.state.informations;
        temp_information.service_name = this.props.sanses; 
        temp_information.fee =this.props.fee;
        temp_information.description =this.props.description;
        temp_information.service_name =this.props.service_name;
         this.setState(() => ({
            informations : temp_information
        }))
        let temp_sanses=this.props.sanses;
        this.setState(() => ({
            sanses:temp_sanses
        }))

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
    onConfirmChange= (sansinfo) => {
           let temp_sanses= this.state.sanses;
           const day=temp_sanses[sansinfo.weekday];
           let prev_sans=undefined;
           let next_sans=undefined;
           let temp_sans = day[sansinfo.sans_num];
           let temp_modified = this.state.modified_sanses;
           
           if(sansinfo.sans_num !== 0 ){
                prev_sans = day[sansinfo.sans_num-1];
            }
           if (sansinfo.sans_num !== day.length-1){
                next_sans = day[sansinfo.sans_num+1];
           }
           if(prev_sans){
                if((parseInt(prev_sans.end_time.substring(0,3),10) > parseInt(sansinfo.start_time.substring(0,3) ,10)) || ((parseInt(prev_sans.end_time.substring(0,3),10) === parseInt(sansinfo.start_time.substring(0,3) ,10)) && ((parseInt(prev_sans.end_time.substring(3),10) > parseInt(sansinfo.start_time.substring(3) ,10))))){
                        let prev_temp_sans=prev_sans;
                        prev_temp_sans.end_time = sansinfo.start_time;
                        prev_temp_sans.is_deleted = 0;
                        temp_sanses[sansinfo.weekday][sansinfo.weekday-1] = prev_temp_sans; 
                        temp_modified.push(prev_temp_sans);
                        
                        

                }
           }
           if(next_sans){
            if((parseInt(next_sans.start_time.substring(0,3),10) > parseInt(sansinfo.end_time.substring(0,3) ,10)) || ((parseInt(next_sans.start_time.substring(0,3),10) === parseInt(sansinfo.end_time.substring(0,3) ,10)) && ((parseInt(next_sans.start_time.substring(3),10) > parseInt(sansinfo.end_time.substring(3) ,10))))){
                let next_temp_sans=next_sans;
                next_temp_sans.start_time = sansinfo.end_time;
                next_temp_sans.is_deleted = 0;
                temp_sanses[sansinfo.weekday][sansinfo.weekday+1] = next_temp_sans; 
                temp_modified.push(next_temp_sans);
                
                

        }

           }
           temp_sanses[sansinfo.weekday][sansinfo.weekday-1] = temp_sans; 
           temp_modified.push(temp_sans);
           this.setState(() => ({
               modified_sanses : temp_modified,
               sanses:temp_sanses
           }))
        
    }
    deleteSans = (sansinfo) => {
        let temp_sanses= this.state.sanses;
        temp_sanses.splice(sansinfo.sans_num,1);
        const day=temp_sanses[sansinfo.weekday];
        let temp_sans = day[sansinfo.sans_num];
        temp_sans.is_deleted = 1;
        let temp_modified = this.state.modified_sanses;
        temp_modified.push(temp_sans);
        this.setState(() => ({
            modified_sanses : temp_modified,
            sanses:temp_sanses
        }))

    }
    onSubmit = () => {
        this.props.edit_service(this.state.informations.description,this.state.informations.fee,this.state.modified_sanses,this.state.informations.service_name);
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
                                    value={this.state.informations.fee}
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
                            {this.props.sanses && (
                                <PreviewTimeTable onConfirmChange={this.onSansChange} deleteSans={this.deleteSans} sanses={this.props.sanses} />
                            )}
                            <Button primary type='submit'>اعمال تغییرات</Button>
                            </Form>
                            </Segment>
            
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log("state is:",state)
    return {
        sanses : state.edit_service_reducer.sanses,
        fee : state.edit_service_reducer.fee,
        description: state.edit_service_reducer.description,
        service_name:state.edit_service_reducer.service_name,
        service_id:state.edit_service_reducer.service_id
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        edit_service : (description,fee,sanses,service_name,service_id) => dispatch(edit_service_actions.edit_service(description,fee,sanses,service_name,service_id)),
        
        get_service_info : (service_id) => dispatch(edit_service_actions.get_service_info(service_id)),

    }
}
export default connect(mapStateToProps , mapDispatchToProps)(Edit_service_page);