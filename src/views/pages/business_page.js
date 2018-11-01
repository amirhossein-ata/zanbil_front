import React from 'react'
import {connect} from 'react-redux'
import Card from '../componets/card/card'
import { Segment, Grid, Divider, Header} from 'semantic-ui-react';
import * as business_page_actions from '../../core/business_page/business_page_actions'
class Business_page extends React.Component{
    async componentDidMount(){
        await this.props.get_business_info(1)
        console.log(this.props.services , this.props.business)

    }
    render(){
        return(
            <Segment raised>
                <Grid textAlign="right" >
                    <Grid.Column computer={6}></Grid.Column>
                    <Grid.Column computer={8}>
                        {this.props.business && (
                                <Card 
                                    header={this.props.business.name}
                                    description={this.props.business.description}
                                />
                            )
                        }
                                
                    </Grid.Column>
                </Grid>
                <Divider
                    section
                />
                <Header size='medium' textAlign="center">سرویس ها</Header>
                <br></br>
                <Grid centered >

                    <Grid.Column computer={14} mobile={15} tablet={15}>
                        <Grid textAlign="right">
                            {this.props.services[0] && this.props.services[0].map((service) => (
                                <Grid.Column computer={4}>
                                    <Card
                                        header={service.name}
                                        meta2={service.rating}
                                        description={service.fee}
                                        button="مشاهده جدول زمانی"
                                    />
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
        services : state.business_page_reducer.services
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        get_business_info : (business_id) => dispatch(business_page_actions.get_business_info(business_id))
    }
}
export default connect(mapStateToProps , mapDispatchToProps)(Business_page);