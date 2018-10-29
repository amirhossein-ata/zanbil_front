import React from 'react'
import { Card, Icon, Image,Button } from 'semantic-ui-react'

const style = {
    height : '50vh'
}
const Card_component = (props) => (
    
    <Card color="blue" style={style}>
        <Image src={props.image} />
        <Card.Content>
        <Card.Header>{props.header}</Card.Header>
        <Card.Meta>
            <span className='date'>{props.meta1}</span>
        </Card.Meta>
        <Card.Description>{props.description}</Card.Description>
        </Card.Content>
        {props.button && (
            <Card.Content extra>

                <div className='ui buttons'>
                <Button primary>
                    {props.button}
                </Button>
                </div>
            </Card.Content>
        )}
    </Card>
)

export default Card_component