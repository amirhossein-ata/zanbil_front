import React from 'react'
import { Dropdown , Menu ,Container,Icon,Image,Sidebar,Responsive,Grid, GridColumn, Segment } from 'semantic-ui-react';
import LoginForm from '../login&signup/loginForm'
import SignupForm from '../login&signup/signup_form'
import ModalComponent from '../modal/Modal'
import {categories} from '../../../core/constants'


const LoginModal = ModalComponent('ورود')(LoginForm)
const SignUpModal = ModalComponent('ثبت نام')(SignupForm)


export const NavBarMobile = ({
    onPusherClick,
    onToggle,
    visible,
    acount_page_click,
    logout_click,
    handle_home_click,
    handle_category_click,
    showSearch,
    logged_in,
    Component
}) => (
    <Sidebar.Pushable>
        <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            vertical
            visible={visible}
            direction="left"
        >   
                <Menu.Item
                    onClick={handle_home_click}
                >
                    خانه
                </Menu.Item>
              
    

                <Menu.Item
                    onClick={()=>showSearch()}        
                >
                    جست و جو
                </Menu.Item>

                    {!logged_in && (
                        <Menu.Item>   
                        <span style={{
                            display:'flex'
                        }}>
                            <LoginModal />
                            <SignUpModal />
                            
                        </span>
                    </Menu.Item>
                    )}

        </Sidebar>
        <Sidebar.Pusher
            dimmed={visible}
            onClick={onPusherClick}
            style={{ minHeight: "100vh" }}
        >
            <Menu fixed="top">
                <Menu.Item>
                    <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
                </Menu.Item>
                {logged_in && (
                        <Dropdown  icon="user circle outilne" button pointing className='link item' >
                            <Dropdown.Menu >
                                <Dropdown.Item onClick={acount_page_click}>حساب کاربری</Dropdown.Item>
                                <Dropdown.Item onClick={logout_click} >خروج</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>        
                
                )}
                <Dropdown text="دسته بندی ها" item pointing className='link item' >
                    <Dropdown.Menu >
                        {categories.map((category) => (
                            <Dropdown.Item onClick={()=>handle_category_click(category.value)} >{category.text}</Dropdown.Item>
                        ))}

                    </Dropdown.Menu>
                </Dropdown>
                <Menu.Item  position="left" onClick={onToggle}>
                    <Icon name="sidebar" />
                </Menu.Item>
                
            </Menu>
            <br></br><br></br><br></br><br></br>
            <Component />

        </Sidebar.Pusher>
  
    </Sidebar.Pushable>
)

export const NavBarDesktop = ({
    acount_page_click,
    logout_click,
    handle_home_click,
    handle_category_click,
    showSearch,
    logged_in
}) => (
    <Menu fixed="top" size="small">
        
        <Menu.Item>
            <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
        </Menu.Item>
        <Menu.Item
            onClick={handle_home_click}
        >
            خانه
        </Menu.Item>

        <Dropdown text="دسته بندی ها"  item pointing className='link item' >
            <Dropdown.Menu >
                {categories.map((category) => (
                    <Dropdown.Item onClick={()=>handle_category_click(category.value)} >{category.text}</Dropdown.Item>
                ))}

            </Dropdown.Menu>
        </Dropdown>    

        <Menu.Item
            onClick={()=>showSearch()}        
        >
            جست و جو
        </Menu.Item>
        <div style={{marginRight:'auto'}}>
            <Menu.Menu position="left">
                {logged_in ? (
                    <Menu.Item>
                        <Icon link onClick={acount_page_click} name="user"  size="big"/>
                        <Icon link onClick={logout_click} name="log out" flipped="horizontally" size="big"/>
                    </Menu.Item>
                ):(
                    <Menu.Item>   
                        <LoginModal />
                        <SignUpModal />
                    </Menu.Item>
                )}
                    
                    
            </Menu.Menu>
        </div>
    </Menu>
);
