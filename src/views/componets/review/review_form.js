import React from 'react';
import {connect} from 'react-redux'
import * as review_action from "../../../core/review/review_actions"
import PersianRex from "persian-rex";

import { Button, Form ,Grid,Rating} from 'semantic-ui-react'

class Review_form extends React.Component {
    state={
        credentials:{
            comment:"",
            point:""
        },
        comment_error:false
    }
    validate_comment = () => {
        
         this.setState(()=>({comment_error:true}));      
        
    }
    handle_change= (e) => {
        const input = e.target.value;
        
        let credentials = this.state.credentials;
        const inputName = e.target.name;
        
        credentials[inputName] = input;
        this.setState(() => ({credentials : credentials}))    
    }
    on_rate_change = (data) => {
        console.log(data)
    }
    onSubmit(){

        const rev = {
            comment:this.state.credentials.comment,
            point:this.state.credentials.point
        }
        this.props.review(rev)

    }

    render(){
        return (
            <Grid  centered>
                <Grid.Column computer={10} tablet={12} mobile={14} textAlign="right">
                <Rating icon='star' defaultRating={1} maxRating={5} onRate={this.on_rate_change} />
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
                            
                            
                        
                        
                        <Button primary type='submit'>ثبت نظر</Button>
                    </Form>   
                </Grid.Column>
                
            </Grid>
            
        )
    }

}
const mapStateToProps = (state) => {
    console.log(state)
    return{
        review_id:state.review_reducer.review.id
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        review : ({description, point,review_id}) => dispatch(review_action.add_review(description,review_id,point)),

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Review_form)