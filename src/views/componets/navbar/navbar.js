import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Dropdown , Menu} from 'semantic-ui-react'
import LoginForm from '../login&signup/loginForm'
import SignupForm from '../login&signup/signup_form'
import ModalComponent from '../modal/Modal'
import {categories} from '../../../core/constants'
import * as session_actions  from '../../../core/login&signup/session_actions'
import * as category_page_actions from '../../../core/category_page/category_page_actions'

const LoginModal = ModalComponent('ورود')(LoginForm)
const SignUpModal = ModalComponent('ثبت نام')(SignupForm)
class Navbar extends Component {
    state = { 
        activeItem: 'home',
    }
    

        
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    logout_click = () => {
        this.props.logout()
    }
    handle_category_click=(category_id)=>{
        this.props.get_category_businesses(category_id)
    }
    render() {
    const { activeItem } = this.state
    const style = {
        backgroundColor:'#84bae8',
        color:'white'
    }

    
    return (
        <Menu pointing color="blue" inverted>
            <Menu.Item 
                name='خانه' 
                active={activeItem === 'خانه'} 
                onClick={this.handleItemClick} 
            />
            <Dropdown text="دسته بندی ها" pointing className='link item' >
                <Dropdown.Menu style={style}>
                    {categories.map((category) => (
                        <Dropdown.Item onClick={()=>this.handle_category_click(category.value)} >{category.text}</Dropdown.Item>
                    ))}

                </Dropdown.Menu>
            </Dropdown>
            <Menu.Item
                position="left"
            >
                    {sessionStorage.getItem('token') ? (
                        <Dropdown  icon="user circle outilne" pointing className='link item' >
                            <Dropdown.Menu style={style}>
                                <Dropdown.Item onClick={this.logout_click} >خروج</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    ):(
                        <span style={{
                            display:'flex'
                        }}>
                            <LoginModal />
                            <SignUpModal />
                        </span>
                    )}
            </Menu.Item>
        </Menu>
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
        get_category_businesses:(category_id) => dispatch(category_page_actions.get_category_businesses(category_id))

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)