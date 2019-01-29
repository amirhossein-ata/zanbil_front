import React from "react";
import PersianRex from "persian-rex";
import {Form,Label,Segment,Button} from "semantic-ui-react";
import * as edit_service_actions from "../../core/edit_service/edit_service_actions";
import PreviewTimeTable from "../componets/timetable/preview_timetable";
import {change_panel} from "../../core/main_page/active_panel_actions";
import {connect} from "react-redux"
import Fade from 'react-reveal/Fade';

class Edit_service_page extends React.Component {
    state = {
        service_id:17,
        modified_sanses:[],
        informations:{
            service_name:this.props.service_name,
            capacity: this.props.capacity,
            description:this.props.description,
            fee:this.props.fee
                
            },
        sanses:[],
        price_error:false,
        capacity_error:false,
        service_name_error:false,
        description_error:false,
        first_range_error:false,
        second_range_error:false
    }
    async componentDidMount(){
           console.log(this.props.service_id)
        this.setState(()=>({service_id:this.props.service_id}))
        let temp_information = this.state.informations;
        temp_information.informations=this.props.service_id
        // temp_information.service_name = this.props.sanses; 
        temp_information.fee =this.props.fee;
        temp_information.capacity = this.props.capacity;
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
    
    validate_service_name = () => {
        const name = this.state.informations.service_name
        if(PersianRex.text.test(name) ) {
            this.setState(()=>({service_name_error:false}));      
        }else{
            this.setState(()=>({service_name_error:true}));       
            
        }

    }

    validate_price = () => {
        const fee = this.state.informations.fee;
        if(/[0-9.]/.test(fee)) {
            this.setState(()=>({price_error:false}));      
        }else{
            this.setState(()=>({price_error:true}));       
            
        }

    }

    validate_capacity = () => {
        const capacity = this.state.informations.capacity;
        if(/[0-9]/.test(capacity)) {
            this.setState(()=>({capacity_error:false}));      
        }else{
            this.setState(()=>({capacity_error:true}));       
            
        }

    }
    

    validate_descriptopn = () => {
        const description = this.state.informations.description;
        if(PersianRex.text.test(description) ) {
            this.setState(()=>({description_error:false}));      
        }else{
            this.setState(()=>({description_error:true}));       
            
        }

    }
    validate_first_range = (sansinfo) => {
        const time = sansinfo.start_time;
        
        let temp_sanses= this.state.sanses;
        const day=temp_sanses[0][sansinfo.weekday];
        let prev_sans=undefined;
        console.log("sansinfo is:",sansinfo);
        console.log("FUCK OFFFF!!!");
        if(sansinfo.sans_num !== 0 ){
            prev_sans = day[sansinfo.sans_num-1];
        }
        if(prev_sans){
             console.log("I've got news for u baby")
             if(((parseInt(prev_sans.sans.start_time.slice(0,3),10) > parseInt(time.slice(0,3) ,10)) || ((parseInt(prev_sans.sans.start_time.slice(0,3),10) === parseInt(time.slice(0,3) ,10)) && ((parseInt(prev_sans.sans.start_time.slice(3),10) > parseInt(time.slice(3) ,10))))) || !(/[0-9.]/.test(time))){
                console.log("Guss what?!\n");     
                this.setState(() => ({first_range_error:true}));

             }
             else{
                this.setState(() => ({first_range_error:false}));
             }
        }
        else{
            if((/[0-9.]/.test(time))){
                this.setState(() => ({first_range_error:true}));
            }
            else{
                this.setState(() => ({first_range_error:false}));
             }

        }
        

    }
    validate_second_range = (sansinfo) => {
        const time = sansinfo.end_time;
        
        let temp_sanses= this.state.sanses;
        const day=temp_sanses[0][sansinfo.weekday];
        let next_sans=undefined;
        console.log("sansinfo is:",sansinfo);
        console.log("FUCK OFFFF!!!");
        if(sansinfo.sans_num !== 0 ){
            next_sans = day[sansinfo.sans_num+1];
        }
        if(next_sans){
             console.log("I've got news for u baby")
             if(((parseInt(next_sans.sans.end_time.slice(0,3),10) < parseInt(time.slice(0,3) ,10)) || ((parseInt(next_sans.sans.end_time.slice(0,3),10) === parseInt(time.slice(0,3) ,10)) && ((parseInt(next_sans.sans.end_time.slice(3),10) < parseInt(time.slice(3) ,10))))) || !(/[0-9.]/.test(time))){
                console.log("Guss who's back?!\n");     
                this.setState(() => ({second_range_error:true}));

             }
             else{
                this.setState(() => ({second_range_error:false}));
             }
        }
        else{
            if((/[0-9.]/.test(time))){
                this.setState(() => ({second_range_error:true}));
            }
            else{
                this.setState(() => ({second_range_error:false}));
             }

        }
        

    }
    onConfirmChange= (sansinfo) => {
        // console.log("confirm sans is",sansinfo);
           let temp_sanses= this.state.sanses;
        //    console.log("tempSanses:", temp_sanses)
           const day=temp_sanses[0][sansinfo.weekday];
        //    console.log("day:",day)
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
               //console.log("prevsans:",prev_sans)
                if((parseInt(prev_sans.sans.end_time.slice(0,3),10) > parseInt(sansinfo.start_time.slice(0,3) ,10)) || ((parseInt(prev_sans.sans.end_time.slice(0,3),10) === parseInt(sansinfo.start_time.slice(0,3) ,10)) && ((parseInt(prev_sans.sans.end_time.slice(3),10) > parseInt(sansinfo.start_time.slice(3) ,10))))){
                        let prev_temp_sans=prev_sans;
                        prev_temp_sans.sans.end_time = sansinfo.start_time;
                        prev_temp_sans.sans.is_deleted = 0;
                        prev_temp_sans.sans.sans_id = prev_temp_sans.sans.id;
                        temp_sanses[0][sansinfo.weekday][sansinfo.sans_num-1] = prev_temp_sans;
                         
                        temp_modified.push(prev_temp_sans.sans);
                        
                        

                }
           }
           if(next_sans){
               console.log("next sans is:",next_sans.sans)
            
            if((parseInt(next_sans.sans.start_time.slice(0,3),10) < parseInt(sansinfo.end_time.slice(0,3) ,10)) || ((parseInt(next_sans.sans.start_time.slice(0,3),10) === parseInt(sansinfo.end_time.slice(0,3) ,10)) && ((parseInt(next_sans.sans.start_time.slice(3),10) < parseInt(sansinfo.end_time.slice(3) ,10))))){
                console.log("fuck off")
                let next_temp_sans=next_sans;
                next_temp_sans.sans.start_time = sansinfo.end_time;
                next_temp_sans.sans.sans_id = next_temp_sans.sans.id;
                next_temp_sans.sans.is_deleted = 0;
                console.log("next_temp_sans_is:",next_temp_sans)
                temp_sanses[0][sansinfo.weekday][sansinfo.sans_num+1] = next_temp_sans; 
                temp_modified.push(next_temp_sans.sans);
                
                

        }

           }
           temp_sanses[0][sansinfo.weekday][sansinfo.sans_num] = temp_sans; 
           temp_sans.sans.start_time = sansinfo.start_time;
           temp_sans.sans.end_time = sansinfo.end_time;
           temp_sans.sans.is_deleted = 0;
           console.log("tempsans is:",temp_sans)
           temp_sans.sans.sans_id = temp_sans.sans.id;
           temp_modified.push(temp_sans.sans);
        //    console.log("tempsanses before setState:",temp_sans)
        //    console.log("before setState:",this.state)
           this.setState(() => ({
               modified_sanses : temp_modified,
               sanses:temp_sanses
           }))
            console.log("after setState:",this.state)
        
    }
    deleteSans = (sansinfo) => {
        let temp_sanses= this.state.sanses;
        
        const day=temp_sanses[0][sansinfo.weekday];
        let temp_sans = day[sansinfo.sans_num];
        temp_sans.is_deleted = 1;
        let temp_modified = this.state.modified_sanses;
        temp_modified.push(temp_sans.sans);
        temp_sanses[0][sansinfo.weekday].splice(sansinfo.sans_num,1);
        this.setState(() => ({
            modified_sanses : temp_modified,
            sanses:temp_sanses
        }))

    }
    onSubmit = () => {
         let t = []
         let temp;
        // this.state.modified_sanses.map((mod_sans)=>(
             
        //     t.push(mod_sans.sans);
        //  ))
        this.state.modified_sanses.map((mod_sans) => (
            temp = mod_sans,
            temp.capacity = this.state.informations.capacity,
            t.push(temp)



        ));
        console.log("modified sanses are:")
        console.log(this.state.modified_sanses)
        console.log("t is:",t)
        console.log("service id is:")
        console.log(this.state.service_id)
        this.props.edit_service(this.state.informations.service_name,this.state.informations.description,this.state.informations.fee,this.state.modified_sanses,this.state.service_id);
        this.props.change_panel('dashboard')

    }
    render(){
        return (
            <div>
            <Segment textAlign="right">  
                <Form >
                        <Form.Field>
                            <Form.Input
                                fluid
                                label="نام سرویس"
                                name="service_name"
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
                        <Form.Group widths="equal">
                            <Form.Field>
                                <Form.Input
                                    fluid
                                    label="قیمت سرویس"
                                    name="fee"
                                    onBlur={this.validate_price}
                                    value={this.state.informations.fee}
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
                                <Fade bottom collapse when={this.state.price_error}>
                                    <div className="invalid-feedback" 
                                    style={{ display: 'block',color:"#820b0b" }}
                                    >
                                    تنها میتوانید از اعداد استفاده کنید
                                    </div>
                                </Fade>
                                
                        
                            </Form.Field>
                            
                        </Form.Group>
                            <Form.Field>
                                <Form.Input
                                    fluid
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
                            {this.props.sanses && (
                                <PreviewTimeTable 
                                    onConfirmChange={this.onConfirmChange} 
                                    deleteSans={this.deleteSans} 
                                    sanses={this.props.sanses}
                                    firstRangeValidation={this.validate_first_range}
                                    firstRangeError={this.state.first_range_error}
                                    secondRangeValidation={this.validate_second_range}
                                    secondRangeError={this.state.second_range_error}

                                />
                            )}
                            <Button onClick = {this.onSubmit} primary type='submit'>اعمال تغییرات</Button>
                            </Form>
                            </Segment>
            
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log("state is:",state)
    return {
        fee : state.service_page_reducer.service.fee,
        description: state.service_page_reducer.service.description,
        service_id:state.service_page_reducer.service.id,
        service_name:state.service_page_reducer.service.name,
        sanses : state.service_page_reducer.sanses,
        capacity: state.service_page_reducer.sanses[0].capacity 
    
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        edit_service : (description,fee,sanses,service_name,service_id) => dispatch(edit_service_actions.edit_service(description,fee,sanses,service_name,service_id)),
        change_panel:(panel_name) => dispatch(change_panel(panel_name)),
        get_service_info : (service_id) => dispatch(edit_service_actions.get_service_info(service_id)),

    }
}
export default connect(mapStateToProps , mapDispatchToProps)(Edit_service_page);