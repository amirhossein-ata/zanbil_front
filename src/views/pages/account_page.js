import React from 'react';
import * as account_page_actions from '../../core/account_page/account_page_actions';
import { Card,Grid,Divider,Image} from 'semantic-ui-react';
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
    
    render(){
        console.log('active panel is : ',this.props.active_panel)
        console.log("props are not in did mount",this.props)
        return(
            
            <div>
            <p>{this.props.user.user_name}</p>
                {/*<Grid centered textAlign="right">
                    <br/>
                        <Card color="grey" raised style={style}>
                        

                            <Image src = "https://image.flaticon.com/icons/svg/61/61135.svg" size ="small"  centered  /> 
                            <Card.Header><b>{this.props.user.user_name}</b></Card.Header>
                           
                        </Card>
                    
                </Grid><br/>
        <Divider horizontal>تاریخچه</Divider><br/> */}
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