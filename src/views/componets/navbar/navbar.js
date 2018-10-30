import React, { Component } from 'react'
import { Dropdown,Input, Menu } from 'semantic-ui-react'
import {connect} from 'react-redux'

export default class Navbar extends Component {
    state = { activeItem: 'home' }
    
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

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
                    {this.props.categories.map((category) => (
                        <Dropdown.Item >{category}</Dropdown.Item>
                    ))}

                </Dropdown.Menu>
            </Dropdown>
            <Menu.Item position="left">
                
            </Menu.Item>
        </Menu>
    )
    }
}
