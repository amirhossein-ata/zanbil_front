import React from 'react';
import { Grid, Button ,GridColumn,  Responsive } from 'semantic-ui-react';

const style={
    marginTop:'2px'
}


const timetable_column = (props) => {
            console.log("this shit is:",props.sanses[0])
            return (
            <div>
            {console.log("fucking props are",props)}
            <Grid.Column computer={2} mobile={6} tablet={5}>
                                <div style={{textAlign:'center'}}>{props.day}</div>
                                {console.log("fucking sanses are:",props.sanses)}
                                {console.log("fucking props index is",props.index)}
                                {console.log("zero is index is",props.sanses[0])}
                                {console.log("with [props.index] fucks:",props.sanses[parseInt(props.index,10)])}
                                {/*props.sanses && props.sanses[0][props.index][0].map((sans,i) => (
                                    <div>
                                    <p>fuck u</p>
                                    <Button 
                                    onClick={() =>props.onSansClick(sans.sans.id,sans.sans.start_time,sans.sans.end_time,props.index,i)} 
                                    color="linkedin" 
                                    disable= {sans.is_reserved && !props.edit}
                                    fluid 
                                    style={style}
                                >
                                    {sans.sans.start_time} - {sans.sans.end_time}
                                </Button>
                                </div>
                                ))*/}
                                
                                </Grid.Column>

            </div>
            )

                            }
    


export default timetable_column;