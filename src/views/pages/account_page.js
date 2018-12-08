import React from 'react';
import * as account_page_actions from '../../core/account_page/account_page_actions';
import * as business_page_actions from '../../core/business_page/business_page_actions';
import {change_panel} from '../../core/main_page/active_panel_actions'
import { Card,Grid,Divider,Image,Segment, Message,Button} from 'semantic-ui-react';
import CardComponent from '../componets/card/card'
import {connect} from "react-redux";
import Review_form from "../componets/review/review_form"
import Modal from "../componets/modal/Modal"
import ManAvatar from '../../assessts/icons/man.svg'


class Account_page extends React.Component{
     async componentDidMount(){
       await this.props.get_account_page()
        console.log("props are",this.props)
        

    }
    
    on_review_click = () => {
        //
    }
    on_make_business = () =>{
        this.props.change_panel('add_business_page')
    }
    

    async on_business_click(business_id){
        await this.props.get_business_info(business_id)
        this.props.change_panel('dashboard')
    }
    render(){
        console.log('active panel is : ',this.props.active_panel)
        console.log("props are not in did mount",this.props)
        console.log("businseses are:", this.props.businseses)
        console.log("revese of it is:" , !this.props.businesses)
        const Review_modal = Modal("نظر")(Review_form)
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
                                            <p>نام : {this.props.user.user_name}</p>              
                                        </Segment>
                                        
                                    </div>  
                                
                            </Grid.Column>
                        </Grid>
                    )}
                    

                        <Divider section horizontal>بیزینس ها</Divider><br/>
                        
                        {this.props.businseses.lenght === 0 && <div><Grid centered textAlign="center"><span><b>شما هیچ بیزنسی نساخته اید!</b></span> <br /><br/></Grid></div>}
                        <Grid textAlign="right">
                        
                        {this.props.businseses.lenght !==0 && this.props.businseses.map((business) => (
                            
                            
                            <Grid.Column computer={5} tablet={8} mobile={16}>
                            <div onClick={()=>this.on_business_click(business.id)}>
                                <CardComponent
                                    info={true}
                                    image="https://tehdooni.com/wp-content/uploads/2017/12/7715_%DA%A9%D8%A7%D9%81%D9%87-%D8%AA%D9%88-%DA%A9%D8%A7%D9%81%D9%87-%D8%AC%D9%87%D8%A7%D9%86-%D8%A2%D8%B1%D8%A7.jpg"
                                    header={business.name}
                                    rating={5}
                                    description={business.description}
                                />                            
                            </div>    
                        </Grid.Column>           
                    
                                
                        ))}
                        </Grid>
                        <Grid centered>
                        <Button  
                            
                            color="vk"
                            onClick = {this.on_make_business}
                        >
                            ایجاد کسب و کار جدید
                        </Button>
            
                    </Grid>
                    <br />
                    <Divider horizontal section>تاریخچه</Divider><br/>
                    {console.log("reserve has",this.props.reserves.length)}
                    <br />
                    {this.props.reserves.length === 0 ? (
                        <div style={{width:'50%',margin:'3% auto 3% auto'}}>
                            <Message info>
                            
                            هیچ رزروی در تاریخچه ی شما وجود ندارد
                        
                            </Message>
                            
                        
                        </div>
                    ) : (
                        
                        <Grid  centered>
                            {this.props.reserves.map((reserve) => (
                                <Grid.Column computer={5} tablet={7} mobile={12} textAlign="right">

                                    <Card color="teal" fluid raised >
                                        <Card.Content>
                                            <Card.Header>{reserve.service.name}</Card.Header>
                                            <Card.Meta>
                                                <span className='date'>{reserve.date}</span>
                                            </Card.Meta>
                                        </Card.Content>
                                        {reserve.description && (
                                            <Card.Content>
                                                <Card.Description>{reserve.description}</Card.Description>
                                            </Card.Content>
                                        )}
                                        <Card.Content extra>
                                            <Review_modal service_id={reserve.service.id}/>                            
                                        </Card.Content>
                                        
                                    </Card>
                                
                                        
                                </Grid.Column>

                            ))}
                        </Grid>
                    )}
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
        businseses:state.account_page_reducer.businseses,
        reserves:state.account_page_reducer.reserves
    };
}
const mapDispatchToProps = (dispatch) => {
    return{
        get_account_page:() => dispatch(account_page_actions.get_account_page()),
        get_business_info : (business_id) => dispatch(business_page_actions.get_business_info(business_id)),
        change_panel:(panel_name) => dispatch(change_panel(panel_name)),
    };
}

export default connect(mapStateToProps , mapDispatchToProps)(Account_page);