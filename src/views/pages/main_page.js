import React from 'react'
import Navbar from '../componets/navbar/navbar'
import BusinessPage from './business_page'
import { Grid } from 'semantic-ui-react';
import TimeRangeSlider from '../componets/time_slider/time_slider'
class Main_page extends React.Component{
    render(){
        return(
            <div>
                <Navbar 
                    categories={['آرایشگاه' , 'رستوران']}
                />
                <Grid centered>
                    <Grid.Column computer={14}>
                        <BusinessPage/>
                    
                    </Grid.Column>
                </Grid>

                <Grid centered>
                    <Grid.Column computer={14}>
                        <TimeRangeSlider/>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default Main_page