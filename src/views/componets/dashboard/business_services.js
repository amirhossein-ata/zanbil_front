import React from 'react'
import {connect} from 'react-redux'
import CardComponent from '../card/card'
import { Segment, Card,Grid, Divider, Header ,Image,Button,Breadcrumb,Comment,Rating} from 'semantic-ui-react';
import * as business_page_actions from '../../../core/business_page/business_page_actions'
import * as service_page_actions from '../../../core/service_page/service_page_actions'
import {change_panel} from '../../../core/main_page/active_panel_actions'

import moment from 'jalali-moment' 

class Services extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            endIndex:6   
        }
        this.on_service_click = this.on_service_click.bind(this)
    }
    async componentDidMount(){
        await this.props.get_business_info(this.props.business.id)    
    }
    async on_service_click(service_id){
        const today_date = moment().locale('fa').format('YYYY/MM/DD')
        await this.props.get_service_page_info(service_id,today_date)
        this.props.change_panel('service_page')
    }

    async on_edit_service_click(service_id){
        const today_date = moment().locale('fa').format('YYYY/MM/DD')        
        await this.props.get_service_page_info(service_id,today_date)
        this.props.change_panel('edit_service_page')
    }

    on_more_service_click = () => {
        let endIndex = this.state.endIndex + 6
        this.setState(() => ({endIndex:endIndex}))
    }
   

    render(){
        const services = this.props.services ? this.props.services.slice(0,this.state.endIndex) : []
    
        return(
            <Grid centered >
                    
                <div style={{width:'60%'}}>
                    <Button primary onClick={() => this.props.change_panel('add_service_page')}>اضافه کردن سرویس</Button>
            
                </div>


                <Grid.Column computer={14} mobile={15} tablet={15}>
                    <Grid textAlign="right">
                        {console.log(this.props.services[0])}
                            {services.map((service) => (
                                <Grid.Column computer={5} tablet={8} mobile={16}>
                                    <div>
                                        <Card color="teal" fluid raised style={{height:'50vh'}}>
                                            <Image fluid size="massive" src="https://tehdooni.com/wp-content/uploads/2017/12/7715_%DA%A9%D8%A7%D9%81%D9%87-%D8%AA%D9%88-%DA%A9%D8%A7%D9%81%D9%87-%D8%AC%D9%87%D8%A7%D9%86-%D8%A2%D8%B1%D8%A7.jpg" />
                                            <Card.Content>
                                                 
                                                <Card.Header>{service.name}</Card.Header>
                                                <Card.Meta>
                                                    <Rating disabled icon="star" defaultRating={service.rating%5} maxRating={5}/>            
                                                </Card.Meta>
                                                <Card.Description>{service.fee}</Card.Description>
                                                </Card.Content>
                                            <Card.Content extra>
                                
                                                <div style={{display:'flex',justifyContent:'space-around'}}>
                                                <Button primary onClick={()=>this.on_service_click(service.id)}>
                                                    نمایش سرویس
                                                </Button>
                                                <Button onClick={()=>this.on_edit_service_click(service.id)}>
                                                    ویرایش سرویس
                                                </Button>
                                                </div>
                                            </Card.Content>
                                            
                                        </Card>
                                
                                    </div>
                                    
                                </Grid.Column> 
                            ))}
                    </Grid>
                    {(this.props.services && this.props.services.length >6) &&(
                        <div>
                            <Divider hidden section/>
                            <Grid centered>
                                <Button 
                                    disabled={this.state.endIndex >= this.props.services.length}
                                    color="teal"
                                >
                                بیشتر
                                </Button>
                            </Grid>
                            <Divider hidden section/>
                        </div>
                    )}
                   
                </Grid.Column>
        </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        business : state.business_page_reducer.business ,
        services : state.business_page_reducer.services[0],
        active_panel:state.active_panel_reducer.active_panel
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        get_business_info : (business_id) => dispatch(business_page_actions.get_business_info(business_id)),
        get_service_page_info : (service_id,date) => dispatch(service_page_actions.get_services_page_info(service_id,date)),
        change_panel:(panel_name) => dispatch(change_panel(panel_name)),

      
    }
}
export default connect(mapStateToProps , mapDispatchToProps)(Services);