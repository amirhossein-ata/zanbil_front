import React from 'react'
import {connect} from 'react-redux'
import CardComponent from '../componets/card/card'
import * as category_page_actions from '../../core/category_page/category_page_actions'
import {change_panel} from '../../core/main_page/active_panel_actions'
class Category_page extends React.Component{
    componentDidMount(){
        this.props.get_category_businesses(1)
        console.log(this.props.businesses)
    }
    render(){
        console.log('active_panel is : ',this.props.active_panel)

        if(this.props.businesses){
            console.log(this.props.businesses[0])
        }
        return(
            <div>
                {this.props.businesses && this.props.businesses.map((business) => (
                    <div onClick={()=>this.props.change_panel('business_page')}>
                        <CardComponent 
                            header={business.name}
                        />
                     </div>
                   
                ))}
                <div>heeeer</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        businesses : state.category_page_reducer.businesses[0],
        active_panel : state.active_panel_reducer.active_panel
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        get_category_businesses:(category_id) => dispatch(category_page_actions.get_category_businesses(category_id)),
        change_panel:(panel_name) => dispatch(change_panel(panel_name))

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Category_page)