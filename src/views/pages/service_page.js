import React from 'react'
import {connect} from 'react-redux'
import Card from '../componets/card/card'
import Timetable from '../componets/timetable/timetable'
import {Grid, Divider , Header, Responsive} from 'semantic-ui-react';
import * as service_page_actions from '../../core/service_page/service_page_actions'

class Service_page extends React.Component{
    componentDidMount(){
        // this.props.get_service_page_info(this.props.service.id,moment().locale('fa').format('YYYY/MM/DD'))
        console.log('service page mounnteeeeeeeeeeeeeeeeeeeeeeeed')
    }
    render(){
        return(
            <Grid centered>
                <Grid.Column computer={15}>
                <br></br>
                <Header dividing textAlign="center">صفحه ی سرویس</Header>
                <br></br>
            
                <Responsive {...Responsive.onlyMobile}>
                    <Grid textAlign="right" centered >
                        <Grid.Column computer={8} tablet={8} mobile={8}>
                            {this.props.service && (
                                <Card 
                                    info={true}
                                    image="https://tehdooni.com/wp-content/uploads/2017/12/7715_%DA%A9%D8%A7%D9%81%D9%87-%D8%AA%D9%88-%DA%A9%D8%A7%D9%81%D9%87-%D8%AC%D9%87%D8%A7%D9%86-%D8%A2%D8%B1%D8%A7.jpg"                                
                                    rating={this.props.service.rating}
                                    header={this.props.service.name}
                                    description={`قیمت : ${this.props.service.fee}`}
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
                    
                </Responsive>
                <Responsive {...Responsive.onlyComputer}>
                    <Grid textAlign="right">
                        <Grid.Column computer={4}>
                            {this.props.service && (
                                <Card 
                                    info={true}
                                    image="https://tehdooni.com/wp-content/uploads/2017/12/7715_%DA%A9%D8%A7%D9%81%D9%87-%D8%AA%D9%88-%DA%A9%D8%A7%D9%81%D9%87-%D8%AC%D9%87%D8%A7%D9%86-%D8%A2%D8%B1%D8%A7.jpg"                                
                                    rating={this.props.service.rating}
                                    header={this.props.service.name}
                                    description={`قیمت : ${this.props.service.fee}`}
                                />
                            )}  
                        </Grid.Column>
                        <Grid.Column computer={12}>
                            <Timetable sanses={this.props.sanses}/>                        
                        </Grid.Column>
                    </Grid>
                </Responsive>
                <Responsive {...Responsive.onlyTablet}>
                    <Grid textAlign="right">
                        <Grid.Column computer={4}>
                            {this.props.service && (
                                <Card 
                                    info={true}
                                    image="https://tehdooni.com/wp-content/uploads/2017/12/7715_%DA%A9%D8%A7%D9%81%D9%87-%D8%AA%D9%88-%DA%A9%D8%A7%D9%81%D9%87-%D8%AC%D9%87%D8%A7%D9%86-%D8%A2%D8%B1%D8%A7.jpg"                                
                                    rating={this.props.service.rating}
                                    header={this.props.service.name}
                                    description={`قیمت : ${this.props.service.fee}`}
                                />
                            )}  
                        </Grid.Column>
                        <Grid.Column computer={12}>
                            <Timetable sanses={this.props.sanses}/>                        
                        </Grid.Column>
                    </Grid>
                </Responsive>
                    
            </Grid.Column>
            </Grid>
            
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