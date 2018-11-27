import React from 'react'
import {connect} from 'react-redux'
import Navbar from '../componets/navbar/navbar'
import BusinessPage from './business_page'
import ServicePage from './service_page'
import AccountPage from './account_page'
import { Dropdown , Menu ,Container,Icon,Image,Sidebar,Responsive,Grid, GridColumn, Segment } from 'semantic-ui-react';
import CategoryPage from './category_page'
import AddBusinessPage from '../componets/add_business/add_business'
import AddServicePage from '../componets/add_service/add_service_form'
import SearchPage from '../pages/search_page'
import Landing_page from '../componets/landing_page/landing_page'
import LoginForm from '../componets/login&signup/loginForm'
import SignupForm from '../componets/login&signup/signup_form'
import ModalComponent from '../componets/modal/Modal'
import {categories} from '../../core/constants'
import * as session_actions  from '../../core/login&signup/session_actions'
import * as category_page_actions from '../../core/category_page/category_page_actions'
import {change_panel} from '../../core/main_page/active_panel_actions'
import {open_search_form} from '../../core/search/search_actions'
import {NavBarDesktop , NavBarMobile} from '../componets/navbar/navbar'
import Dashboard from "../componets/dashboard/dashboard";
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
        this.props.change_panel('category')
        this.props.get_category_businesses(category_id)
    }

    handle_home_click = () => {
        this.props.change_panel('landing_page')
    }
    showSearch = () => {
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
            case 'landing_page':
                return <Dashboard/>
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

                        {this.props.active_panel==='landing_page' ? (
                            <Dashboard />
                        ) : (
                            <div style={{margin:'3%'}}>
                                <Grid centered>
                                    <Grid.Column computer={14}>
                                        {this.get_active_panel()}
                                    </Grid.Column>
                                </Grid>

                            </div>
                            
                        )}
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
        login : () => dispatch(session_actions.login_success())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main_page)
