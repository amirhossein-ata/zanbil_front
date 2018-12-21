import React from 'react'
import {connect} from 'react-redux'
import {Grid, Header, Button, Divider} from 'semantic-ui-react'
import CardComponent from '../componets/card/card'
import RouterPanel from '../componets/router-panel/router-panel'
import * as category_page_actions from '../../core/category_page/category_page_actions'
import * as business_page_actions from '../../core/business_page/business_page_actions'
import {change_panel} from '../../core/main_page/active_panel_actions'
import {push_to_router} from '../../core/router/router_panel_actions'


class Category_page extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            endIndex:6,
        }

        this.on_business_click = this.on_business_click.bind(this)
    }
    componentDidMount(){

        console.log(this.props.businesses)
    }
    
    componentWillReceiveProps(){
        this.setState(()=>({endIndex:6}))
    }
    async on_business_click({id,name}){
        await this.props.get_business_info(id)
        this.props.push_to_router({
            text:name,
            value:'business_page'
        })
        this.props.change_panel('business_page')
        
    }

    onShowMoreClick = () => {
        let endIndex = this.state.endIndex + 6
        this.setState(() => ({
            endIndex:endIndex
        }))
    }
    render(){
        console.log('active_panel is : ',this.props.active_panel)
        const businesses = this.props.businesses ? this.props.businesses.slice(0,this.state.endIndex) : []
        return(
                <div>
                    <Grid centered textAlign="right">
                        <Grid.Column width={15}>
                            <RouterPanel />
                        
                        </Grid.Column>
                    </Grid>
                    <Grid centered textAlign="right">
                        {businesses.map((business) => (
                                <Grid.Column computer={5} tablet={8} mobile={16}>
                                    <div onClick={()=>this.on_business_click(business)}>
                                        <CardComponent
                                            info={true}
                                            image={business.pictures.length !== 0 ?  require(`../../assessts/ZanbilBackEnd/uploads/${business.pictures[business.pictures.length - 1].id}`) : "https://tehdooni.com/wp-content/uploads/2017/12/7715_%DA%A9%D8%A7%D9%81%D9%87-%D8%AA%D9%88-%DA%A9%D8%A7%D9%81%D9%87-%D8%AC%D9%87%D8%A7%D9%86-%D8%A2%D8%B1%D8%A7.jpg"}
                                            header={business.name}
                                            rating={business.rating}
                                            description={business.description}
                                        />                            
                                    </div>    
                                </Grid.Column>           
                            )
                        )}
                    </Grid>
                    {(this.props.businesses && this.props.businesses.length > 6) && (
                        <div>
                            <Divider hidden section/>
                            <Grid centered >
                                    <Button disabled={this.state.endIndex >= this.props.businesses.length} color="teal" onClick={this.onShowMoreClick}>بیشتر</Button>
                            </Grid>
                            <Divider hidden section/>
                        </div>
                    )}
                   
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
        push_to_router : (page) => dispatch(push_to_router(page))


    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Category_page)