import React from 'react'
import {connect} from 'react-redux'
import * as business_page_actions from '../../../core/business_page/business_page_actions'
import {change_panel} from '../../../core/main_page/active_panel_actions'
import ModalComponent from '../modal/Modal'
import Reports from './reports'
import Services from './business_services'
import Comments from './business_comments'
import {Grid ,Segment,Image,Breadcrumb, Icon,Divider} from 'semantic-ui-react'
import EditBusinessForm from '../business_forms/edit_business'
import UploadPhoto from '../business_forms/upload_photo'
import {categories} from '../../../core/constants'
import {get_reports} from '../../../core/dashboard/dashboard_actions'

const EditBusinessModal = ModalComponent('ویرایش اطلاعات')(EditBusinessForm)
const UploadPhotoModal = ModalComponent('تغییر عکس')(UploadPhoto)

class Dashboard extends React.Component{
    async componentDidMount(){
        await this.props.get_business_info(this.props.business.id) 
        await this.props.get_reports(this.props.business.id)
    }
    state = { 
        sections:{
            reports_visible:false,
            services_visible:false,
            comments_visible:false
        }
    }


    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    toggle_view = (section_name) => {
        let sections = this.state.sections
        sections[section_name] = !this.state.sections[section_name]
        this.setState(()=>({sections:sections}))
        console.log(this.state)
    }
   
      
  
    render(){
        return(
            <div>
                    
                <Grid centered>
                    <Grid.Column computer={12} mobile={15} tablet={15}>
                        <Image
                            src={this.props.business.pictures[0] ?  require(`../../../assessts/ZanbilBackEnd/uploads/${this.props.business.pictures[this.props.business.pictures.length - 1].id}`) : "https://tehdooni.com/wp-content/uploads/2017/12/7715_%DA%A9%D8%A7%D9%81%D9%87-%D8%AA%D9%88-%DA%A9%D8%A7%D9%81%D9%87-%D8%AC%D9%87%D8%A7%D9%86-%D8%A2%D8%B1%D8%A7.jpg"}
                            bordered
                            fluid
                        />
                    </Grid.Column>
                </Grid>
                <Grid centered>
                    <UploadPhotoModal 
                        business_id={this.props.business.id}
                        get_business_info={this.props.get_business_info}    
                        for_business = {true}                     
                        />
                </Grid>

                <Grid centered>
                    {this.props.business && (
                        <Grid.Column computer={6} tablet={10} mobile={15}>
                            <Segment padded="very" color="teal"  raised textAlign="right">
                                <p>مشخصات : </p>
                                <div style={{paddingRight:'10%'}}>
                                    <p>نام: {this.props.business.name}</p>
                                    <p>توضیحات‌: {this.props.business.description}</p>
                                    <Breadcrumb>
                                        <Breadcrumb.Section>
                                            {this.props.business.email}
                                        </Breadcrumb.Section>
                                        <Breadcrumb.Divider ></Breadcrumb.Divider>
                                        <Breadcrumb.Section >
                                            {this.props.business.phone_number}
                                        </Breadcrumb.Section>
                                    </Breadcrumb>
                                </div>
                                <Divider section/>
                                <div style={{display:'flex',justifyContent:'center'}}>                                
                                    <EditBusinessModal />
                                </div>
                            </Segment>
                            
                        </Grid.Column>  
                        )
                    }
                </Grid>
                
                <div style={{display:'flex',marginTop:'2%'}} onClick={() => this.toggle_view('reports_visible')}>
                    <div style={{display:'flex',width:'10%',paddingRight:'2%'}}>
                        {this.state.reports_visible ? (
                            <Icon color="teal" size="large" name="window minimize" style={{marginLeft:'5%'}} />
                        ) : (
                            <Icon color="teal" size="large" name="add circle" style={{marginLeft:'5%'}} />
                        )}
                        <p>گزارشات</p>
                    </div>
                    <div style={{width:'87%'}}>
                        <Divider/>
                    </div>
                </div>
                <br></br>
                {this.state.sections.reports_visible && (
                    <Reports reports={this.props.reports}/>
                )}

                <div style={{display:'flex',marginTop:'2%'}} onClick={() => this.toggle_view('services_visible')}>
                    <div style={{display:'flex',width:'10%',paddingRight:'2%'}}>
                        {this.state.reports_visible ? (
                            <Icon color="teal" size="large" name="window minimize" style={{marginLeft:'5%'}} />
                        ) : (
                            <Icon color="teal" size="large" name="add circle" style={{marginLeft:'5%'}} />
                        )}
                        <p>سرویس ها</p>
                    </div>
                    <div style={{width:'87%'}}>
                        <Divider/>
                    </div>
                </div>
                <br></br>
                {this.state.sections.services_visible && (
                    <Services/>
                )}


                <div style={{display:'flex',marginTop:'2%'}} onClick={() => this.toggle_view('comments_visible')}>
                    <div style={{display:'flex',width:'10%',paddingRight:'2%'}}>
                        {this.state.sections.comments_visible ? (
                            <Icon color="teal" size="large" name="window minimize" style={{marginLeft:'5%'}} />
                        ) : (
                            <Icon color="teal" size="large" name="add circle" style={{marginLeft:'5%'}} />
                        )}
                        <p>نظرات</p>
                    </div>
                    <div style={{width:'87%'}}>
                        <Divider/>
                    </div>
                </div>
                <br></br>
                {this.state.sections.comments_visible && (
                    <Comments/>
                )}
            </div>
            )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        business : state.business_page_reducer.business ,
        services : state.business_page_reducer.services,
        reviews : state.review_reducer.reviews,
        active_panel:state.active_panel_reducer.active_panel,
        reports:state.dashboard_reducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        get_business_info : (business_id) => dispatch(business_page_actions.get_business_info(business_id)),
        change_panel:(panel_name) => dispatch(change_panel(panel_name)),
        get_reports:(business_id) => dispatch(get_reports(business_id))

    }
}
export default connect(mapStateToProps , mapDispatchToProps)(Dashboard);