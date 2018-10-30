import React from 'react'
import * as sessionAction from '../../../core/login&signup/session_actions'
import {connect} from 'react-redux'
import { Button, Segment, Form ,Grid,Label} from 'semantic-ui-react'
class Signup_form extends React.Component{
    state={
        credentials:{
            username :'',
            password:'',
            password_again:'',
            email:''
        },
        email_error:false,
        username_error:false, 
        password_error:false,
        password_again_error:false
    }

    handle_change= (e) => {
        const input = e.target.value;
        let credentials = this.state.credentials;
        const inputName = e.target.name
        credentials[inputName] = input
        this.setState(() => ({credentials : credentials}))    
    }

    verify_username = () => {
        const username = this.state.credentials.username
        if(/[^A-Za-z0-9_-]/.test(username)) {
            this.setState(()=>({username_error:true}))       
        }else{
            this.setState(()=>({username_error:false}))       
            
        }

    }
    validate_email = () => {
        const email = this.state.credentials.email
        if(/[a-zA-Z]+@[a-zA-Z]+.[a-zA-z]/.test(email)) {
            this.setState(()=>({email_error:false}));      
        }else{
            this.setState(()=>({email_error:true}));       
            
        }

    }
    verify_password = () => {
        const password = this.state.credentials.password
        if(/[^A-Za-z0-9@.]/.test(password)) {
            this.setState(()=>({password_error:true}))       
        }else{
            this.setState(()=>({password_error:false}))       
        }
    }
    
    verify_password_again = () => {
        const password_again = this.state.credentials.password_again

        if(password_again !== this.state.credentials.password){
            this.setState(() => ({password_again_error:true}))
        }
        else{
            this.setState(()=>({password_again_error:false}))
        }
    }
    onSubmit = () => {
        this.props.signup(this.state.credentials)
    }
    render(){
        
        return(
            
            <Grid className="login_form">
                <Grid.Row verticalAlign="middle">
                    <Grid.Column computer={3} tablet={2} mobile={1} ></Grid.Column>
                    <Grid.Column computer={10} tablet={12} mobile={14}>
                        <Segment raised color="blue" padded>  
                        <Form onSubmit={this.onSubmit}>
                            <Form.Field>
                                <Form.Input
                                    fluid
                                    label="نام کاربری"
                                    name="username"
                                    onBlur={this.verify_username}
                                    value={this.state.credentials.username}
                                    onChange={this.handle_change}
                                
                                    
                                />

                                {this.state.username_error && (
                                    <Label basic pointing color="red">
                                        تنها میتوانید از (a-z A-Z . 0-9 @ )استفاده کنید
                                    </Label>    
                                )} 
                        
                            </Form.Field>
                            <Form.Field>
                            <Form.Input
                                fluid
                                error={this.state.email_error}
                                label="ایمیل"
                                name="email"
                                onBlur={this.validate_email}
                                value={this.state.credentials.email}
                                onChange={this.handle_change}                                
                            />

                            {this.state.email_error && (
                                <Label basic pointing color="red">
                                    تنها میتوانید از (a-z A-Z . 0-9 @ )استفاده کنید
                                </Label>    
                            )} 
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    fluid
                                    label="رمز عبور"
                                    name="password"
                                    type='password'
                                    onBlur={this.verify_password}
                                    value={this.state.credentials.password}
                                    onChange={this.handle_change}
                                />
                                {this.state.password_error && (
                                    <Label basic pointing color="red">
                                        تنها میتوانید از (a-z A-Z . 0-9 @ )استفاده کنید
                                    </Label>    
                                )} 
                        
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    fluid
                                    label="تکرار رمز عبور"
                                    name="password_again"
                                    type='password'
                                    onBlur={this.verify_password_again}
                                    value={this.state.credentials.password_again}
                                    onChange={this.handle_change}
                                />
                                {this.state.password_again_error && (
                                    <Label basic pointing color="red">
                                            تکرار رمزعبور باید با رمزعبور مطابقت داشته باشد. 
                                    </Label>    
                                )} 
                        
                            </Form.Field>
                    
                            <Button primary type='submit'>ورود</Button>
                        </Form>
                        </Segment>
                    
                    </Grid.Column>
                
                </Grid.Row>
                
            </Grid>
            
            
        )
    }
}
const mapStateToProps = (state) => {
    
    return{
        state:state
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signup : (credentials) => dispatch(sessionAction.signup(credentials))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Signup_form)