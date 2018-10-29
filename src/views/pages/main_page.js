import React from 'react'
import Navbar from '../componets/navbar/navbar'
import BusinessPage from './business_page'
import ServicePage from './service_page'
import { Grid } from 'semantic-ui-react';
class Main_page extends React.Component{
    render(){
        return(
            <Grid>
                <Grid.Column computer={16} tablet={16} mobile={16}>
                    <Navbar 
                        categories={['آرایشگاه' , 'رستوران']}
                    />
                    <Grid centered>
                        <Grid.Column computer={14} tablet={16} mobile={16}>
                            <ServicePage/>
                        
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
                
            </Grid>
        )
    }
}

export default Main_page