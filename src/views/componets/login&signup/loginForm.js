import React from 'react'
import { Button, Segment, Form ,Grid,Label} from 'semantic-ui-react'
import {invalid_characters} from '../../../core/constants'
class Login_form extends React.Component{
    state={
        credentials:{
            username :'',
            password:''
        },
        username_error:false, 
        password_error:false
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
        if(/[^A-Za-z0-9@.]/.test(username)) {
            this.setState(()=>({username_error:true}))       
        }else{
            this.setState(()=>({username_error:false}))       
            
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
    
    render(){
        
        return(
            
                <Grid className="login_form">
                    <Grid.Row verticalAlign="middle">
                        <Grid.Column computer={3} tablet={2} mobile={1} ></Grid.Column>
                        <Grid.Column computer={10} tablet={12} mobile={14}>
                            <Segment raised color="blue" padded>  
                            <Form>
                                <Form.Field>
                                    <Form.Input
                                        fluid
                                        label="نام کاربری - ایمیل - شماره تلفن"
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
                                <Button primary type='submit'>ورود</Button>
                            </Form>
                            </Segment>
                        
                        </Grid.Column>
                    
                    </Grid.Row>
                    
                    <Label>test</Label>
                </Grid>
                
            
        )
    }
}

export default Login_form