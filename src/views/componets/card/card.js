import React from 'react'
import { Card, Icon, Image,Button,Rating, Divider } from 'semantic-ui-react'
import posed from 'react-pose'
import Fade from 'react-reveal/Fade'

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

const AnimatedCard = posed.div({
    // hoverable: true,
    pressable: true,
    init: { scale: 1 },
    press: { scale: 0.8 }
    // init: {
    //     scale: 1,
    //     boxShadow: '0px 0px 0px rgba(0,0,0,0)'
    // },
    // press: { scale: 0.8 }

    // hover: {
    //     scale: 1.05,
    //     boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
    // } 
});


class Card_component extends React.Component{
    state={
        mouseOver:false
    }
    render(){
        return(
            <Fade bottom>
            
                <div 
                    onMouseEnter={()=>this.setState(()=>({mouseOver:true}))}
                    onMouseLeave={()=>this.setState(()=>({mouseOver:false}))}    
                >
                    <AnimatedCard
                        pose={this.state.mouseOver ? 'visible' : 'hidden'} 

                    >
                    
                        {this.props.semantic && (
                            <Card color="teal" raised style={style} link>
                                <Card.Content>
                            
                                <Card.Header>{this.props.header}</Card.Header>
                                <Card.Meta>
                                    <span className='date'>{this.props.meta1}</span>
                                </Card.Meta>
                                <Card.Description>{this.props.description}</Card.Description>
                                </Card.Content>
                                {this.props.button && (
                                    <Card.Content extra>
                        
                                        <div className='ui buttons'>
                                        <Button primary>
                                            {this.props.button}
                                        </Button>
                                        </div>
                                    </Card.Content>
                                )}
                            </Card>
                        
                        )}
                        {this.props.info && (
                                <Card 
                                    raised 
                                    fluid  
                                    color="teal" 
                                    style={info_style(this.props)} 
                                    link
                                >
                                    <Image size="massive" src={this.props.image} />
                                    <Card.Content textAlign="right">
                                        <Card.Header>{this.props.header}</Card.Header>
                                        <Card.Meta>
                                            {this.props.rating && (
                                                <Rating disabled icon="star" defaultRating={this.props.rating%5} maxRating={5}/>            
                
                                            )}
                                            {this.props.date && (
                                                <p>{this.props.date}</p>
                                            )}
                                        </Card.Meta>
                                        <Card.Description>{this.props.description}</Card.Description>
                                    </Card.Content>
                                </Card>
                        
                        )}
                        
                        {this.props.report && (
                            <Card raised fluid >
                                <Card.Content style={{background:`${this.props.color}`}}>
                                    <Card.Header >
                                        <span style={{display:'flex',justifyContent:'space-between',color:'white'}}>
                                            <p>{this.props.header}</p>
                                            <Icon name="exclamation" />
                                        </span>
                                    </Card.Header>
                                </Card.Content>
                                <Card.Content>
                                    <Card.Description>
                                        <span style={{display:'flex'}}>
                                            <h3>{this.props.value}</h3>
                                            {this.props.percentage > 0 ? (
                                                    <Icon name="caret up" color="green">{this.props.percentage}%</Icon>
                                                ) : (
                                                    <Icon name="caret down" color="red">{this.props.percentage}%</Icon>
                                            )}
                                        </span>
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                        {this.props.extra}
                                </Card.Content>
                            
                            </Card>
                        )}
                
                        {this.props.amirhossein && (
                            <div className={this.props.className} style={amirhossein_style(this.props)}>
                                <p>{this.props.card_text}</p>
                                <img src={this.props.image} height={this.props.image_height} width={this.props.image_width}/>
                
                            </div>
                
                        )}
                    </AnimatedCard>
                </div>
            </Fade>
        )
    }
}

export default Card_component