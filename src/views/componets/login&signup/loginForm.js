import React from 'react'
import * as sessionAction from '../../../core/login&signup/session_actions'
import {connect} from 'react-redux'
import { Button, Segment, Form ,Grid,Label, Message , Header} from 'semantic-ui-react'
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
        if(/[^A-Za-z0-9_-]/.test(username) || !username) {
            this.setState(()=>({username_error:true}))
            return false       
        }else{
            this.setState(()=>({username_error:false}))       
            return true
        }

    }

    verify_password = () => {
        const password = this.state.credentials.password
        if(/[^A-Za-z0-9@.]/.test(password) || !password) {
            this.setState(()=>({password_error:true})) 
            return false      
        }else{
            this.setState(()=>({password_error:false})) 
            return true      
        }
    }
    
    onSubmit = () => {
        const username_valid = this.verify_username()
        const password_valid = this.verify_password()
        if(username_valid && password_valid){
            this.props.login(this.state.credentials)
        }
    }
  
    render(){
        
        return(
            
            <Grid  centered>
                <Grid.Column computer={10} tablet={12} mobile={14} textAlign="right">
                    <Header dividing>
                        فرم ورود
                    </Header>

                    <Form onSubmit={this.onSubmit}>
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
                        <Button primary type='submit'>ورود</Button>
                    </Form>   
                </Grid.Column>
                
            </Grid>
            
            
        )
    }
}
const mapStateToProps = (state) => {
    
    return{
        login_error : state.session_reducer.login_error
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        login : (credentials) => dispatch(sessionAction.login(credentials))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login_form)