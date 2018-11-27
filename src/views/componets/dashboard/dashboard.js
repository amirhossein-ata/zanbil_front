import React from 'react'
import CardComponent from '../card/card'

import {Grid , Table,Menu ,Card,Tab} from 'semantic-ui-react'

class Dashboard extends React.Component{
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
      
   
      
  
    render(){
        const panes = [
            { menuItem: 'Tab 1', render: () => <Tab.Pane>
            <Table celled selectable attached={false} >
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.HeaderCell>Notes</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
            
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>John</Table.Cell>
                        <Table.Cell>No Action</Table.Cell>
                        <Table.Cell>None</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Jamie</Table.Cell>
                        <Table.Cell>Approved</Table.Cell>
                        <Table.Cell>Requires call</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Jill</Table.Cell>
                        <Table.Cell>Denied</Table.Cell>
                        <Table.Cell>None</Table.Cell>
                    </Table.Row>
                    <Table.Row warning>
                        <Table.Cell>John</Table.Cell>
                        <Table.Cell>No Action</Table.Cell>
                        <Table.Cell>None</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Jamie</Table.Cell>
                        <Table.Cell positive>Approved</Table.Cell>
                        <Table.Cell warning>Requires call</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Jill</Table.Cell>
                        <Table.Cell negative>Denied</Table.Cell>
                        <Table.Cell>None</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>

            </Tab.Pane> },
            { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
            { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
          ]
        const {activeItem} = this.state
        return(
            <Grid>
                <Grid.Column computer={4}>
                <Menu pointing vertical fluid> 
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                    <Menu.Item
                    name='messages'
                    active={activeItem === 'messages'}
                    onClick={this.handleItemClick}
                    />
                    <Menu.Item
                    name='friends'
                    active={activeItem === 'friends'}
                    onClick={this.handleItemClick}
                    />
                </Menu>

                </Grid.Column>
                <Grid.Column computer={8}>
                    <Tab menu={{color:'blue' ,inverted:true }} panes={panes} />
                </Grid.Column>
                <Grid.Column computer={4}>
                    <CardComponent 
                        report={true}
                        color="#78DDE9"
                        header="تعداد رزرو در روز"
                        value="4"
                        percentage="-2"
                        extra="1397/02/12"
                    />
                </Grid.Column>
            </Grid>
        )
    }
}

export default Dashboard