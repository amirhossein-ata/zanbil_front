import React from 'react';
import {connect} from 'react-redux'
import * as review_action from "../../../core/review/review_actions"
import {Modal} from "semantic-ui-react";
import PersianRex from "persian-rex";

import { Button, Form ,Grid,Rating} from 'semantic-ui-react'

class Review_form extends React.Component {
    state={
        rating:1,
        credentials:{
            comment:"",
            
        },
        modal_open:false,
        comment_error:1
    }
    async componentDidMount() {
        console.log("props is",this.props.modal_open)
         this.setState(() => ({modal_open:this.props.modal_open}))
         console.log("modal open here is:",this.props.modal_open)

             
    }
    validate_comment = () => {
         
         this.setState(()=>({comment_error:false}));      
        
    }
    handleClose = () => {
        // this.setState(() => ({modal_open:false}));
        var count = this.state.modal_open;
        count++;
        this.setState(() => ({modal_open:count}))
    }
    handle_change= (e) => {
        const input = e.target.value;
        
        let credentials = this.state.credentials;
        const inputName = e.target.name;
        
        credentials[inputName] = input;
        this.setState(() => ({credentials : credentials}))    
    }
    handle_rate = (e, { rating }) => {
        console.log(rating)
        this.setState({ rating:rating})
    }
    on_rate_change = (data) => {
        console.log("fucking data",data)
    }
    onSubmit=()=>{

        const rev = {
            description:this.state.credentials.comment,
            point:this.state.rating,
            //service_id:this.props.passed_through_props.service_id
            service_id:this.props.service_id
        }
        console.log(rev)
        this.props.review(rev.description,rev.point,rev.service_id)
        this.handleClose();

    }

    render(){
        console.log("state is ", this.state.modal_open)
        return (
            <Grid  centered>
            <Modal size="tiny" dimmer="blurring" open={(this.state.modal_open === this.props.modal_open)} onClose={this.handleClose} closeIcon>
                <Grid.Column computer={10} tablet={12} mobile={14} textAlign="right">
                
                <div style={{marginLeft:'auto'}}>
                    <Rating icon='star' defaultRating={1} maxRating={5} onRate={this.handle_rate} />
                </div>    
                
                <Form onSubmit={this.onSubmit}>
                        <Form.TextArea
                            
                                error={this.state.comment_error}
                                fluid
                                label=""
                                name="comment"
                                onBlur={this.validate_comment}
                                value={this.state.credentials.comment}
                                onChange={this.handle_change}
                            
                                
                            />
                            
                            
                        
                        
                        <Button onClick={this.handleClose} primary type='submit'>ثبت نظر</Button>
                    </Form>   
                </Grid.Column>
                </Modal>
            </Grid>
            
        )
    }

}
const mapDispatchToProps = (dispatch) => {
    return{
        review : (description,rating,service_id) => dispatch(review_action.add_review(description,rating,service_id)),

    }
}


export default connect(undefined,mapDispatchToProps)(Review_form)