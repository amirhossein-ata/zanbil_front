import React from 'react'
import {connect} from 'react-redux'
import { Grid, Button, Segment ,Icon ,Modal, Form, GridColumn, Message } from 'semantic-ui-react'
import moment from 'jalali-moment' 
import * as service_page_actions from '../../../core/service_page/service_page_actions'
import {reserve_sans} from '../../../core/reserve/reserve_actions'
import { stat } from 'fs';
const style={
    marginTop:'2px'
}
class Timetable extends React.Component{
    state={
        date:moment(),
        modalOpen:false,
        description:'',
        sansinfo:{
            sansID:undefined,
            sans_start:'',
            sans_end:''
        }
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    on_next_week_click = () => {
        let newState = this.state.date
        newState.add(7,'day')
        this.setState(()=>({date:newState}))
        this.props.get_service_page_info(this.props.service.id  , this.state.date.locale('fa').format('YYYY/MM/DD'))

    }
    on_last_week_click = () => {
        let newState = this.state.date
        newState.add(-7,'day')
        this.setState(()=>({date:newState}))
        this.props.get_service_page_info(this.props.service.id  , this.state.date.locale('fa').format('YYYY/MM/DD'))

    }

    onSansClick=(sansID,sans_start , sans_end)=>{
        console.log({
            sansID,
            sans_start,
            sans_end
        })
        let sansinfo = this.state.sansinfo
        sansinfo.sansID = sansID
        sansinfo.sans_start = sans_start
        sansinfo.sans_end = sans_end
        this.setState(()=>({sansinfo:sansinfo}))
        this.handleOpen()
    }

    on_description_change = (e) => {
        const description = e.target.value
        this.setState(() => ({
            description:description
        }))
    }
    render(){
        return(
            <Segment>
                <Modal  size="tiny" dimmer="blurring" open={this.state.modalOpen} onClose={this.handleClose} closeIcon>
                    <Modal.Content>
                        <Grid textAlign="right">
                            <GridColumn width={16}>

                                <Form >
                                    <p>شما در حال رزرو سانس {this.state.sansinfo.sans_start} - {this.state.sansinfo.sans_end} هستید اگر توضیحات اضافه ای دارید در زیر اضافه کنید .</p>
                                    <Form.Field width={16}>
                                        <Form.Input
                                            value={this.state.description} 
                                            fluid 
                                            label='توضیحات' 
                                            onChange={this.on_description_change}
                                        />
                                    </Form.Field>
                                    {this.props.reserve_success && (
                                        <Message positive>
                                            رزرو شما با موفقیت انجام شد.
                                        </Message>
                                    )}
                                </Form>
                        
                            </GridColumn>
                            
                        </Grid>
                        
                    </Modal.Content>
                    <Modal.Actions>
                    <Button 
                        onClick={() => this.props.reserve_sans(this.state.sansinfo.sansID,this.state.description)}
                        positive 
                        icon='checkmark'  
                        labelPosition='left' 
                        content='ثبت' 
                    />
                    </Modal.Actions>
                </Modal>
    
                <div style={{display:'flex',justifyContent:'space-around'}}>
                    <div >
                        <Button color="linkedin" onClick={this.on_last_week_click}><Icon name='arrow right' />هفته ی قبل</Button>

                    </div>
                    <div >
                        <Button color="linkedin" onClick={this.on_next_week_click}>هفته ی بعد<Icon name='arrow left' /></Button>

                    </div>
                 </div>
            {this.props.sanses && (
                <Grid centered>
                    
                    <Grid.Column computer={2} mobile={5}>
                        <div style={{textAlign:'center'}}> شنبه</div>
                        {this.props.sanses[0].map((sans) => (
                            <Button onClick={()=>this.onSansClick(sans.sans.id,sans.sans.start_time,sans.sans.end_time)} color="linkedin" disabled={sans.is_reserved} fluid style={style}>{sans.sans.start_time} - {sans.sans.end_time}</Button>
                        ))}
                                    
                    </Grid.Column>
                    <Grid.Column computer={2} mobile={5}>
                        <div style={{textAlign:'center'}}> ۱شنبه</div>

                        {this.props.sanses[1].map((sans) => (
                            <Button onClick={this.onSansClick} color="linkedin" disabled={sans.is_reserved} fluid style={style}>{sans.sans.start_time} - {sans.sans.end_time}</Button>
                        ))}
                                    
                    </Grid.Column>
                    <Grid.Column computer={2} mobile={5}>
                        <div style={{textAlign:'center'}}> شنبه۲</div>
                            
                        {this.props.sanses[2].map((sans) => (
                            <Button onClick={this.onSansClick} color="linkedin" disabled={sans.is_reserved} fluid style={style}>{sans.sans.start_time} - {sans.sans.end_time}</Button>
                        ))}
                                    
                    </Grid.Column>
                    <Grid.Column computer={2} mobile={5}>
                        <div style={{textAlign:'center'}}> شنبه۳</div>

                        {this.props.sanses[3].map((sans) => (
                            <Button onClick={this.onSansClick} color="linkedin" disabled={sans.is_reserved} fluid style={style}>{sans.sans.start_time} - {sans.sans.end_time}</Button>

                        ))}
                                    
                    </Grid.Column>
                    <Grid.Column computer={2} mobile={5}>
                        <div style={{textAlign:'center'}}> ۴شنبه</div>

                        {this.props.sanses[4].map((sans) => (
                            <Button onClick={this.onSansClick} color="linkedin" disabled={sans.is_reserved} fluid style={style}>{sans.sans.start_time} - {sans.sans.end_time}</Button>
                        ))}
                                    
                    </Grid.Column>
                    <Grid.Column computer={2} mobile={5}>
                        <div style={{textAlign:'center'}}>۵شنبه</div>

                        {this.props.sanses[5].map((sans) => (
                            <Button onClick={this.onSansClick} color="linkedin" disabled={sans.is_reserved} fluid style={style}>{sans.sans.start_time} - {sans.sans.end_time}</Button>
                        ))}
                                    
                    </Grid.Column>
                    <Grid.Column computer={2} mobile={5}>
                        <div style={{textAlign:'center'}}>جمعه</div>

                        {this.props.sanses[6].map((sans) => (
                            <Button onClick={this.onSansClick} color="linkedin" disabled={sans.is_reserved} fluid style={style}>{sans.sans.start_time} - {sans.sans.end_time}</Button>
                        ))}
                                    
                    </Grid.Column>
                </Grid>

            )}
        </Segment>
    
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.service_page_reducer.sanses[0])
    return{
        sanses : state.service_page_reducer.sanses[0],
        service : state.service_page_reducer.service,
        reserve_success:state.reserve_reducer.reserve_success
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        get_service_page_info : (service_id,date) => dispatch(service_page_actions.get_services_page_info(service_id,date)),
        reserve_sans : (sansID,description) => dispatch(reserve_sans(sansID,description))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Timetable)