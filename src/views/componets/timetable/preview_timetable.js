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
        }
    }

    onSansClick = (sans_id,sans_start,sans_end) =>{
            let temp_sans = this.state.sansinfo;
            temp_sans.sansID=sans_id;
            temp_sans.sans_start=sans_start;
            temp_sans.sans_end=sans_end;
            this.setState({sansinfo:temp_sans});
            this.handleOpen();
    }
    handleOpen = () => this.setState({ modal_open: true })

    handleClose = () => this.setState({ modal_open: false })
    on_confirm_change = () =>{
        this.props.onConfirmChange(this.sansinfo.sans_id)
    }
    on_delete_sans = () => {
        this.props.deleteSans(this.sansinfo.sans_id)
    }
    render(){
        return(
            <div>
            {this.props.sanses &&
                <div>
                <Modal  size="tiny" dimmer="blurring" open={this.state.modal_open} onClose={this.handleClose} closeIcon>
                    <Modal.Content>
                        <Grid textAlign="right">
                            <GridColumn width={8}>

                                <Form >
                                    
                                    <Form.Field width={8}>
                                        <Form.Input
                                            value={this.state.sans.start_time} 
                                            fluid 
                                            label='شروع سانس' 
                                            onChange={this.on_sans_change}
                                        />
                                    </Form.Field>
                                    <Form.Field width={16}>
                                        <Form.Input
                                            value={this.state.sans.end_time} 
                                            fluid 
                                            label='پایان سانس' 
                                            onChange={this.on_sans_change}
                                        />
                                    </Form.Field>
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
                        positive 
                        icon='checkmark'  
                        labelPosition='right' 
                        content='حذف' 
                    />
                    </Modal.Actions>
                </Modal>
    
                <Segment>
                <Timetable onSansClick={this.onSansClick} edit={false} />
                
                </Segment>

                </div>
            
            
            }
            
            </div>

        )
    }
}

export default preview_timetable;