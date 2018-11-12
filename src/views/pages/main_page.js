import React from 'react'
import {connect} from 'react-redux'
import Navbar from '../componets/navbar/navbar'
import BusinessPage from './business_page'
import ServicePage from './service_page'
import { Grid, GridColumn, Segment } from 'semantic-ui-react';
import CategoryPage from './category_page'
import AddBusinessPage from '../componets/add_business/add_business'
import AddServicePage from '../componets/add_service/add_service_form'
class Main_page extends React.Component{
    get_active_panel=() => {
        switch (this.props.active_panel) {
            case 'category':
                return <CategoryPage />;
            case 'business_page':
                return <BusinessPage />;
            case 'add_business_page':
                return <AddBusinessPage />
            case 'add_service_page':
                return <AddServicePage />
            case 'service_page' :
                return <ServicePage />
            default:
                return ''
        }
    }
    render(){
        console.log('active panel is : ',this.props.active_panel )
        return(
            <div style={{background:'#f4f6f9'}}>
                <Grid className="landingPage__firstPart">
                    <GridColumn>
                        <Navbar />
                    
                    </GridColumn>
                
                </Grid>
                <div style={{margin:'3%'}}>
                    <Segment raised>
                        <Grid centered>
                            <Grid.Column computer={14}>
                                {this.get_active_panel()}
                            </Grid.Column>
                        </Grid>

                    </Segment>
                    
                </div>
                
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        active_panel:state.active_panel_reducer.active_panel
    }
}
export default connect(mapStateToProps)(Main_page)