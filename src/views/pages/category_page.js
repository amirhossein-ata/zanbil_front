import React from 'react'
import {connect} from 'react-redux'
import {Grid, Header} from 'semantic-ui-react'
import CardComponent from '../componets/card/card'
import * as category_page_actions from '../../core/category_page/category_page_actions'
import * as business_page_actions from '../../core/business_page/business_page_actions'
import {change_panel} from '../../core/main_page/active_panel_actions'

class Category_page extends React.Component{
    componentDidMount(){

        console.log(this.props.businesses)
    }
    on_business_click=(business_id)=>{
        this.props.get_business_info(business_id)
        this.props.change_panel('business_page')
    }
    render(){
        console.log('active_panel is : ',this.props.active_panel)

        if(this.props.businesses){
            console.log(this.props.businesses[0])
        }
        return(
            <div>
                <Header textAlign="right">رستوران ها</Header>

                <Grid textAlign="right">
                    {this.props.businesses && this.props.businesses.map((business) => (
                            <Grid.Column computer={4}>
                                <div onClick={()=>this.on_business_click(business.id)}>
                                <CardComponent

                                        header={business.name}
                                        meta1={business.fee}
                                        description={business.description}
                                    />                            
                                </div>    
                            </Grid.Column>           
                    ))}
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        businesses : state.category_page_reducer.businesses[0],
        active_panel : state.active_panel_reducer.active_panel
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        get_category_businesses:(category_id) => dispatch(category_page_actions.get_category_businesses(category_id)),
        change_panel:(panel_name) => dispatch(change_panel(panel_name)),
        get_business_info : (business_id) => dispatch(business_page_actions.get_business_info(business_id)),


    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Category_page)