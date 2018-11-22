import React from 'react'
import {connect} from 'react-redux'
import Card from '../componets/card/card'
import Timetable from '../componets/timetable/timetable'
import {Grid, Divider , Header} from 'semantic-ui-react';
import * as service_page_actions from '../../core/service_page/service_page_actions'

class Service_page extends React.Component{
    componentDidMount(){
        // this.props.get_service_page_info(this.props.service.id,moment().locale('fa').format('YYYY/MM/DD'))
        console.log('service page mounnteeeeeeeeeeeeeeeeeeeeeeeed')
    }
    render(){
        return(
            <div>
                <br></br>
                <Header dividing textAlign="center">صفحه ی سرویس</Header>
                <br></br>
                <Grid textAlign="right" >

                    <Grid.Column computer={6} tablet={6} mobile={4}></Grid.Column>
                    <Grid.Column computer={8} tablet={8} mobile={8}>
                        {this.props.service && (
                            <Card 
                                semantic={true}
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
                    
            </div>
            
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
        get_service_page_info : (service_id,date) => dispatch(service_page_actions.get_services_page_info(service_id,date))

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Service_page)