import React from 'react';
import {connect} from 'react-redux'
import * as review_action from "../../../core/review/review_actions"
import {Modal, Header, GridColumn} from "semantic-ui-react";
import PersianRex from "persian-rex";

import { Button, Form ,Grid,Rating} from 'semantic-ui-react'

class Review_form extends React.Component {
    state={
        rating:1,
        credentials:{
            comment:"",
            
        },
        modal_open:1,
        comment_error:false
    }
    async componentDidMount() {
        console.log("props is",this.props.modal_open)
         this.setState(() => ({modal_open:this.props.modal_open}))
         console.log("modal open here is:",this.props.modal_open)

             
    }
    validate_comment = () => {
        const comment = this.state.credentials.comment
        if(PersianRex.text.test(comment) ) {
            this.setState(()=>({comment_error:false}));      
        }else{
            this.setState(()=>({comment_error:true}));       
            
        }

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
        console.log("props is ", this.state.modal_open)
        return (
            <Grid textAlign="right" centered>
            <Grid.Column textAlign="right">
            <Modal size="large" dimmer="blurring" open={(this.state.modal_open === this.props.modal_open)} onClose={this.handleClose} closeIcon>
            <Header textAlign="right" dividing>
                        فرم ثبت نظر
            </Header>    
            <Modal.Content>
                <Grid.Column computer={10} tablet={12} mobile={14} textAlign="right">
                
                <Grid centered >
                    <Grid.Column width={14} textAlign="right">
                        <Rating icon='star' defaultRating={1} maxRating={5} onRate={this.handle_rate} />    
                    </Grid.Column>
                </Grid>
                <Grid centered >
                <Grid.Column width={14}>
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
                    </Grid>
                       
                </Grid.Column>
                </Modal.Content>
                </Modal>
                </Grid.Column>
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