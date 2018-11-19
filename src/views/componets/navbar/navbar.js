import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Dropdown , Menu} from 'semantic-ui-react'
import LoginForm from '../login&signup/loginForm'
import SignupForm from '../login&signup/signup_form'
import ModalComponent from '../modal/Modal'
import {categories} from '../../../core/constants'
import * as session_actions  from '../../../core/login&signup/session_actions'
import * as category_page_actions from '../../../core/category_page/category_page_actions'
import {change_panel} from '../../../core/main_page/active_panel_actions'
import {open_search_form} from '../../../core/search/search_actions'

const LoginModal = ModalComponent('ورود')(LoginForm)
const SignUpModal = ModalComponent('ثبت نام')(SignupForm)
class Navbar extends Component {
    state = { 
        activeItem: 'home',
        show_search : false
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

    showSearch = () => {
        this.props.change_panel('search')
        this.props.open_search_form()
    }
    render() {
    const { activeItem } = this.state

    
    return (
            <div>
                <Menu>
                    <Menu.Item
                        onClick={this.handleItemClick}
                    >
                        خانه
                    </Menu.Item>
            
                    <Dropdown text="دسته بندی ها" pointing className='link item' >
                        <Dropdown.Menu >
                            {categories.map((category) => (
                                <Dropdown.Item onClick={()=>this.handle_category_click(category.value)} >{category.text}</Dropdown.Item>
                            ))}

                        </Dropdown.Menu>
                    </Dropdown>    
                
                    <Menu.Item
                        onClick={()=>this.showSearch()}        
                    >
                        جست و جو
                    </Menu.Item>
                    {sessionStorage.getItem('token') ? (
                        <div style={{marginRight:'auto'}}>
                            <Dropdown  icon="user circle outilne" button pointing className='link item' >
                                <Dropdown.Menu >
                                    <Dropdown.Item onClick={this.acount_page_click}>حساب کاربری</Dropdown.Item>
                                    <Dropdown.Item onClick={this.logout_click} >خروج</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                    
                        </div>
                        
                    ):
                
                        <Menu.Item
                            position='left'
                            name='upcomingEvents'
                            active={activeItem === 'upcomingEvents'}
                            onClick={this.handleItemClick}
                        >   
                            <span style={{
                                display:'flex'
                            }}>
                                <LoginModal />
                                <SignUpModal />
                                
                            </span>
                        </Menu.Item>
                    }
                    
                </Menu>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return{
        logged_in : state.session_reducer.logged_in
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        logout : () => dispatch(session_actions.logout()),
        get_category_businesses: (category_id) => dispatch(category_page_actions.get_category_businesses(category_id)),
        change_panel:(panel_name) => dispatch(change_panel(panel_name)),
        open_search_form :() => dispatch(open_search_form())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)