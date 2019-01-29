import React from 'react'
import {connect} from 'react-redux'
import PreviewTimetable from '../timetable/preview_timetable';
import moment from 'jalali-moment'
class Preview_timetable_on_addService extends React.Component{
    state = {
        sanses:[
            [],[],[],[],[],[],[]
        ],
        first_range_error:false,
        second_range_error:false
  
    }

    componentDidMount(){
        let sanses = this.state.sanses
        if(this.props.days){
            this.generateSanses(this.props.days)
        }
    }
    

    generateSanses = (days) => {
        console.log(days)
        let sanses = [[],[],[],[],[],[],[]]
        days.map((day, index) => {
            let start_time = moment({hour: day.start_time})
            let duration = day.duration.split(':')
            let duration_hour = parseInt(duration[0],10)
            let duration_minute = parseInt(duration[1],10)
            duration = moment({hour:duration_hour,minute:duration_minute})
            let end_time = moment({hour:day.end_time})
            let temp = start_time
            let rest_start_time = moment({hour:day.rest_start_time})
            let rest_end_time = moment({hour:day.rest_end_time})
            while(temp <= end_time){
                let start_whitin = (temp > rest_start_time) && (temp < rest_end_time)
                let start_time = temp.hour().toString() + ':'+temp.minutes().toString() 
                temp.add(duration_hour,'hours')
                temp.add(duration_minute,'minutes')
                let end_time = temp.hour().toString() + ':'+temp.minutes().toString()
                console.log(start_time,end_time)
                let end_whitin = (temp > rest_start_time) && (temp < rest_end_time)
                
                if( !(start_whitin || end_whitin)){
                    sanses[index].push({start_time:start_time,end_time:end_time,capacity:day.capacity})
                }
            }  
        })
        console.log(sanses)
    }
    onSubmit = () => {

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
   

    render(){
        return(
            <PreviewTimetable 
                onConfirmChange={this.onConfirmChange} 
                deleteSans={this.deleteSans} 
                sanses={this.state.sanses}
                firstRangeValidation={this.validate_first_range}
                firstRangeError={this.state.first_range_error}
                secondRangeValidation={this.validate_second_range}
                secondRangeError={this.state.second_range_error}

            />
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

}

export default connect(mapStateToProps,mapDispatchToProps)(Preview_timetable_on_addService)