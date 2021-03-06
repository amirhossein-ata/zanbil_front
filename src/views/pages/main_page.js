import React from 'react'
import {connect} from 'react-redux'
import Navbar from '../componets/navbar/navbar'
import BusinessPage from './business_page'
import ServicePage from './service_page'
import AccountPage from './account_page'
import { Dropdown , Menu ,Container,Icon,Image,Sidebar,Responsive,Grid, GridColumn, Segment } from 'semantic-ui-react';
import CategoryPage from './category_page'
import AddBusinessPage from '../componets/business_forms/add_business'
import AddServicePage from '../componets/add_service/add_service_form'
import SearchPage from '../pages/search_page'
import Landing_page from '../componets/landing_page/landing_page'
import * as session_actions  from '../../core/login&signup/session_actions'
import * as category_page_actions from '../../core/category_page/category_page_actions'
import {change_panel} from '../../core/main_page/active_panel_actions'
import {new_route} from '../../core/router/router_panel_actions'
import {open_search_form} from '../../core/search/search_actions'
import {NavBarDesktop , NavBarMobile} from '../componets/navbar/navbar'
import Dashboard from "../componets/dashboard/dashboard";
import AddBusiness from "../componets/business_forms/add_business"
import EditService from "../pages/edit_service_page"
import Preview_timetable_on_addService from '../componets/add_service//preview_timetable_on_addService'
import {categories} from '../../core/constants'

class Main_page extends React.Component{
    state = {
        visible: false,
        activeItem: 'home',
        show_search : false
    };

    componentDidMount(){
        if(sessionStorage.getItem('token')){
            this.props.login() 
        }
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    logout_click = () => {
        this.props.logout()
    }
    acount_page_click= () =>{
        this.props.change_panel("account_page")
    }
    handle_category_click=(category_id)=>{
        const category = (categories.find((category)=>category.value === category_id))
        this.props.select_new_route({text:category.text,value:'category'})
        this.props.change_panel('category')
        this.props.get_category_businesses(category_id)
    }

    handle_home_click = () => {
        this.props.change_panel('landing_page')
    }
    showSearch = () => {
        this.props.select_new_route({text:'جست و جو',value:'search'})
        this.props.change_panel('search')
        this.props.open_search_form()
    }

    handlePusher = () => {
        const { visible } = this.state;
    
        if (visible) this.setState({ visible: false });
    };
    
    handleToggle = () => this.setState({ visible: !this.state.visible });
    get_active_panel=() => {
        switch (this.props.active_panel) {
            
            case 'category':
                return <CategoryPage />;
            case 'business_page':
                return <BusinessPage />;
            case 'add_business_page':
                return <AddBusinessPage />
            case 'add_service_page':
                return <AddServicePage />
            case 'service_page' :
                return <ServicePage />
            case 'search' :
                return <SearchPage/>
            case"account_page":
                return <AccountPage/>
            case 'dashboard':
                return <Dashboard/>
            case 'landing_page':
                return <Landing_page/>
            case "add_business_page":
                return <AddBusiness />
            case "edit_service_page":
                return <EditService />
            case 'preview_timetable_on_addService':
                return <Preview_timetable_on_addService />
            default:
                return ''
        }
  
    }

    
    render(){
        const { visible } = this.state;

        console.log('active panel is : ',this.props.active_panel )
        console.log('loggggggggggggggggg' , this.props.logged_in)
        return(
            <div style={{minHeight:'100vh',background:'#f4f6f9'}}>
                <Responsive {...Responsive.onlyMobile}>
                    <NavBarMobile
                        onPusherClick={this.handlePusher}
                        onToggle={this.handleToggle}
                        visible={visible}
                        acount_page_click={this.acount_page_click}
                        logout_click={this.logout_click}
                        handle_home_click={this.handle_home_click}
                        handle_category_click={this.handle_category_click}
                        showSearch={this.showSearch}
                        logged_in={this.props.logged_in}
                        Component={this.get_active_panel}
                    >
                    </NavBarMobile>
            
                </Responsive>
                <Responsive {...Responsive.onlyComputer}>
                    <div>
                        <NavBarDesktop 
                            acount_page_click={this.acount_page_click}
                            logout_click={this.logout_click}
                            handle_home_click={this.handle_home_click}
                            handle_category_click={this.handle_category_click}
                            showSearch={this.showSearch}   
                            logged_in={this.props.logged_in} 
                        />
                        <br></br><br></br><br></br>
                        <br></br><br></br><br></br>

                        {this.get_active_panel()}
                          
                    </div>

                </Responsive>    
            
                                
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        active_panel:state.active_panel_reducer.active_panel,
        logged_in : state.session_reducer.logged_in,
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        logout : () => dispatch(session_actions.logout()),
        get_category_businesses: (category_id) => dispatch(category_page_actions.get_category_businesses(category_id)),
        change_panel:(panel_name) => dispatch(change_panel(panel_name)),
        open_search_form :() => dispatch(open_search_form()),
        login : () => dispatch(session_actions.login_success()),
        select_new_route : (page) => dispatch(new_route(page))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main_page)
