import React from 'react'
import {connect} from 'react-redux'
import CardComponent from '../componets/card/card'
import * as category_page_actions from '../../core/category_page/category_page_actions'
class Category_page extends React.Component{
    componentDidMount(){
        this.props.get_category_businesses(1)
        console.log(this.props.businesses)
    }
    render(){
        if(this.props.businesses){
            console.log(this.props.businesses[0])
        }
        return(
            <div>
                {this.props.businesses && this.props.businesses.map((business) => (
                    
                    <CardComponent 
                        header={business.name}
                    />
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.category_page_reducer.businesses[0])
    return{
        businesses : state.category_page_reducer.businesses[0]
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        get_category_businesses:(category_id) => dispatch(category_page_actions.get_category_businesses(category_id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Category_page)