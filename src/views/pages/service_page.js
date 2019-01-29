import React from 'react'
import {connect} from 'react-redux'
import Timetable from '../componets/timetable/changed_timetable'
import {Grid, Divider, Card, Header, Responsive,Image,Rating} from 'semantic-ui-react';
import * as service_page_actions from '../../core/service_page/service_page_actions'
import RouterPanel from '../componets/router-panel/router-panel'


class Service_page extends React.Component{
    render(){
        return(
            <Grid centered>
                <Grid.Column computer={15}>
                <RouterPanel />
                <br></br>
                <Header dividing textAlign="center">صفحه ی سرویس</Header>
                <br></br>
            
                <Responsive {...Responsive.onlyMobile}>
                    <Grid textAlign="right" centered >
                        <Grid.Column computer={8} tablet={8} mobile={8}>
                            {this.props.service && (
                                <Card 
                                    raised 
                                    fluid  
                                    color="teal" 
                                    style={{height:'50vh'}} 
                                >
                                    <Image 
                                        size="massive"
                                        src={this.props.service.pictures[0] ?  require(`../../assessts/ZanbilBackEnd/uploads/${this.props.service.pictures[this.props.service.pictures.length - 1].id}`) : "https://tehdooni.com/wp-content/uploads/2017/12/7715_%DA%A9%D8%A7%D9%81%D9%87-%D8%AA%D9%88-%DA%A9%D8%A7%D9%81%D9%87-%D8%AC%D9%87%D8%A7%D9%86-%D8%A2%D8%B1%D8%A7.jpg"}
                                    />
                                    <Card.Content textAlign="right">
                                        <Card.Header>{this.props.service.name}</Card.Header>
                                        <Card.Meta>
                                            <Rating disabled icon="star" defaultRating={this.props.service.rating%5} maxRating={5}/>            
                                        </Card.Meta>
                                        <Card.Description>{`قیمت : ${this.props.service.fee}`}</Card.Description>
                                    </Card.Content>
                                </Card>
                                
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
                                    raised 
                                    fluid  
                                    color="teal" 
                                    style={{height:'97vh'}} 

                                >
                                    <Image 
                                        size="massive" 
                                        src= {this.props.service.pictures[0] ?  require(`../../assessts/ZanbilBackEnd/uploads/${this.props.service.pictures[this.props.service.pictures.length - 1].id}`) : "https://tehdooni.com/wp-content/uploads/2017/12/7715_%DA%A9%D8%A7%D9%81%D9%87-%D8%AA%D9%88-%DA%A9%D8%A7%D9%81%D9%87-%D8%AC%D9%87%D8%A7%D9%86-%D8%A2%D8%B1%D8%A7.jpg"}
                                    />
                                    <Card.Content textAlign="right">
                                        <Card.Header>{this.props.service.name}</Card.Header>
                                        <Card.Meta>
                                            <Rating disabled icon="star" defaultRating={this.props.service.rating%5} maxRating={5}/>            
                                        </Card.Meta>
                                        <Card.Description>{`قیمت : ${this.props.service.fee}`}</Card.Description>
                                    </Card.Content>
                                </Card>
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
                                    image = {this.props.service.pictures[0] ?  require(`../../assessts/ZanbilBackEnd/uploads/${this.props.service.pictures[this.props.service.pictures.length - 1].id}`) : "https://tehdooni.com/wp-content/uploads/2017/12/7715_%DA%A9%D8%A7%D9%81%D9%87-%D8%AA%D9%88-%DA%A9%D8%A7%D9%81%D9%87-%D8%AC%D9%87%D8%A7%D9%86-%D8%A2%D8%B1%D8%A7.jpg"}
                                    rating={this.props.service.rating}
                                    header={this.props.service.name}
                                    description={`قیمت : ${this.props.service.fee}`}
                                    height = "100vh"
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