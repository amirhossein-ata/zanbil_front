import React from 'react'
import {connect} from 'react-redux'
import { Sidebar , Button,Menu,Icon,Segment,Image,Header, Grid, Card } from 'semantic-ui-react';
import {close_search_form} from '../../core/search/search_actions'
import SearchForm from '../componets/search/search'
import CardComponent from '../componets/card/card'
import moment from 'jalali-moment' 
import {change_panel} from '../../core/main_page/active_panel_actions'
import * as service_page_actions from '../../core/service_page/service_page_actions'
import RouterPanel from '../componets/router-panel/router-panel'
import {push_to_router} from '../../core/router/router_panel_actions'

class Search_page extends React.Component{
    state = { visible: true }


    handleSidebarHide = () => {
        this.props.close_search_form()
    }

    async on_service_click({id,name}){
        const today_date = moment().locale('fa').format('YYYY/MM/DD')
        await this.props.get_service_page_info(id,today_date)
     
        this.props.push_to_router({
            text:name,
            value:'service_page'
        })
     
        this.props.change_panel('service_page')
    }
    
    render(){
        return(
            <div>

                {this.props.visible && (
                    <Grid centered>
                        <Grid.Column computer={15}>
                            <Segment textAlign="right">

                                <div style={{marginRight:'auto',marginLeft:'1%',width:'1%'}} onClick={this.handleSidebarHide}>
                                    <Icon name="window close"></Icon>                    
                                </div>
                                <SearchForm/>                       
                            </Segment>    
                        </Grid.Column>
                    </Grid>
                    
                )}
                    
                <Grid textAlign="right" centered>
                    <Grid.Column computer={15} mobile={15} tablet={15}>
                        <RouterPanel />
                    </Grid.Column>
                    {this.props.search_results && this.props.search_results.map((search_result) => (
                        <Grid.Column computer={5} tablet={8} mobile={16}>
                            <div onClick={()=>this.on_service_click(search_result)}>
                                <CardComponent 
                                        info={true}
                                        image="https://tehdooni.com/wp-content/uploads/2017/12/7715_%DA%A9%D8%A7%D9%81%D9%87-%D8%AA%D9%88-%DA%A9%D8%A7%D9%81%D9%87-%D8%AC%D9%87%D8%A7%D9%86-%D8%A2%D8%B1%D8%A7.jpg"
                                        header={`${search_result.business.name}/${search_result.name}`}
                                        rating={search_result.rating}
                                        description={`قیمت : ${search_result.fee}`}
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
    console.log(state)
    return{
        visible : state.search_reducer.form_open,
        search_results : state.search_reducer.search_results
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        close_search_form:() => dispatch(close_search_form()),
        change_panel:(panel_name) => dispatch(change_panel(panel_name)),
        get_service_page_info : (service_id,date) => dispatch(service_page_actions.get_services_page_info(service_id,date)),
        push_to_router:(page) => dispatch(push_to_router(page))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Search_page)