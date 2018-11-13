import React from 'react'
import {connect} from 'react-redux'
import { Sidebar , Button,Menu,Icon,Segment,Image,Header } from 'semantic-ui-react';
import {close_search_form} from '../../core/search/search_actions'
import SearchForm from '../componets/search/search'
class Search_page extends React.Component{
    state = { visible: true }


    handleSidebarHide = () => {
        this.props.close_search_form()
    }

    render(){
        return(
            <div>
                <Button.Group>
                </Button.Group>
                <Sidebar.Pushable>
                    <Sidebar
                        as={Segment}
                        direction="top"
                        animation='overlay'
                        icon='labeled'
                        onHide={this.handleSidebarHide}
                        vertical
                        visible={this.props.visible}
                        width='thin'
                    >
                        <Segment padded>
                            <SearchForm />                    
                        </Segment>
                    </Sidebar>
        
                    <Sidebar.Pusher dimmed={this.props.visible}>
                    <Segment basic>
                        <Header as='h3'>Application Content</Header>
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                    </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        visible : state.search_reducer.form_open
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        close_search_form:() => dispatch(close_search_form())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Search_page)