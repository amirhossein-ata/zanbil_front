import React from 'react';

import Timetable from './timeTable';
import { Segment,Modal,Form,Grid,GridColumn,Button,Label} from 'semantic-ui-react';

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
    this.setState(() => ({sansinfo : temp_sansinfo}))    
}
    onSansClick = (sans_id,sans_start,sans_end,weekday,sans_num) =>{
            console.log("weekday is:", weekday);
            let temp_sans = this.state.sansinfo;
            temp_sans.sansID=sans_id;
            temp_sans.sans_start=sans_start;
            temp_sans.sans_end=sans_end;
            temp_sans.weekday=weekday;
            temp_sans.sans_num = sans_num;
            console.log("temp sans is:",temp_sans)
            this.setState(() =>( {sansinfo:temp_sans}) );
            console.log("sansinfo in in state is",this.state.sansinfo)
            this.handleOpen();
    }
    handleOpen = () => this.setState({ modal_open: true })

    handleClose = () => this.setState({ modal_open: false })
    on_confirm_change = () =>{
        console.log("sans in confirm is",this.state.sansinfo)
        this.props.onConfirmChange(this.state.sansinfo)
        this.handleClose();
    }
    on_delete_sans = () => {
        this.props.deleteSans(this.state.sansinfo)
    }
    firstRangeValidation = () => {
        this.props.firstRangeValidation(this.state.sansinfo);
    }
    secondRangeValidation = () => {
        this.props.secondRangeValidation(this.state.sansinfo);
    }
    

    render(){
        
        console.log(this.props.sanses[0])
        
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
                                        {this.props.firstRangeError &&
                                            <Label basic pointing color="red">
                                        تنها میتوانید از حالت "xx:xx" استفاده کنید
                                            </Label>    
                                        }
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
                                        {this.props.secondRangeError &&
                                            <Label basic pointing color="red">
                                        تنها میتوانید از حالت "xx:xx" استفاده کنید
                                            </Label>    
                                        }
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
    
                <Segment>
                <Timetable sanses={this.props.sanses} onSansClick={this.onSansClick} edit={true} />
                
                </Segment>

                </div>
            
            
            }
            
            </div>

        )
    }
}

export default preview_timetable;