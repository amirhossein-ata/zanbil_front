import React from 'react'
import {connect} from 'react-redux'
import { Grid, Button, Segment ,Icon ,Modal, Form, GridColumn, Message, Divider, Responsive } from 'semantic-ui-react'
import moment from 'jalali-moment' 
import * as service_page_actions from '../../../core/service_page/service_page_actions'
import {reserve_sans} from '../../../core/reserve/reserve_actions'
import { stat } from 'fs';
const style={
    marginTop:'2px'
}
class Timetable extends React.Component{
    constructor(props){
        super(props)

        this.on_next_week_click = this.on_next_week_click.bind(this)
        this.on_last_week_click = this.on_last_week_click.bind(this)
        this.on_confirm_reserve = this.on_confirm_reserve.bind(this)
    }
    componentDidMount(){
        let last_of_week = this.state.date.add(7,'day').locale('fa').format('YYYY/MM/DD')
        this.setState(()=>({last_of_week:last_of_week}))
        this.state.date.add(-7,'day')
    }
    state={
        date:moment(),
        last_of_week:'',
        modalOpen:false,
        description:'',
        sansinfo:{
            sansID:undefined,
            sans_start:'',
            sans_end:'',
            date:''
        }
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    async on_next_week_click(){
        let newState = this.state.date
        newState.add(7,'day')
        this.setState(()=>({date:newState}))
        let last_of_week = this.state.date.add(7,'day').locale('fa').format('YYYY/MM/DD')
        this.setState(()=>({last_of_week:last_of_week}))
        this.state.date.add(-7,'day')
        await this.props.get_service_page_info(this.props.service.id  , this.state.date.locale('fa').format('YYYY/MM/DD'))

    }
    async on_last_week_click(){
        let newState = this.state.date
        newState.add(-7,'day')
        this.setState(()=>({date:newState}))
        let last_of_week = this.state.date.add(7,'day').locale('fa').format('YYYY/MM/DD')
        this.setState(()=>({last_of_week:last_of_week}))
        this.state.date.add(-7,'day')
        await this.props.get_service_page_info(this.props.service.id  , this.state.date.locale('fa').format('YYYY/MM/DD'))

    }

    onSansClick=(sansID,sans_start , sans_end,week_day)=>{
        console.log({
            sansID,
            sans_start,
            sans_end,
            week_day
        })
        let weekday_date = this.state.date
        weekday_date.add(week_day,'day')
        let sansinfo = this.state.sansinfo
        sansinfo.sansID = sansID
        sansinfo.sans_start = sans_start
        sansinfo.sans_end = sans_end
        console.log('daaaaaaaate passed is : ',weekday_date.locale('fa').format('YYYY/MM/DD'))
        sansinfo.date=weekday_date.locale('fa').format('YYYY/MM/DD')
        console.log(sansinfo.date , this.state.date)
        this.setState(()=>({sansinfo:sansinfo}))
        this.state.date.add(-week_day,'day')
        console.log(sansinfo.date , this.state.date)

        this.handleOpen()
    }

    on_description_change = (e) => {
        const description = e.target.value
        this.setState(() => ({
            description:description
        }))
    }

    async on_confirm_reserve(){
        await this.props.reserve_sans(this.state.sansinfo.sansID,this.state.description,this.props.service.id,this.state.sansinfo.date)
        await this.props.get_service_page_info(this.props.service.id  , this.state.date.locale('fa').format('YYYY/MM/DD'))
        console.log('sanse after reserved are',this.props.sanses)
    }
    render(){
        return(
            <div>
                <Modal  size="tiny" dimmer="blurring" open={this.state.modalOpen} onClose={this.handleClose} closeIcon>
                    <Modal.Content>
                        <Grid textAlign="right">
                            <GridColumn width={16}>

                                <Form >
                                    <p>شما در حال رزرو سانس {this.state.sansinfo.sans_start} - {this.state.sansinfo.sans_end} در تاریخ {this.state.sansinfo.date} هستید اگر توضیحات اضافه ای دارید در زیر اضافه کنید .</p>
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
                        onClick={this.on_confirm_reserve}
                        positive 
                        icon='checkmark'  
                        labelPosition='left' 
                        content='ثبت' 
                    />
                    </Modal.Actions>
                </Modal>
    
                <Segment>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <Icon name='arrow right' onClick={this.on_last_week_click}/>
                        <span>
                            {this.state.date.locale('fa').format('YYYY/MM/DD')} - {this.state.last_of_week&&this.state.last_of_week}
                        </span>

                        <Icon name='arrow left' onClick={this.on_next_week_click} />
                    </div>
                </Segment>
                <Divider hidden />
                {this.props.sanses && (
                    <Segment>
                        <Grid centered textAlign="center">
                            
                            <Grid.Column computer={2} mobile={6} tablet={5}>
                                <div style={{textAlign:'center'}}> شنبه</div>
                                {this.props.sanses[0].map((sans) => (
                                    <Button 
                                        onClick={()=>this.onSansClick(sans.sans.id,sans.sans.start_time,sans.sans.end_time,0)} 
                                        color="linkedin" 
                                        disabled={sans.is_reserved} 
                                        fluid 
                                        style={style} 
                                    >
                                        {sans.sans.start_time} - {sans.sans.end_time}
                                    </Button>
                                ))}
                                            
                            </Grid.Column>
                            <Grid.Column computer={2} mobile={6} tablet={5}>
                                <div style={{textAlign:'center'}}> ۱شنبه</div>

                                {this.props.sanses[1].map((sans) => (
                                    <Button 
                                        onClick={()=>this.onSansClick(sans.sans.id,sans.sans.start_time,sans.sans.end_time,1)} 
                                        color="linkedin" 
                                        disabled={sans.is_reserved} 
                                        fluid 
                                        style={style}
                                    >
                                        {sans.sans.start_time} - {sans.sans.end_time}
                                    </Button>
                                ))}
                                            
                            </Grid.Column>
                            <Grid.Column computer={2} mobile={6} tablet={5}>
                                <div style={{textAlign:'center'}}>۲شنبه</div>
                                    
                                {this.props.sanses[2].map((sans) => (
                                    <Button 
                                        onClick={()=>this.onSansClick(sans.sans.id,sans.sans.start_time,sans.sans.end_time,2)} 
                                        color="linkedin" 
                                        disabled={sans.is_reserved} 
                                        fluid 
                                        style={style}
                                    >
                                        {sans.sans.start_time} - {sans.sans.end_time}
                                    </Button>
                                ))}
                                            
                            </Grid.Column>
                            <Grid.Column computer={2} mobile={6} tablet={5}>
                                <div style={{textAlign:'center'}}>۳شنبه</div>

                                {this.props.sanses[3].map((sans) => (
                                    <Button 
                                        onClick={()=>this.onSansClick(sans.sans.id,sans.sans.start_time,sans.sans.end_time,3)} 
                                        color="linkedin" 
                                        disabled={sans.is_reserved} 
                                        fluid 
                                        style={style}
                                    >
                                        {sans.sans.start_time} - {sans.sans.end_time}
                                    </Button>

                                ))}
                                            
                            </Grid.Column>
                            <Grid.Column computer={2} mobile={6} tablet={5}>
                                <div style={{textAlign:'center'}}> ۴شنبه</div>

                                {this.props.sanses[4].map((sans) => (
                                    <Button 
                                        onClick={()=>this.onSansClick(sans.sans.id,sans.sans.start_time,sans.sans.end_time,4)} 
                                        color="linkedin" 
                                        disabled={sans.is_reserved} 
                                        fluid 
                                        style={style}
                                    >
                                        {sans.sans.start_time} - {sans.sans.end_time}
                                    </Button>
                                ))}
                                            
                            </Grid.Column>
                            <Grid.Column computer={2} mobile={6} tablet={5}>
                                <div style={{textAlign:'center'}}>۵شنبه</div>

                                {this.props.sanses[5].map((sans) => (
                                    <Button 
                                        onClick={()=>this.onSansClick(sans.sans.id,sans.sans.start_time,sans.sans.end_time,5)} 
                                        color="linkedin" 
                                        disabled={sans.is_reserved} 
                                        fluid 
                                        style={style}
                                    >
                                        {sans.sans.start_time} - {sans.sans.end_time}
                                    </Button>
                                ))}
                                            
                            </Grid.Column>
                            <Grid.Column computer={2} mobile={6} tablet={5}>
                                <div style={{textAlign:'center'}}>جمعه</div>

                                {this.props.sanses[6].map((sans) => (
                                    <Button 
                                        onClick={()=>this.onSansClick(sans.sans.id,sans.sans.start_time,sans.sans.end_time,6)}  
                                        color="linkedin" 
                                        disabled={sans.is_reserved} 
                                        fluid 
                                        style={style}
                                    >
                                        {sans.sans.start_time} - {sans.sans.end_time}
                                    </Button>
                                ))}
                                            
                            </Grid.Column>
                        </Grid>
                    </Segment>
                )}
            </div>
    
        )
    }
}

const mapStateToProps = (state) => {
    return{
        sanses : state.service_page_reducer.sanses[0],
        service : state.service_page_reducer.service,
        reserve_success:state.reserve_reducer.reserve_success
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        get_service_page_info : (service_id,date) => dispatch(service_page_actions.get_services_page_info(service_id,date)),
        reserve_sans : (sansID,description,service_id,date) => dispatch(reserve_sans(sansID,description,service_id,date))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Timetable)