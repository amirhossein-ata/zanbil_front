import React from 'react'
import {connect} from 'react-redux'
import Card from '../componets/card/card'
import { Segment, Grid, Divider, Header ,Image,Button,Breadcrumb} from 'semantic-ui-react';
import * as business_page_actions from '../../core/business_page/business_page_actions'
import {change_panel} from '../../core/main_page/active_panel_actions'
import * as service_page_actions from '../../core/service_page/service_page_actions'
import moment from 'jalali-moment' 

class Business_page extends React.Component{
    constructor(props){
        super(props)

        this.on_service_click = this.on_service_click.bind(this)
    }
    async componentDidMount(){
        await this.props.get_business_info(1)
        console.log(this.props.services , this.props.business)

    }
    async on_service_click(service_id){
        const today_date = moment().locale('fa').format('YYYY/MM/DD')
        await this.props.get_service_page_info(service_id,today_date)
        console.log('ssssssssssssssssssssssssssssssssssssssssssssssssssssssssss')
        this.props.change_panel('service_page')
    }
    
    render(){
        console.log('active panel is : ',this.props.active_panel)
        return(
            <Segment raised>
                <Grid textAlign="right" centered>
                    <div style={{marginTop:'2%'}}>
                        <Image 
                            src='https://tehdooni.com/wp-content/uploads/2017/12/7715_%DA%A9%D8%A7%D9%81%D9%87-%D8%AA%D9%88-%DA%A9%D8%A7%D9%81%D9%87-%D8%AC%D9%87%D8%A7%D9%86-%D8%A2%D8%B1%D8%A7.jpg' 
                            fluid 
                        />
                    </div>
                    {this.props.business && (
                            <Segment padded="very" stacked textAlign="right">
                                <p>مشخصات : </p>
                                <p>{this.props.business.name}</p>
                                <p>{this.props.business.description}</p>
                                <Breadcrumb>
                                    <Breadcrumb.Section>
                                        {this.props.business.email}
                                    </Breadcrumb.Section>
                                    <Breadcrumb.Divider ></Breadcrumb.Divider>
                                    <Breadcrumb.Section >
                                        {this.props.business.phone_number}
                                    </Breadcrumb.Section>
                                </Breadcrumb>          
                            </Segment>
                        )
                    }
                </Grid>
                <Divider
                    section
                />
                <Header size='medium' textAlign="center">سرویس ها</Header>
                <br></br>
                <Grid centered >
                    
                        <div style={{width:'60%'}}>
                            <Button primary onClick={() => this.props.change_panel('add_service_page')}>اضافه کردن سرویس</Button>
                    
                        </div>


                    <Grid.Column computer={14} mobile={15} tablet={15}>
                        <Grid textAlign="right">
                            {this.props.services[0] && this.props.services[0].map((service) => (
                                <Grid.Column computer={4}>
                                    <div onClick={()=>this.on_service_click(service.id)}>
                                        <Card
                                            header={service.name}
                                            meta2={service.rating}
                                            description={service.fee}
                                        />
                                    
                                    </div>    
                                </Grid.Column>

                            ))}
                        </Grid>
                    </Grid.Column>
                </Grid>        
            </Segment>
            
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
        change_panel:(panel_name) => dispatch(change_panel(panel_name)),
        get_service_page_info : (service_id,date) => dispatch(service_page_actions.get_services_page_info(service_id,date))

    }
}
export default connect(mapStateToProps , mapDispatchToProps)(Business_page);