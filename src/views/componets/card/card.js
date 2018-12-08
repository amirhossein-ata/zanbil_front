import React from 'react'
import { Card, Icon, Image,Button,Rating, Divider } from 'semantic-ui-react'

const style = {
    height : '50vh'
}

const amirhossein_style = (props) => ({
    display:'flex', 
    justifyContent:'space-between',
    width:props.width? `${props.width}`: '30vw',
    paddingRight:'3%',
    paddingTop:'1%',
    paddingBottom:'1%',
    paddingLeft:'3%',
    marginTop:props.marginTop ? `${props.marginTop}` : '',
    marginBottom:props.marginBottom ? `${props.marginBottom}` : '',
    marginLeft:props.marginLeft ? `${props.marginLeft}` : '',
    marginRight:props.marginRight? `${props.marginRight}`:'',
    border:`${props.border_color}` ?`1px solid ${props.border_color}` : '',
    background:props.background ? props.background : '',
    boxShadow:`2px 2px ${props.border_color}`,
    height:'40vh',
    alignItems:'center'
})

const info_style = (props) => ({
    height:'50vh',

})
const Card_component = (props) => (
    <div>
    
        {props.semantic && (
            <Card color="teal" raised style={style}>
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
        
        )}
        {props.info && (
            <Card raised fluid  color="teal" style={info_style(props)}>
                <Image size="massive" src={props.image} />
                <Card.Content textAlign="right">
                    <Card.Header>{props.header}</Card.Header>
                    <Card.Meta>
                        {props.rating && (
                            <Rating disabled icon="star" defaultRating={props.rating%5} maxRating={5}/>            

                        )}
                        {props.date && (
                            <p>{props.date}</p>
                        )}
                    </Card.Meta>
                    <Card.Description>{props.description}</Card.Description>
                </Card.Content>
            </Card>
        )}
        
        {props.report && (
            <Card raised fluid>
                <Card.Content style={{background:`${props.color}`}}>
                    <Card.Header >
                        <span style={{display:'flex',justifyContent:'space-between',color:'white'}}>
                            <p>{props.header}</p>
                            <Icon name="exclamation" />
                        </span>
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Card.Description>
                        <span style={{display:'flex'}}>
                            <h3>{props.value}</h3>
                            {props.percentage > 0 ? (
                                    <Icon name="caret up" color="green">{props.percentage}%</Icon>
                                ) : (
                                    <Icon name="caret down" color="red">{props.percentage}%</Icon>
                            )}
                        </span>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                        {props.extra}
                </Card.Content>
            
            </Card>
        )}

        {props.amirhossein && (
            <div className={props.className} style={amirhossein_style(props)}>
                <p>{props.card_text}</p>
                <img src={props.image} height={props.image_height} width={props.image_width}/>

            </div>

        )}
        
    </div>
)

export default Card_component