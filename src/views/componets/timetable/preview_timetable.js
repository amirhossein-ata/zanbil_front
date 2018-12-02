import React from 'react';
import timetable_column from './timetable_column';
import {Header, Segment} from 'semantic-ui-react'
class preview_timetable extends React.Component {

    onClick = () =>{

    }

    render(){
        return(
            <div>
            <Header>some shit</Header>
            {this.props.sanses &&
                <Segment>
                <timetable_column index={0} day = {"شنبه"}/>
                <timetable_column index={1} day = {"۱شنبه"}/>
                <timetable_column index={2} day = {"۲شنبه"}/>
                <timetable_column index={3} day = {"۳شنبه"}/>
                <timetable_column index={4} day = {"۴شنبه"}/>
                <timetable_column index={5} day = {"۵شنبه"}/>
                <timetable_column index={6} day = {"جمعه"}/>
                
                
                </Segment>
            
            
            }
            
            </div>

        )
    }
}