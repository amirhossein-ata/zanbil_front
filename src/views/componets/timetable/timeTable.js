import Timetable_column from './timetable_column';
import React from 'react';

class TimeTable extends React.Component {


    render() {
        return (
            <div>
            <Timetable_column index={0} day = {"شنبه"} />
                <Timetable_column index={1} day = {"۱شنبه"} onSansClick={this.props.onSansClick} edit={this.props.edit}/>
                <Timetable_column index={2} day = {"۲شنبه"} onSansClick={this.props.onSansClick} edit={this.props.edit}/>
                <Timetable_column index={3} day = {"۳شنبه"} onSansClick={this.props.onSansClick} edit={this.props.edit}/>
                <Timetable_column index={4} day = {"۴شنبه"} onSansClick={this.props.onSansClick} edit={this.props.edit}/>
                <Timetable_column index={5} day = {"۵شنبه"} onSansClick={this.props.onSansClick} edit={this.props.edit}/>
                <Timetable_column index={6} day = {"جمعه"}  onSansClick={this.props.onSansClick} edit={this.props.edit}/>
                
            
            </div>
        )
    }
}

export default TimeTable;