import React from 'react'
import {connect} from 'react-redux'
import PreviewTimetable from '../timetable/preview_timetable';
import moment from 'jalali-moment'
import * as add_service_actions from '../../../core/add_service/add_service_actions';
import { Grid, Button, Header, Divider } from 'semantic-ui-react';
import {change_panel} from '../../../core/main_page/active_panel_actions'

class Preview_timetable_on_addService extends React.Component{
    state = {
        sanses:[[],[],[],[],[],[],[]],
        first_range_error:false,
        second_range_error:false
  
    }

    componentDidMount(){
        if(this.props.days){
            this.generateSanses(this.props.days)
        }
    }
    

    generateSanses = (days) => {
        console.log(days)
        let sanses = [[],[],[],[],[],[],[]]
        days.map((day, index) => {
            let start_time = moment({hour: day.start_time})
            let duration = day.duration ? day.duration.split(':') : ['1','0']
            let duration_hour = parseInt(duration[0],10)
            let duration_minute = parseInt(duration[1],10)
            duration = moment({hour:duration_hour,minute:duration_minute})
            let end_time = moment({hour:day.end_time})
            let temp = start_time
            let rest_start_time = moment({hour:day.rest_start_time})
            let rest_end_time = moment({hour:day.rest_end_time})
            let counter = 0
            while(temp <= end_time && counter < 100){
                let start_whitin = (temp > rest_start_time) && (temp < rest_end_time)
                let start_time = temp.hour().toString() + ':'+temp.minutes().toString() 
                temp.add(duration_hour,'hours')
                temp.add(duration_minute,'minutes')
                let end_time = temp.hour().toString() + ':'+temp.minutes().toString()
                let end_whitin = (temp > rest_start_time) && (temp < rest_end_time)
                
                if( !(start_whitin || end_whitin)){
                    sanses[index].push({id:counter,is_reserved:false,sans:{weekday:index,start_time:start_time,end_time:end_time,capacity:day.capacity}})
                    counter ++
                }

            }  
        })

        console.log(sanses)
        this.setState(()=>({sanses:[sanses]}))
        console.log('state is : ', this.state)
    }
    onSubmit = () => {
        console.log(this.state.sanses,this.props.informations,this.props.business_id)
        this.props.add_service(this.props.informations,this.state.sanses[0],this.props.business_id)
        this.props.change_panel('dashboard')
    }

    validate_first_range = (sansinfo) => {}
    validate_second_range = (sansinfo) => {}
    deleteSans = (sansinfo) => {
        let temp_sanses = this.state.sanses; 
        console.log(temp_sanses, sansinfo)
        temp_sanses[0][sansinfo.weekday].splice(temp_sanses[0][sansinfo.weekday].findIndex(sans => sans.id === sansinfo.sans_num),1);
        this.setState(()=>({sanses:temp_sanses}))
        console.log(this.state)
    
    }
    onConfirmChange= (sansinfo) => {
        let temp_sanses= this.state.sanses;
        let index = temp_sanses[0][sansinfo.weekday].findIndex(sans => sans.id === sansinfo.sans_num)
        console.log(index)
        console.log(temp_sanses[0][sansinfo.weekday][index].sans.start_time , temp_sanses[0][sansinfo.weekday][index].sans.end_time)
        temp_sanses[0][sansinfo.weekday][index].sans.start_time = sansinfo.start_time
        temp_sanses[0][sansinfo.weekday][index].sans.end_time = sansinfo.end_time
        console.log(temp_sanses[0][sansinfo.weekday][index].sans.start_time , temp_sanses[0][sansinfo.weekday][index].sans.end_time)
        this.setState(()=>({sanses:temp_sanses}))
    }
   

    render(){
        return(
            <div>
                <Grid centered>
                    <Grid.Column computer={14}>
                        <Header dividing textAlign="right">
                            جدول زمانی پیش فرض
                            <Header.Subheader>
                                مطابق با برنامه‌ی خود در جدول زمانی تغییر ایجاد کنید
                            </Header.Subheader>
                        </Header>

                    </Grid.Column>
                    
                </Grid>

                <Grid centered>

                    <PreviewTimetable 
                        onConfirmChange={this.onConfirmChange} 
                        deleteSans={this.deleteSans} 
                        sanses={this.state.sanses[0]}
                        firstRangeValidation={this.validate_first_range}
                        firstRangeError={this.state.first_range_error}
                        secondRangeValidation={this.validate_second_range}
                        secondRangeError={this.state.second_range_error}

                    />
                </Grid>
                <Divider hidden section/>
                <Grid centered>
                    <Button primary onClick={this.onSubmit}>ایجاد سرویس</Button>            
                </Grid>
                <Divider hidden section />

            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.add_service_reducer.service.informations)
    return{
        days: state.add_service_reducer.service.days,
        business_id: state.add_service_reducer.service.business_id,
        informations: state.add_service_reducer.service.informations
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        add_service : (informations, days,business_id) => dispatch(add_service_actions.add_service(informations, days,business_id)),
        change_panel:(panel_name) => dispatch(change_panel(panel_name))

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Preview_timetable_on_addService)