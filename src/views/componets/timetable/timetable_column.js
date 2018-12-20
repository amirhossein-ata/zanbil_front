import React from 'react';
import { Grid, Button ,GridColumn,  Responsive } from 'semantic-ui-react';

const style={
    marginTop:'2px'
}


const timetable_column = (props) => {
            
            return (
                <div>
                    <div style={{textAlign:'justify'}}>{props.day}</div>
                        {console.log(props.edit)}
                    {props.sanses &&  props.sanses.map((sans,i) => (
                        <Button 
                            onClick={()=>props.onSansClick(sans.sans.id,sans.sans.start_time,sans.sans.end_time,props.index,i)} 
                            color="linkedin" 
                            disabled={sans.is_reserved && !props.edit } 
                            fluid 
                            style={style}
                        >{sans.sans.start_time}-{sans.sans.end_time}
                        </Button>
                    ))}
                </div>
            )

                            }
    


export default timetable_column;