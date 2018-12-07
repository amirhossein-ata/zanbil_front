import React from 'react'
import {connect} from 'react-redux'
import {Grid, Header} from 'semantic-ui-react'
import CardComponent from '../componets/card/card'
import * as category_page_actions from '../../core/category_page/category_page_actions'
import * as business_page_actions from '../../core/business_page/business_page_actions'
import {change_panel} from '../../core/main_page/active_panel_actions'

class Category_page extends React.Component{
    constructor(props){
        super(props)

        this.on_business_click = this.on_business_click.bind(this)
    }
    componentDidMount(){

        console.log(this.props.businesses)
    }
    async on_business_click(business_id){
        await this.props.get_business_info(business_id)
        this.props.change_panel('business_page')
    }
    render(){
        console.log('active_panel is : ',this.props.active_panel)

        return(
                <Grid centered textAlign="right">
                    {this.props.businesses && this.props.businesses.map((business) => (
                            <Grid.Column computer={5} tablet={8} mobile={16}>
                                <div onClick={()=>this.on_business_click(business.id)}>
                                    <CardComponent
                                        info={true}
                                        image={business.pictures ?  require(`../../assessts/ZanbilBackEnd/uploads/${business.pictures[business.pictures.length - 1].id}`) : "https://tehdooni.com/wp-content/uploads/2017/12/7715_%DA%A9%D8%A7%D9%81%D9%87-%D8%AA%D9%88-%DA%A9%D8%A7%D9%81%D9%87-%D8%AC%D9%87%D8%A7%D9%86-%D8%A2%D8%B1%D8%A7.jpg"}
                                        header={business.name}
                                        rating={business.rating}
                                        description={business.description}
                                    />                            
                                </div>    
                            </Grid.Column>           
                        )
                    )}
                </Grid>
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