import React from 'react';
import * as account_page_actions from '../../core/account_page/account_page_actions';
import * as business_page_actions from '../../core/business_page/business_page_actions';
import * as cancellation_actions from "../../core/cancellation/cancellation_actions";
import {change_panel} from '../../core/main_page/active_panel_actions'
import { Card,Grid,Breadcrumb,Divider,Image,Segment, Message,Button} from 'semantic-ui-react';
import CardComponent from '../componets/card/card'
import {connect} from "react-redux";
import ReviewForm from "../componets/review/review_form"
import ManAvatar from '../../assessts/icons/man.svg'

import Fade from 'react-reveal/Fade'

class Account_page extends React.Component{
     
    state={
        history_end_index : 6,
        businesses_end_index:6,
        fethed : false,
        modal_open:false,
        service_id:0
    }
    async componentDidMount(){
        await this.props.get_account_page()
        this.setState(()=>({fethed:true}))
        // if(this.props.reserves.length !== 0 ){
        //     let temp_cond = []
        //     console.log("this shit is",this.props.reserves)
        //     for(let j = 0; j < this.props.reserves.slice(0,this.state.history_end_index).length ;j++){
        //         temp_cond.push(0)

        //     }
        //     console.log("temp_cond is:",temp_cond)
        //     this.setState(() => ({modals:temp_cond}))
        // }
    }
    handleOpen = (service_id) => {
        this.setState(() => ({modal_open:true}))
        this.setState(() => ({service_id:service_id}))
        // var count = this.state.modal_open;
        // count++;
        // this.setState(() => ({modal_open:count}))
        // let temp_conds = this.state.modals.slice();
        // temp_conds[i]++;
        // console.log("temp_cond is motherfucker say what again",temp_conds)
        // this.setState(() => ({modals:temp_conds}))
        // console.log("asdaSDASDASC DGqwZ?",this.state.modals)

    }
    cancel = (id) => {
        console.log("reserve_id is:", id)
        this.cancel_reserve(id)
    }
    handleClose = () => {
        this.setState(() => ({modal_open:false}))
    }
    on_review_click = () => {
        //
    }
    on_make_business = () =>{
        this.props.change_panel('add_business_page')
    }
    
    on_more_reserves_click = () => {
        let history_end_index = this.state.history_end_index + 6
        this.setState(()=>({history_end_index:history_end_index}))
    }

    on_more_businesses_click = () => {
        let businesses_end_index = this.state.businesses_end_index + 6
        this.setState(()=>({businesses_end_index:businesses_end_index}))
    }
    async on_business_click(business_id){
        await this.props.get_business_info(business_id)
        this.props.change_panel('dashboard')
    }
    render(){
        const businesses = this.props.businesses ? this.props.businesses.slice(0,this.state.businesses_end_index) : []
        const history = this.props.reserves ? this.props.reserves.slice(0,this.state.history_end_index) : []
        // const  modals = ;
        // if (history.length !==0){
        //     for(let j = 0; j < history.length ;j++){
        //         modals.push(false)

        //     }
            
        // }

        //const Review_modal = Modal("نظر")(Review_form)
        return(
            
            <Grid centered>
                <Grid.Column computer={15}>
                
           
                    
                    {this.props.user && (
                        <Grid centered>
                        
                            <Grid.Column tablet={4} mobile={8} computer={4} style={{marginTop:'2%'}}>
                                
                                    <div >
                                        
                                        <Segment padded="very" color="teal"  raised textAlign="right">
                                            <Image 
                                                src={ManAvatar}
                                                
                                                size="massive" 
                                            />
                                            <br></br>
                                            <p>نام : {this.props.user.username}</p>
                                            <p>ایمیل:{this.props.user.email}</p>
                                            <p>تلفن:{this.props.user.phone_number}</p>
            
                                        </Segment>
                                        
                                    </div>  
                                
                            </Grid.Column>
                        </Grid>
                    )}
                    <Divider horizontal section>تاریخچه</Divider><br/>
                    {console.log("reserve has",this.props.reserves.length)}
                    <br />
                    
                    {this.props.reserves.length === 0 ? (
                        <div style={{width:'50%',margin:'3% auto 3% auto'}} >
                            <Message info>
                            
                            هیچ رزروی در تاریخچه ی شما وجود ندارد
                        
                            </Message>
                            
                        
                        </div>
                    ) : (
                        <div>
                            <Grid  centered>
                                {history.map((reserve, i ) => (
                                    <Grid.Column computer={5} tablet={7} mobile={12} textAlign="right">
                                   
                                        <Fade bottom>
                                            
                                            <Card color="teal" fluid raised >
                                                <Card.Content>
                                                    <Card.Header>{reserve.service.name}</Card.Header>
                                                    <Card.Meta>
                                                        <span className='date'>{reserve.date}</span>
                                                    </Card.Meta>
                                                </Card.Content>
                                                {reserve.description && (
                                                    <Card.Content>
                                                    history                     <Card.Description>{reserve.description}</Card.Description>
                                                    </Card.Content>
                                                )}
                                                <Card.Content extra>
                                                <Grid centered> 
                                                    <Grid.Column>
                                                        <div style = {{marginTop : '2%' , marginBottom : '2%'}}>
                                                            <Button color="linkedin" style={{ paddingLeft: '50px',paddingRight:'50px'}} onClick={() => {this.handleOpen(reserve.service.id)}} > نظر</Button>
                                                        </div>
                                                    </Grid.Column>
                                                    <Grid.Column>
                                                        <div style = {{marginTop : '2%' , marginBottom : '2%'}}>
                                                            <Button color="red"  onClick={() => {this.cancel(reserve.service.id)}} > لغو</Button>
                                                        </div>
                                                    </Grid.Column>
                                                   
                                                    {/* <Review_modal service_id={reserve.service.id}/> */}
                                                </Grid>                           
                                                </Card.Content>
                                                
                                            </Card>
                                           
                                        </Fade>
                                       
                                    </Grid.Column>

                                ))}
                                <ReviewForm service_id={this.state.service_id} modal_open={this.state.modal_open} handleClose={this.handleClose}/>
                            </Grid>
                            
                            {(this.props.reserves && this.props.reserves.length > 6) && (
                                <div>
                                    <Divider hidden section/>
                                    <Grid centered >
                                            <Button 
                                                disabled={this.state.history_end_index >= this.props.reserves.length} 
                                                color="instagram" 
                                                onClick={this.on_more_reserves_click}
                                            >
                                                بیشتر
                                            </Button>
                                    </Grid>
                                    <Divider hidden section/>
                                </div>
                            )}
                        </div>
                    )}


                    <Divider section horizontal>بیزینس ها</Divider><br/>
                    <Grid centered>
                        <Button  
                            color="vk"
                            onClick = {this.on_make_business}
                        >
                            ایجاد کسب و کار جدید
                        </Button>
            
                    </Grid>
            
                    {this.props.businesses && this.props.businesses.length === 0 ? (
                        <div style={{width:'50%',margin:'3% auto 3% auto'}}>
                            <Message info>
                                شما هیچ کسب و کاری نساخته اید        
                            </Message>
                        </div>
                    ) : (
                        <Grid textAlign="right" centered>
                            {this.state.fethed && businesses.map((business) => (
                                
                                <Grid.Column computer={5} tablet={8} mobile={16}>
                                    <div onClick={()=>this.on_business_click(business.id)}>
                                        <CardComponent
                                            info={true}
                                            image={business.pictures.length !== 0 ?  require(`../../assessts/ZanbilBackEnd/uploads/${business.pictures[business.pictures.length - 1].id}`) : "https://tehdooni.com/wp-content/uploads/2017/12/7715_%DA%A9%D8%A7%D9%81%D9%87-%D8%AA%D9%88-%DA%A9%D8%A7%D9%81%D9%87-%D8%AC%D9%87%D8%A7%D9%86-%D8%A2%D8%B1%D8%A7.jpg"}                                      
                                            header={business.name}
                                            rating={3}
                                            description={business.description}
                                        />                              
                                    </div>    
                                </Grid.Column>               
                            ))}
                        </Grid>
                    
                    )}
                    {(this.props.businesses && this.props.businesses.length > 6) && (
                        <div>
                            <Divider hidden section/>
                            <Grid centered >
                                    <Button 
                                        disabled={this.state.businesses_end_index >= this.props.businesses.length} 
                                        color="instagram" 
                                        onClick={this.on_more_businesses_click}
                                    >
                                        بیشتر
                                    </Button>
                            </Grid>
                            <Divider hidden section/>
                        </div>
                    )}
                    <br />
                    
                </Grid.Column>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("the fucking state is :" ,state)
    return{
        active_panel:state.active_panel_reducer.active_panel,
        user:state.account_page_reducer.user,
        businesses:state.account_page_reducer.businseses,
        reserves:state.account_page_reducer.reserves
    };
}
const mapDispatchToProps = (dispatch) => {
    return{
        get_account_page:() => dispatch(account_page_actions.get_account_page()),
        get_business_info : (business_id) => dispatch(business_page_actions.get_business_info(business_id)),
        cancel_reserve : (reserve_id) => dispatch(cancellation_actions.cancel_reserve(reserve_id)),
        change_panel:(panel_name) => dispatch(change_panel(panel_name)),
    };
}

export default connect(mapStateToProps , mapDispatchToProps)(Account_page);