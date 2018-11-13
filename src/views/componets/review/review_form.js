import React from 'react';
import PersianRex from "persian-rex";

import { Button, Segment, Form ,Grid,Label} from 'semantic-ui-react'

class Review_form extends React.Component {
    state={
        credentials:{
            comment:""
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
    onSubmit(){

    }

    render(){
        return (
            <Grid  centered>
                <Grid.Column computer={10} tablet={12} mobile={14} textAlign="right">
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
export default Review_form;