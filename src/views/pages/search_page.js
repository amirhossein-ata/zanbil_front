import React from 'react'
import {connect} from 'react-redux'
import { Sidebar , Button,Menu,Icon,Segment,Image,Header, Grid, Card } from 'semantic-ui-react';
import {close_search_form} from '../../core/search/search_actions'
import SearchForm from '../componets/search/search'
import CardComponent from '../componets/card/card'
class Search_page extends React.Component{
    state = { visible: true }


    handleSidebarHide = () => {
        this.props.close_search_form()
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
                            <CardComponent 
                                    header={search_result.name}
                                    meta1={search_result.business.name}
                            />       
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
        close_search_form:() => dispatch(close_search_form())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Search_page)