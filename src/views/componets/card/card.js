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
    width:'100%',
    textAlign:'right',
    background:'white',
    border:'1px solid #E5EEEA',
    boxShadow:`2px 2px #F4FCF8`

})
const Card_component = (props) => (
    <div>
    
        {props.semantic && (
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
        
        )}
        {props.info && (
            // <div style={info_style(props)}>
            //     <img src={props.image} width="100%" height="70%"/>
            //     <div style={{padding:'1% 3% 1% 3%'}}>
            //         <div style={{display:'flex'}}>
            //             <div><h4>{props.header}</h4></div>
            //             <div style={{marginRight:'auto'}}>
                            // <Rating icon="star" defaultRating={props.rating%5} maxRating={5}/>
            //             </div>
            //         </div>
            //         <Divider></Divider>
            //         {props.price && (
            //             <p>قیمت :  {props.price}</p>
            //         )}
            //         {props.description && (
            //             <p>{props.description}</p>
            //         )}

            //     </div>
            // </div>
            <Card raised fluid color="teal">
                <Image size="massive" src={props.image} />
                <Card.Content>
                <Card.Header>{props.header}</Card.Header>
                <Card.Meta>
                    <Rating disabled icon="star" defaultRating={props.rating%5} maxRating={5}/>            
                </Card.Meta>
                <Card.Description>{props.description}</Card.Description>
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