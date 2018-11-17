import React from 'react';
import * as account_page_actions from '../../core/account_page/account_page_actions';
import { Card,Grid,Divider,Image, Button} from 'semantic-ui-react';
import {connect} from "react-redux";
import Review_form from "../componets/review/review_form"
import Modal from "../componets/modal/Modal"

const style = {
    height : '30vh',
    width : '15vh'
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
           
                <Grid centered textAlign="right">
                    <br/>
                        <Card color="grey" raised style={style}>
                        

                            <Image src = "https://image.flaticon.com/icons/svg/61/61135.svg" size ="small"  centered  /> 
                            {this.props.user &&<Card.Header><b>{this.props.user.user_name}</b></Card.Header>}
                        </Card>
                    
                </Grid><br/>
        <Divider horizontal>تاریخچه</Divider><br/>
        {console.log("reserve has",this.props.reserves)}
        {!this.props.reserves  && <Grid textAlign="center"><span><b>هیچ رزروی در تاریخچه ی شما وجود ندارد</b></span> <br/></Grid>}
        {this.props.reserves && this.props.reserves.map((reserve) => (
            <Grid.Column computer={4}>
            
                <Card raised>
                <Card.Content>
                    <Card.Header>{reserve.service.name}</Card.Header>
                    <Card.Meta><span>{reserve.date}</span></Card.Meta>
                    <Card.Description>{reserve.description}</Card.Description>
                </Card.Content>
                   <Review_modal service_id={reserve.service.id}/>
                </Card>
                   
                
            
        </Grid.Column>
        ))}
            </div>
    )
        }
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