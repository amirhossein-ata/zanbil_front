import React from 'react';

import Timetable from './timeTable';
import { Segment,Modal,Form,Grid,GridColumn,Button,Message} from 'semantic-ui-react';

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

    

    render(){
        const arr = [[1,2],2]
        console.log(arr)
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
                                        <Form.Input
                                            width={8}
                                            value={this.state.sansinfo.start_time} 
                                            name="start_time"
                                            fluid 
                                            label='شروع سانس' 
                                            onChange={this.onSansChange}
                                        />
                                        <Form.Input
                                            width={8}
                                            value={this.state.sansinfo.end_time} 
                                            name="end_time"
                                            fluid 
                                            label='پایان سانس' 
                                            onChange={this.onSansChange}
                                        />
                                
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