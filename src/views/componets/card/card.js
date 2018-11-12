import React from 'react'
import { Card, Icon, Image,Button } from 'semantic-ui-react'

const style = {
    height : '50vh'
}
const Card_component = (props) => (
    
    <Card color="teal" raised style={style}>
        <Image size="big"  src="https://tehdooni.com/wp-content/uploads/2017/12/7715_%DA%A9%D8%A7%D9%81%D9%87-%D8%AA%D9%88-%DA%A9%D8%A7%D9%81%D9%87-%D8%AC%D9%87%D8%A7%D9%86-%D8%A2%D8%B1%D8%A7.jpg" />
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