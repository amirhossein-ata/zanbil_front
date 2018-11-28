import React from 'react';
import * as account_page_actions from '../../core/account_page/account_page_actions';
import { Card,Grid,Divider,Image, Button} from 'semantic-ui-react';
import CardComponent from '../componets/card/card'
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
        console.log("businseses are:", this.props.businseses)
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
        <Divider horizontal>بیزینس ها</Divider><br/>
        <Grid textAlign="right">
        {!this.props.businseses && <Grid textAlign="center"><span><b>شما هیچ بیزنسی نساخته اید!</b></span> <br /><br/></Grid>}
        
        
        {this.props.businseses && this.props.businseses.map((business) => (
            
            
            <Grid.Column computer={5} tablet={8} mobile={16}>
            <div >
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
        <br />
        <Divider horizontal>تاریخچه</Divider><br/>
        {console.log("reserve has",this.props.reserves)}
        <br />
       
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
        businseses:state.account_page_reducer.businseses,
        reserves:state.account_page_reducer.reserves
    };
}
const mapDispatchToProps = (dispatch) => {
    return{
        get_account_page:() => dispatch(account_page_actions.get_account_page())

    };
}

export default connect(mapStateToProps , mapDispatchToProps)(Account_page);