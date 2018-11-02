import React from 'react'
import {connect} from 'react-redux'
import Card from '../componets/card/card'
import { Segment, Grid, Divider, Header, Label, Button} from 'semantic-ui-react';
import * as business_page_actions from '../../core/business_page/business_page_actions'
import {change_panel} from '../../core/main_page/active_panel_actions'

class Business_page extends React.Component{
    async componentDidMount(){
        await this.props.get_business_services()
        console.log(this.props.services)
    }
    render(){
        console.log('active panel is : ',this.props.active_panel)
        return(
            <Segment raised>
                <Grid textAlign="right" >
                    <Grid.Column computer={6}></Grid.Column>
                    <Grid.Column computer={8}>
                        <Card 
                            header="نام بیزینس"
                            description="توضیحات"
                        />         
                    </Grid.Column>
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
                                    <div 
                                        onClick={() => this.props.change_panel('service_page')}    
                                    >
                                        <Card
                                            
                                            header={service.title}
                                            meta2={service.id}
                                            description={service.body}
                                            button="مشاهده جدول زمانی"
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
        services : state.business_page_reducer,
        active_panel:state.active_panel_reducer.active_panel
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        get_business_services : () => dispatch(business_page_actions.get_services()),
        change_panel:(panel_name) => dispatch(change_panel(panel_name))
    }
}
export default connect(mapStateToProps , mapDispatchToProps)(Business_page);