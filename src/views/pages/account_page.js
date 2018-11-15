import React from 'react';
import * as user_info_actions from '../../core/user_info/user_info_actions';
import { Card,Grid,Divider,Image} from 'semantic-ui-react';
import {connect} from "react-redux";

const style = {
    height : '30vh',
    width : '15vh'
}
class Account_page extends React.Component{
    
    render(){
        return(
            <div>
                <Grid centered textAlign="right">
                    <br/>
                        <Card color="grey" raised style={style}>
                        

                            <Image src = "https://image.flaticon.com/icons/svg/61/61135.svg" size ="small"  centered  /> 
                            <Card.Header><b>business</b></Card.Header>
                            <Card.Description>email:a@a.com</Card.Description>
                        </Card>
                    
                </Grid><br/>
                <Divider horizontal>تاریخچه</Divider><br/>
            </div>
    )
        }
}

const mapStateToProps = (state) => {
    return{
        //
    };
}
const mapDispatchToProps = (dispatch) => {
    return{
        get_user_info:(user_id) => dispatch(user_info_actions.get_user_info(user_id))

    };
}

export default connect(mapStateToProps , mapDispatchToProps)(Account_page);