import React from 'react';
import { Card,Grid,Divider} from 'semantic-ui-react'

const style = {
    height : '30vh'
}
class Account_page extends React.Component{
    
    render(){
        return(
            <div>
                <Grid centered textAlign="right">
                    <br/>
                        <Card color="grey" raised style={style}>
                            <Card.Header><b>Business</b></Card.Header>
                            <Card.Description>email:a@a.com</Card.Description>
                        </Card>
                    
                </Grid><br/>
                <Divider horizontal>تاریخچه</Divider>
            </div>
    )
        }
}

export default Account_page;