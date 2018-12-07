import React from 'react'
import {connect} from 'react-redux'
import Card from '../card/card'
import { Segment, Grid, Divider, Header ,Image,Button,Breadcrumb,Comment,Rating} from 'semantic-ui-react';
import * as business_page_actions from '../../../core/business_page/business_page_actions'
import * as service_page_actions from '../../../core/service_page/service_page_actions'
import {change_panel} from '../../../core/main_page/active_panel_actions'

import moment from 'jalali-moment' 

class Services extends React.Component{
    constructor(props){
        super(props)
        
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

    render(){
        return(
            <Grid centered >
                    
                <div style={{width:'60%'}}>
                    <Button primary onClick={() => this.props.change_panel('add_service_page')}>اضافه کردن سرویس</Button>
            
                </div>


                <Grid.Column computer={14} mobile={15} tablet={15}>
                    <Grid textAlign="right">
                        {this.props.services[0] && this.props.services[0].map((service) => (
                            <Grid.Column computer={5} tablet={8} mobile={16}>
                                <div onClick={()=>this.on_service_click(service.id)}>
                                    <Card
                                        info={true}
                                        image="https://tehdooni.com/wp-content/uploads/2017/12/7715_%DA%A9%D8%A7%D9%81%D9%87-%D8%AA%D9%88-%DA%A9%D8%A7%D9%81%D9%87-%D8%AC%D9%87%D8%A7%D9%86-%D8%A2%D8%B1%D8%A7.jpg"
                                        header={service.name}
                                        rating={service.rating}
                                        description={service.fee}
                                    />
                                
                                </div>    
                            </Grid.Column>

                        ))}
                    </Grid>
                </Grid.Column>
        </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        business : state.business_page_reducer.business ,
        services : state.business_page_reducer.services,
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