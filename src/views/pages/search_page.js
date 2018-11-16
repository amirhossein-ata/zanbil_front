import React from 'react'
import {connect} from 'react-redux'
import { Sidebar , Button,Menu,Icon,Segment,Image,Header, Grid, Card } from 'semantic-ui-react';
import {close_search_form} from '../../core/search/search_actions'
import SearchForm from '../componets/search/search'
import CardComponent from '../componets/card/card'
import moment from 'jalali-moment' 
import {change_panel} from '../../core/main_page/active_panel_actions'
import * as service_page_actions from '../../core/service_page/service_page_actions'


class Search_page extends React.Component{
    state = { visible: true }


    handleSidebarHide = () => {
        this.props.close_search_form()
    }

    async on_service_click(service_id){
        const today_date = moment().locale('fa').format('YYYY/MM/DD')
        this.props.get_service_page_info(service_id,today_date)
        this.props.change_panel('service_page')
    }
    
    render(){
        return(
            <div>

                {this.props.visible && (
                    <Segment textAlign="right">

                        <div style={{marginRight:'auto',marginLeft:'1%',width:'1%'}} onClick={this.handleSidebarHide}>
                            <Icon name="window close"></Icon>                    
                        </div>
                        <SearchForm/>                       
                    </Segment>
                )}
                    
                <Grid textAlign="right">
                    {this.props.search_results && this.props.search_results.map((search_result) => (
                        <Grid.Column computer={4} tablet={8} mobile={8}>
                            <div onClick={()=>this.on_service_click(search_result.id)}>
                                <CardComponent 
                                        header={`${search_result.name}/${search_result.fee}`}
                                        meta1={search_result.business.name}
                                        description={search_result.rating}
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
        get_service_page_info : (service_id,date) => dispatch(service_page_actions.get_services_page_info(service_id,date))

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Search_page)