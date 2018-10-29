import React from 'react'
import {connect} from 'react-redux'
import Card from '../componets/card/card'
import Timetable from '../componets/timetable/timetable'
import { Segment, Grid, Divider, Header} from 'semantic-ui-react';
class Service_page extends React.Component{
    render(){
        console.log(this.props.services)
        return(
            <Segment raised>
                <Grid textAlign="right" >
                    <Grid.Column computer={6} tablet={6} mobile={4}></Grid.Column>
                    <Grid.Column computer={8} tablet={8} mobile={8}>
                        <Card 
                            header="نام بیزینس"
                            description="توضیحات"
                        />         
                    </Grid.Column>
                </Grid>
                <Divider
                    section
                />
                <Grid centered>
                    <Grid.Column computer={12} tablet={16} mobile={16}>
                        <Timetable />
                    </Grid.Column>
                </Grid>
                    
            </Segment>
            
        )
    }
}

export default (Service_page);