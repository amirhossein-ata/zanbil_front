import React from 'react'
import Card from '../componets/card/card'
import { Segment, Grid, Divider, Header} from 'semantic-ui-react';
class Business_page extends React.Component{
    render(){
        return(
            <Segment raised>
                <Grid >
                    <Grid.Column computer={6}></Grid.Column>
                    <Grid.Column computer={8}>
                        <Card 
                            header="نام بیزینس"
                            description="توضیحات"
                        />         
                    </Grid.Column>
                </Grid>
                <Divider
                    section
                />
                <Header size='medium' textAlign="center">سرویس ها</Header>
                <br></br>
                <Grid centered >

                    <Grid.Column computer={14} mobile={15} tablet={15}>
                        <Grid textAlign="right">
                            <Grid.Column computer={4}>
                                <Card
                                    header="نام سرویس"
                                    meta2="امتیاز"
                                    description="توضیحات سرویس"
                                    meta1="نام سرویس دهنده"
                                />
                            </Grid.Column>
                            <Grid.Column computer={4}>
                                <Card

                                    header="نام سرویس"
                                    meta2="امتیاز"
                                    description="توضیحات سرویس"
                                    meta1="نام سرویس دهنده"
                                />
                            </Grid.Column>

                            <Grid.Column computer={4}>
                                <Card

                                    header="نام سرویس"
                                    meta2="امتیاز"
                                    description="توضیحات سرویس"
                                    meta1="نام سرویس دهنده"
                                />
                            </Grid.Column>
                            <Grid.Column computer={4}>
                                <Card

                                    header="نام سرویس"
                                    meta2="امتیاز"
                                    description="توضیحات سرویس"
                                    meta1="نام سرویس دهنده"
                                />
                            </Grid.Column>
                            <Grid.Column computer={4}>
                                <Card

                                    header="نام سرویس"
                                    meta2="امتیاز"
                                    description="توضیحات سرویس"
                                    meta1="نام سرویس دهنده"
                                />
                            </Grid.Column>
                        </Grid>
                    </Grid.Column>
                </Grid>        
            </Segment>
            
        )
    }
}

export default Business_page;