import React from 'react'
import {connect} from 'react-redux'
import Card from '../componets/card/card'
import Timetable from '../componets/timetable/timetable'
import { Segment, Grid, Divider, Header} from 'semantic-ui-react';
import * as service_page_actions from '../../core/service_page/service_page_actions'
class Service_page extends React.Component{
    componentDidMount(){
        this.props.get_service_page_info(1)
    }
    render(){
        console.log(this.props.services)
        return(
            <Segment raised>
                <Grid textAlign="right" >
                    <Grid.Column computer={6} tablet={6} mobile={4}></Grid.Column>
                    <Grid.Column computer={8} tablet={8} mobile={8}>
                        {this.props.service && (
                            <Card 
                                header={this.props.service.name}
                                description={this.props.service.description}
                            />
                        )}
                                 
                    </Grid.Column>
                </Grid>
                <Divider
                    section
                />
                <Grid centered>
                    <Grid.Column computer={12} tablet={16} mobile={16}>
                        <Timetable sanses={this.props.sanses}/>
                    </Grid.Column>
                </Grid>
                    
            </Segment>
            
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return{
        service:state.service_page_reducer.service,
        sanses : state.service_page_reducer.sanses
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        get_service_page_info : (service_id) => dispatch(service_page_actions.get_services_page_info(service_id))

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Service_page)