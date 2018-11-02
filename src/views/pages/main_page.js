import React from 'react'
import Navbar from '../componets/navbar/navbar'
import BusinessPage from './business_page'
import { Grid } from 'semantic-ui-react';
import CategoryPage from './category_page'
import TimetableSelect from '../componets/time_slider/timetable_select'
class Main_page extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <Grid centered>
                    <Grid.Column computer={14}>
                        <CategoryPage />
                    </Grid.Column>
                </Grid>

            </div>
        )
    }
}

export default Main_page