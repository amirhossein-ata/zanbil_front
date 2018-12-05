import React from 'react';
import { Grid, Button ,GridColumn,  Responsive } from 'semantic-ui-react';

const style={
    marginTop:'2px'
}
const timetable_column = (props) => (
            <div>
            <Grid.Column computer={2} mobile={6} tablet={5}>
                                <div style={{textAlign:'center'}}>{props.day}</div>
                                    
                                {props.sanses[props.index].map((sans) => (
                                    <Button 
                                        onClick={() =>props.onSansClick(sans.sansID,sans.sans_start,sans.sans_end)} 
                                        color="linkedin" 
                                        disable= {sans.is_reserved && !props.edit}
                                        fluid 
                                        style={style}
                                    >
                                        {sans.start_time} - {sans.end_time}
                                    </Button>
                                ))}
                                </Grid.Column>

            </div>

        )
    


export default timetable_column;