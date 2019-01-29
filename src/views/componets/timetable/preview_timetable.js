import React from 'react';

import Timetable from './timeTable';
import { Segment,Modal,Form,Grid,GridColumn,Button} from 'semantic-ui-react';
import Fade from 'react-reveal/Fade';

class preview_timetable extends React.Component {
    state = {
        modal_open:false,
        sansinfo:{
            sansID:undefined,
            sans_start:'',
            sans_end:'',
            weekday:undefined,
            sans_num:undefined,
        }
    }
    
    onSansChange = (e) => {
        const input = e.target.value;    
        let temp_sansinfo = this.state.sansinfo;
        const inputName = e.target.name;
        temp_sansinfo[inputName] = input;
        this.setState(() => ({sansinfo: temp_sansinfo}))    
    }

    onConfirmChange= (sansinfo) => {
        let temp_sanses= this.state.sanses;
        const day=temp_sanses[0][sansinfo.weekday];
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
             let next_temp_sans=next_sans;
             next_temp_sans.sans.start_time = sansinfo.end_time;
             next_temp_sans.sans.sans_id = next_temp_sans.sans.id;
             next_temp_sans.sans.is_deleted = 0;
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
        this.setState(() => ({
            modified_sanses : temp_modified,
            sanses:temp_sanses
        }))
         console.log("after setState:",this.state)
     
 }
 
    onSansClick = (sans_id,sans_start,sans_end,weekday,sans_num) =>{
        // console.log("weekday is:", weekday);
        let temp_sans = this.state.sansinfo;
        temp_sans.sansID=sans_id;
        temp_sans.sans_start=sans_start;
        temp_sans.sans_end=sans_end;
        temp_sans.weekday=weekday;
        temp_sans.sans_num = sans_num;
        // console.log("temp sans is:",temp_sans)
        this.setState(() =>( {sansinfo:temp_sans}) );
        // console.log("sansinfo in in state is",this.state.sansinfo)
        this.handleOpen();
    }
    handleOpen = () => this.setState({ modal_open: true })

    handleClose = () => this.setState({ modal_open: false })
    on_confirm_change = () =>{
        // console.log("sans in confirm is",this.state.sansinfo)
        this.props.onConfirmChange(this.state.sansinfo)
        this.handleClose();
    }
    on_delete_sans = () => {
        this.props.deleteSans(this.state.sansinfo)
        this.handleClose();
    }
    firstRangeValidation = () => {
        this.props.firstRangeValidation(this.state.sansinfo);
    }
    secondRangeValidation = () => {
        this.props.secondRangeValidation(this.state.sansinfo);
    }
    

    render(){
        
        console.log(this.props.sanses)
        
        return(
            <div>
            {this.props.sanses &&
                <div>
                <Modal  size="tiny" dimmer="blurring" open={this.state.modal_open} onClose={this.handleClose} closeIcon>
                    <Modal.Content>
                        <Grid textAlign="right">
                            <GridColumn width={8}>

                                <Form >
                                    
                                  <Form.Group>
                                    <Form.Field width={8}>
                                        <Form.Input
                                            value={this.state.sansinfo.start_time} 
                                            name="start_time"
                                            fluid 
                                            label='شروع سانس' 
                                            onBlur={this.firstRangeValidation}
                                            onChange={this.onSansChange}
                                        />
                                        <Fade bottom collapse when={this.props.firstRangeError}>
                                            <div className="invalid-feedback" 
                                            style={{ display: 'block',color:"#820b0b" }}
                                            >
                                            تنها میتوانید از حالت "xx:xx" استفاده کنید
                                            </div>
                                        </Fade>
                                       
                                    </Form.Field>
                                    <Form.Field width={8}>    
                                        <Form.Input
                                            value={this.state.sansinfo.end_time} 
                                            name="end_time"
                                            fluid 
                                            label='پایان سانس' 
                                            onBlur={this.secondRangeValidation}
                                            onChange={this.onSansChange}
                                        />
                                        <Fade bottom collapse when={this.props.secondRangeError}>
                                            <div className="invalid-feedback" 
                                            style={{ display: 'block',color:"#820b0b" }}
                                            >
                                            تنها میتوانید از حالت "xx:xx" استفاده کنید
                                            </div>
                                        </Fade>
                                        
                                    </Form.Field>

                                 </Form.Group>
                                </Form>
                                
                                    
                                
                            </GridColumn>
                            
                        </Grid>
                        
                    </Modal.Content>
                    <Modal.Actions>
                    <Button 
                        onClick={this.on_confirm_change}
                        positive 
                        icon='checkmark'  
                        labelPosition='left' 
                        content='اعمال تغییرات'
                        disabled = {this.props.firstRangeError} 
                    />
                    <Button 
                        onClick={this.on_delete_sans}
                        negative 
                        icon='x'  
                        labelPosition='left' 
                        content='حذف' 
                    />
                    </Modal.Actions>
                </Modal>
    
                <Timetable sanses={this.props.sanses} onSansClick={this.onSansClick} edit={true} />
                

                </div>
            
            
            }
            
            </div>

        )
    }
}

export default preview_timetable;