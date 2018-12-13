import React from 'react'
import {connect} from 'react-redux'
import {go_back,select_page} from '../../../core/router/router_panel_actions'
import {change_panel} from '../../../core/main_page/active_panel_actions'

import {Segment, Grid , Icon, Breadcrumb} from 'semantic-ui-react'
class RouterPanel extends React.Component{


    on_back_click = () => {
        this.props.go_back()
        const len = this.props.pages.length
        const last_page = this.props.pages[len - 2]
        console.log(this.props.pages,len,last_page)
        this.props.change_panel(last_page.value)
    }

    on_page_click = (page) => {
        this.props.select_page(page)
        this.props.change_panel(page.value)
    }
    render(){
        return(
            <Segment raised >
                <Grid>
                    <Grid.Column computer={12} mobile={13} tablet={13} textAlign="right">
                        <Breadcrumb>
                            {this.props.pages.map((page) => (
                                <span>
                                    <Breadcrumb.Section link onClick={()=>this.on_page_click(page)}>
                                        {page.text}
                                    </Breadcrumb.Section>
                                    <Breadcrumb.Divider icon='left chevron'/>
                                </span>
                                
                            ))}
                        </Breadcrumb>
                    </Grid.Column>
                    <Grid.Column computer={4} mobile={3} tablet={3}>
                        <Icon 
                            name="arrow left"  
                            size="large" 
                            link
                            onClick ={this.on_back_click}
                        />
                    </Grid.Column>
                </Grid>

            </Segment>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('pages are : ',state.router_panel_reducer)
    return{
        pages : state.router_panel_reducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        go_back: () => dispatch(go_back()),
        change_panel: (name) => dispatch(change_panel(name)),
        select_page : (name) => dispatch(select_page(name))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RouterPanel)