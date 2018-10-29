import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const Card_component = (props) => (
    <Card color="blue">
        <Image src={props.image} />
        <Card.Content>
        <Card.Header>{props.header}</Card.Header>
        <Card.Meta>
            <span className='date'>{props.meta1}</span>
        </Card.Meta>
        <Card.Description>{props.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
            {props.meta2}
        </Card.Content>
    </Card>
)

export default Card_component