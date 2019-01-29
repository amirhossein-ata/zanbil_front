import React from 'react'
import {connect} from 'react-redux'
import { Grid, Button, Segment ,Icon ,Modal, Form, GridColumn, Message, Divider, Responsive ,Popup, Input } from 'semantic-ui-react'
import moment from 'jalali-moment' 
import * as service_page_actions from '../../../core/service_page/service_page_actions'
import {reserve_sans} from '../../../core/reserve/reserve_actions'
import closedIcon from '../../../assessts/icons/closed.svg'
const style={
    marginTop:'2px'
}
class Timetable extends React.Component{
    constructor(props){
        super(props)

        this.state={
            start_of_week:'',
            last_of_week:'',
            reserve_success:false,
            modalOpen:false,
            description:'',
            is_protected:this.props.is_protected,
            password:'',
            sansinfo:{
                sansID:undefined,
                sans_start:'',
                sans_end:'',
                date:'',
                // capacity:1
            }
        }
    
        this.on_next_week_click = this.on_next_week_click.bind(this)
        this.on_last_week_click = this.on_last_week_click.bind(this)
        this.on_confirm_reserve = this.on_confirm_reserve.bind(this)
    }
    async componentDidMount(){
        const last_of_week = moment(this.props.start_of_week_date,'jYYYY/jMM/jDD').add(6,'day').locale('fa').format('YYYY/MM/DD')
        const start_of_week = moment(this.props.start_of_week_date,'jYYYY/jMM/jDD').locale('fa').format('YYYY/MM/DD') 
        this.setState(()=>({last_of_week:last_of_week , start_of_week:start_of_week}))
        await this.props.get_service_page_info(this.props.service.id  , this.state.start_of_week)
        // console.log(this.props.sanses)
    }
    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => {
        this.setState({ modalOpen: false,reserve_success:false })
        this.props.get_service_page_info(this.props.service.id  , this.state.start_of_week)
        console.log('sanse after reserved are',this.props.sanses)
    }
    handle_change= (e) => {
        const input = e.target.value;
        console.log("input is:", input)
        this.setState(() => ({
            password:input
        }))        
        console.log("state is:", this.state)
            
    }

    async on_next_week_click(){
        console.log(this.state.start_of_week)
        let new_start_of_week = this.state.last_of_week
        new_start_of_week = moment(new_start_of_week,'jYYYY/jMM/jDD').add(1,'day').locale('fa').format('YYYY/MM/DD')
        let new_last_of_week = moment(new_start_of_week,'jYYYY/jMM/jDD').add(6,'day').locale('fa').format('YYYY/MM/DD')
        await this.setState(()=>({start_of_week:new_start_of_week,last_of_week:new_last_of_week}))
        console.log(this.state.start_of_week , this.state.last_of_week)
        await this.props.get_service_page_info(this.props.service.id  , this.state.start_of_week)

    }
    async on_last_week_click(){
        console.log(this.state.start_of_week)
        let new_start_of_week = this.state.start_of_week
        new_start_of_week = moment(new_start_of_week,'jYYYY/jMM/jDD').add(-7,'day').locale('fa').format('YYYY/MM/DD')
        let new_last_of_week = moment(new_start_of_week,'jYYYY/jMM/jDD').add(6,'day').locale('fa').format('YYYY/MM/DD')
        await this.setState(()=>({start_of_week:new_start_of_week,last_of_week:new_last_of_week}))
        console.log(this.state.start_of_week , this.state.last_of_week)
        await this.props.get_service_page_info(this.props.service.id  , this.state.start_of_week)

    }

    onSansClick=(sansID,sans_start , sans_end,week_day)=>{
        console.log({
            sansID,
            sans_start,
            sans_end,
            week_day
        })
        let weekday_date = moment(this.state.start_of_week,'jYYYY/jMM/jDD')
        weekday_date.add(week_day,'day')
        let sansinfo = this.state.sansinfo
        sansinfo.sansID = sansID
        sansinfo.sans_start = sans_start
        sansinfo.sans_end = sans_end
        console.log('daaaaaaaate passed is : ',weekday_date.locale('fa').format('YYYY/MM/DD'))
        sansinfo.date=weekday_date.locale('fa').format('YYYY/MM/DD')
        console.log(sansinfo.date , this.state.start_of_week)
        this.setState(()=>({sansinfo:sansinfo}))
        console.log(this.state.sansinfo)
        this.handleOpen()
    }

    on_description_change = (e) => {
        const description = e.target.value
        this.setState(() => ({
            description:description
        }))
        console.log("state is:", this.state)
    }

    async on_confirm_reserve(){
        await this.props.reserve_sans(this.state.sansinfo.sansID,this.state.description,this.props.service.id,this.state.sansinfo.date,this.state.password)
        this.setState(()=>({reserve_success:true}))
    }
    render(){
        console.log(this.props.sanses[3])
        return(
            <div>
                <Modal size="tiny" dimmer="blurring" open={this.state.modalOpen} onClose={this.handleClose} closeIcon>
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
                                    {this.state.is_protected && (
                                        <Form.Field inline width={16}>
                                                 <label> رمز عبور</label>
                                                 <Input 
                                                     fluid
                                                     name="password"
                                                     type='password'
                                                     value={this.state.password}
                                                     onChange={this.handle_change}    
                                                 />
                                         </Form.Field>

                                    )

                                    }

                                    {this.state.reserve_success && (
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
                            {this.state.start_of_week} - {this.state.last_of_week}
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
                                {this.props.sanses[0].length === 0 ? (
                                    <img src={closedIcon} width="100%" height="100%" />
                                ):(
                                    <div>
                                        {this.props.sanses[0].map((sans) => (
                                            <Popup trigger={<Button 
                                                onClick={()=>this.onSansClick(sans.sans.id,sans.sans.start_time,sans.sans.end_time,0)} 
                                                color="linkedin" 
                                                disabled={sans.is_reserved} 
                                                fluid 
                                                style={style} 
                                            >
                                                {sans.sans.start_time} - {sans.sans.end_time}
                                            </Button>} content={"ظرفیت باقیمانده : " + sans.capacity} />
                                            
                                        ))}
                                    </div>
                                )}
                                            
                            </Grid.Column>
                            <Grid.Column computer={2} mobile={6} tablet={5}>
                                <div style={{textAlign:'center'}}> ۱شنبه</div>
                                {this.props.sanses[1].length === 0 ? (
                                    <img src={closedIcon} width="100%" height="100%" />                                    
                                ):(
                                    <div>
                                    
                                        {this.props.sanses[1].map((sans) => (
                                            <Popup trigger={<Button 
                                                onClick={()=>this.onSansClick(sans.sans.id,sans.sans.start_time,sans.sans.end_time,0)} 
                                                color="linkedin" 
                                                disabled={sans.is_reserved} 
                                                fluid 
                                                style={style} 
                                            >
                                                {sans.sans.start_time} - {sans.sans.end_time}
                                            </Button>} content={"ظرفیت باقیمانده : " + sans.capacity} />
                                            
                                        ))}
                                    </div>    
                                )}
                                            
                            </Grid.Column>
                            <Grid.Column computer={2} mobile={6} tablet={5}>
                                <div style={{textAlign:'center'}}>۲شنبه</div>
                                {this.props.sanses[2].length === 0 ? (
                                    <img src={closedIcon} width="100%" height="100%" />                                                                        
                                ):(
                                    <div>
                                        {this.props.sanses[2].map((sans) => (
                                            <Popup trigger={<Button 
                                                onClick={()=>this.onSansClick(sans.sans.id,sans.sans.start_time,sans.sans.end_time,0)} 
                                                color="linkedin" 
                                                disabled={sans.is_reserved} 
                                                fluid 
                                                style={style} 
                                            >
                                                {sans.sans.start_time} - {sans.sans.end_time}
                                            </Button>} content={"ظرفیت باقیمانده : " + sans.capacity} />
                                            
                                        ))}
                                            
                                    </div>
                                )}
                                            
                            </Grid.Column>
                            <Grid.Column computer={2} mobile={6} tablet={5}>
                                <div style={{textAlign:'center'}}>۳شنبه</div>
                                {this.props.sanses[3].length === 0 ? (
                                    <img src={closedIcon} width="100%" height="100%" />                                                                        
                                ):(
                                    <div>
                                        {this.props.sanses[3].map((sans) => (
                                            <Popup trigger={<Button 
                                                onClick={()=>this.onSansClick(sans.sans.id,sans.sans.start_time,sans.sans.end_time,0)} 
                                                color="linkedin" 
                                                disabled={sans.is_reserved} 
                                                fluid 
                                                style={style} 
                                            >
                                                {sans.sans.start_time} - {sans.sans.end_time}
                                            </Button>} content={"ظرفیت باقیمانده : " + sans.capacity} />
                                            
        
                                        ))}
                                    </div>
                                )}
                                            
                            </Grid.Column>
                            <Grid.Column computer={2} mobile={6} tablet={5}>
                                <div style={{textAlign:'center'}}> ۴شنبه</div>
                                {this.props.sanses[4].length === 0 ? (
                                    <img src={closedIcon} width="100%" height="100%" />                                                                        
                                ):(
                                    <div>
                                        {this.props.sanses[4].map((sans) => (
                                            <Popup trigger={<Button 
                                                onClick={()=>this.onSansClick(sans.sans.id,sans.sans.start_time,sans.sans.end_time,0)} 
                                                color="linkedin" 
                                                disabled={sans.is_reserved} 
                                                fluid 
                                                style={style} 
                                            >
                                                {sans.sans.start_time} - {sans.sans.end_time}
                                            </Button>} content={"ظرفیت باقیمانده : " + sans.capacity} />
                                            
                                        ))}
                                            
                                    </div>
                                )}
                                            
                            </Grid.Column>
                            <Grid.Column computer={2} mobile={6} tablet={5}>
                                <div style={{textAlign:'center'}}>۵شنبه</div>
                                {this.props.sanses[5].length === 0 ? (
                                    <img src={closedIcon} width="100%" height="100%" />                                                                        
                                ):(
                                    <div>
                                        {this.props.sanses[5].map((sans) => (
                                            <Popup trigger={<Button 
                                                onClick={()=>this.onSansClick(sans.sans.id,sans.sans.start_time,sans.sans.end_time,0)} 
                                                color="linkedin" 
                                                disabled={sans.is_reserved} 
                                                fluid 
                                                style={style} 
                                            >
                                                {sans.sans.start_time} - {sans.sans.end_time}
                                            </Button>} content={"ظرفیت باقیمانده : " + sans.capacity} />
                                            
                                        ))}
                                        
                                    </div>
                                )}
                                            
                            </Grid.Column>
                            <Grid.Column computer={2} mobile={6} tablet={5}>
                                <div style={{textAlign:'center'}}>جمعه</div>
                                {this.props.sanses[6].length === 0 ? (
                                    <img src={closedIcon} width="100%" height="100%" />                                                                        
                                ):(
                                    <div>
                                        {this.props.sanses[6].map((sans) => (
                                            <Popup trigger={<Button 
                                                onClick={()=>this.onSansClick(sans.sans.id,sans.sans.start_time,sans.sans.end_time,0)} 
                                                color="linkedin" 
                                                disabled={sans.is_reserved} 
                                                fluid 
                                                style={style} 
                                            >
                                                {sans.sans.start_time} - {sans.sans.end_time}
                                            </Button>} content={"ظرفیت باقیمانده : " + sans.capacity} />
                                            
                                        ))}
                                            
                                    </div>
                                )}
                                            
                            </Grid.Column>
                        </Grid>
                    </Segment>
                )}
            </div>
    
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state.service_page_reducer.sanses[0])
    return{
        start_of_week_date:state.service_page_reducer.start_of_week_date,
        sanses : state.service_page_reducer.sanses[0],
        service : state.service_page_reducer.service,
        reserve_success:state.reserve_reducer.reserve_success,
        is_protected:state.service_page_reducer.service.is_protected
       
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        get_service_page_info : (service_id,date) => dispatch(service_page_actions.get_services_page_info(service_id,date)),
        reserve_sans : (sansID,description,service_id,date,password) => dispatch(reserve_sans(sansID,description,service_id,date,password))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Timetable)