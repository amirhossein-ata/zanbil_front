import React from 'react';
import * as account_page_actions from '../../core/account_page/account_page_actions';
import { Card,Grid,Divider,Image, Button} from 'semantic-ui-react';
import {connect} from "react-redux";

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
        {!this.props.reserves[0]  && <Grid textAlign="center"><span><b>هیچ رزروی در تاریخچه ی شما وجود ندارد</b></span> <br/></Grid>}
        {this.props.reserves[0] && this.props.reserves.map((reserve) => (
            <Grid.Column computer={4}>
            
                <Card raised>
                <Card.Content>
                    <Card.Header>{this.reserve.service}</Card.Header>
                    <Card.Meta><span>{this.reserve.date}</span></Card.Meta>
                    <Card.Description>{this.reserve.description}</Card.Description>
                </Card.Content>
                    <Button basic color="blue" onClick={this.state.on_review_click}>
                        ارسال نظر
                    </Button>
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