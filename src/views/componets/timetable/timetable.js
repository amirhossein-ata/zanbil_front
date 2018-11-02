import React from 'react'
import {connect} from 'react-redux'
import { Grid, Button, Segment ,Icon } from 'semantic-ui-react'
import moment from 'jalali-moment' 
import * as service_page_actions from '../../../core/service_page/service_page_actions'

const style={
    marginTop:'2px'
}
class Timetable extends React.Component{
    state={
        date:moment()
    }
    componentDidMount(){
        console.log('timetable mountedddddddddddddddddddddddddddddddddddddddddddd' , this.props.sanses)
        console.log(moment().locale('fa').format('YYYY/MM/DD'))
    }
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
    render(){
        return(
            <Segment>
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
                            <Button color="linkedin" disabled={sans.is_reserved} fluid style={style}>{sans.sans.start_time} - {sans.sans.end_time}</Button>
                        ))}
                                    
                    </Grid.Column>
                    <Grid.Column computer={2} mobile={5}>
                        <div style={{textAlign:'center'}}> ۱شنبه</div>

                        {this.props.sanses[1].map((sans) => (
                            <Button color="linkedin" disabled={sans.is_reserved} fluid style={style}>{sans.sans.start_time} - {sans.sans.end_time}</Button>
                        ))}
                                    
                    </Grid.Column>
                    <Grid.Column computer={2} mobile={5}>
                        <div style={{textAlign:'center'}}> شنبه۲</div>
                            
                        {this.props.sanses[2].map((sans) => (
                            <Button color="linkedin" disabled={sans.is_reserved} fluid style={style}>{sans.sans.start_time} - {sans.sans.end_time}</Button>
                        ))}
                                    
                    </Grid.Column>
                    <Grid.Column computer={2} mobile={5}>
                        <div style={{textAlign:'center'}}> شنبه۳</div>

                        {this.props.sanses[3].map((sans) => (
                            <Button color="linkedin" disabled={sans.is_reserved} fluid style={style}>{sans.sans.start_time} - {sans.sans.end_time}</Button>

                        ))}
                                    
                    </Grid.Column>
                    <Grid.Column computer={2} mobile={5}>
                        <div style={{textAlign:'center'}}> ۴شنبه</div>

                        {this.props.sanses[4].map((sans) => (
                            <Button color="linkedin" disabled={sans.is_reserved} fluid style={style}>{sans.sans.start_time} - {sans.sans.end_time}</Button>
                        ))}
                                    
                    </Grid.Column>
                    <Grid.Column computer={2} mobile={5}>
                        <div style={{textAlign:'center'}}> شنبه۵</div>

                        {this.props.sanses[5].map((sans) => (
                            <Button color="linkedin" disabled={sans.is_reserved} fluid style={style}>{sans.sans.start_time} - {sans.sans.end_time}</Button>
                        ))}
                                    
                    </Grid.Column>
                    <Grid.Column computer={2} mobile={5}>
                        <div style={{textAlign:'center'}}>جمعه</div>

                        {this.props.sanses[6].map((sans) => (
                            <Button color="linkedin" disabled={sans.is_reserved} fluid style={style}>{sans.sans.start_time} - {sans.sans.end_time}</Button>
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
        service : state.service_page_reducer.service
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        get_service_page_info : (service_id,date) => dispatch(service_page_actions.get_services_page_info(service_id,date))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Timetable)