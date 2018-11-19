import React from 'react';
import * as account_page_actions from '../../core/account_page/account_page_actions';
import { Card,Grid,Divider,Image, Button} from 'semantic-ui-react';
import {connect} from "react-redux";
import Review_form from "../componets/review/review_form"
import Modal from "../componets/modal/Modal"
import CardComponent from '../componets/card/card'
const style = {
    height : 'auto',
    width : '20vw'
}
class Account_page extends React.Component{
     async componentDidMount(){
       await this.props.get_account_page()
        console.log("props are",this.props)
        

    }
    
    on_review_click = () => {
        //
    }
    render(){
        console.log('active panel is : ',this.props.active_panel)
        console.log("props are not in did mount",this.props)
        const Review_modal = Modal("نظر")(Review_form)
        return(
            
            <div>
                <br></br>
                <Grid centered textAlign="right">
                    <Card color="teal" raised style={style}>
                        <img  style={{width:'100%'}} src="https://www.w3schools.com/w3images/avatar2.png" ></img>
                        <Card.Content>
                            <Card.Header>{this.props.user && this.props.user.user_name}</Card.Header>
                        </Card.Content>
                        
                    </Card>            
                </Grid><br/>
                <Divider section horizontal>تاریخچه</Divider><br/>
                {console.log("reserve has",this.props.reserves)}
                {!this.props.reserves  && <Grid textAlign="center"><span><b>هیچ رزروی در تاریخچه ی شما وجود ندارد</b></span> <br/></Grid>}
                
                <Grid textAlign="right">
                    {this.props.reserves && this.props.reserves.map((reserve) => (
                        <Grid.Column computer={4}>
                            <Card raised color="blue">
                                <Card.Content>
                                    <Card.Header>{reserve.service.name}</Card.Header>
                                    <Card.Meta><span>{reserve.date}</span></Card.Meta>
                                    <Card.Description>{reserve.description}</Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <div>
                                        <Review_modal service_id={reserve.service.id}/>
                                    </div>
                                </Card.Content>
                            </Card>
                    
                        </Grid.Column>
                    ))}
                </Grid>
            </div>
        )}
    }

const mapStateToProps = (state) => {
    console.log("the fucking state is :" ,state)
    return{
        user:state.account_page_reducer.user,
        businesses:state.account_page_reducer.businesses,
        reserves:state.account_page_reducer.reserves
    };
}
const mapDispatchToProps = (dispatch) => {
    return{
        get_account_page:() => dispatch(account_page_actions.get_account_page())

    };
}

export default connect(mapStateToProps , mapDispatchToProps)(Account_page);