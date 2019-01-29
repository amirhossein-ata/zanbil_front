import Timetable_column from './timetable_column';
import React from 'react';
import { Grid } from 'semantic-ui-react';

class TimeTable extends React.Component {


    render() {
        let days=[]
        this.props.sanses &&this.props.sanses.map((day,i)=>{
            days[i]=day
        })
        console.log(days)        
        return (
            <Grid centered textAlign="center">
                <Grid.Column computer={2} mobile={6} tablet={5}>
                    <Timetable_column sanses = {days[0]} index={0}  day = {"شنبه"} onSansClick={this.props.onSansClick} edit={this.props.edit}/>            
                </Grid.Column>

                <Grid.Column computer={2} mobile={6} tablet={5}>
                    <Timetable_column sanses = {days[1]} index={1} day = {"۱شنبه"} onSansClick={this.props.onSansClick} edit={this.props.edit}/>
                </Grid.Column>
                <Grid.Column computer={2} mobile={6} tablet={5}>
                    <Timetable_column sanses = {days[2]} index={2} day = {"۲شنبه"} onSansClick={this.props.onSansClick} edit={this.props.edit}/>
                </Grid.Column>
                <Grid.Column computer={2} mobile={6} tablet={5}>
                    <Timetable_column sanses = {days[3]} index={3} day = {"۳شنبه"} onSansClick={this.props.onSansClick} edit={this.props.edit}/>
                </Grid.Column>
                <Grid.Column computer={2} mobile={6} tablet={5}>
                    <Timetable_column sanses = {days[4]} index={4} day = {"۴شنبه"} onSansClick={this.props.onSansClick} edit={this.props.edit}/>
                </Grid.Column>
                <Grid.Column computer={2} mobile={6} tablet={5}>
                    <Timetable_column sanses = {days[5]} index={5} day = {"۵شنبه"} onSansClick={this.props.onSansClick} edit={this.props.edit}/>
                </Grid.Column>
                <Grid.Column computer={2} mobile={6} tablet={5}>
                    <Timetable_column sanses = {days[6]} index={6} day = {"جمعه"}  onSansClick={this.props.onSansClick} edit={this.props.edit}/>
                
                </Grid.Column>

            </Grid>
        )
    }
}

export default TimeTable;