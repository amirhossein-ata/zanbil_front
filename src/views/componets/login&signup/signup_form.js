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
        if(/[^A-Za-z0-9_-]/.test(username) || !username) {
            this.setState(()=>({username_error:true}))
            return true     
        }else{
            this.setState(()=>({username_error:false}))       
            return false     
        }

    }
    validate_email = () => {
        const email = this.state.credentials.email
        if( !(/[a-zA-Z]+@[a-zA-Z]+.[a-zA-z]/.test(email)) || !email) {
            this.setState(()=>({email_error:true}));   
            return true
        }else{
            this.setState(()=>({email_error:false}));       
            return false
        }

    }
    verify_password = () => {
        const password = this.state.credentials.password
        if(/[^A-Za-z0-9@.]/.test(password) || !password) {
            this.setState(()=>({password_error:true})) 
            return true      
        }else{
            this.setState(()=>({password_error:false}))
            return false       
        }
    }
    
    verify_password_again = () => {
        const password_again = this.state.credentials.password_again

        if(password_again !== this.state.credentials.password || !password_again){
            this.setState(() => ({password_again_error:true}))
            return true
        }
        else{
            this.setState(()=>({password_again_error:false}))
            return false
        }
    }
    onSubmit = () => {
        const username_valid = this.verify_username()
        const password_valid = this.verify_password()
        const password_again_valid = this.verify_password_again()
        const email_valid = this.validate_email()
        if(username_valid && password_valid && password_again_valid && email_valid){
            this.props.signup(this.state.credentials)
        }
    }
    render(){
        
        return(
            
            <Grid centered >
                <Grid.Column computer={10} tablet={12}  mobile={14} textAlign="right">
                    <Form onSubmit={this.onSubmit} >
                        <Form.Field>
                            <Form.Input
                                error={this.state.username_error}
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
                                error={this.state.password_error}
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
                                error={this.state.password_again_error}
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
                
                </Grid.Column>    
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