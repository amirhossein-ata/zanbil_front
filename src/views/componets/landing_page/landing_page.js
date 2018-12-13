import React from 'react'
import {Header,Transition, Responsive} from 'semantic-ui-react'
import CardComponent from '../../componets/card/card'
import timetable_icon from '../../../assessts/icons/calendar.svg'
import booked_icon from '../../../assessts/icons/booked.svg'
import introduction_icon from '../../../assessts/icons/online-shop.svg'
import list_icon from '../../../assessts/icons/list.svg'
import email_icon from '../../../assessts/icons/email.svg'
import gold_icon from '../../../assessts/icons/gold-medal.svg'
import silver_icon from '../../../assessts/icons/silver-medal.svg'
import bronze_icon from '../../../assessts/icons/bronze-medal.svg'
import tick_icon from '../../../assessts/icons/success.svg'
import multiply_icon from '../../../assessts/icons/multiply.svg'

import Zoom from 'react-reveal/Zoom'
import Slide from 'react-reveal/Slide'
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


const Card = (props) =>(
    <div className={props.className} style={amirhossein_style(props)}>
        <p>{props.card_text}</p>
        <img src={props.image} height={props.image_height} width={props.image_width}/>

    </div>
)

class Landing_page extends React.Component{
    render(){
        return(
            <div style={{background:'white'}}>
                <div className="first_part">
                    <div className="first_part__title">
                            <h2>
                                به زنبیل خوش آمدید

                            </h2>
                            <p>
                            به راحتی کسب و کار خود را معرفی کنید و از سیستم رزور آنلاین بهره ببرید                            
                            </p>
                    </div>
                    
                </div>
                <div style={{minHeight:'80vh',background:'white',padding:'5% 3% 5% 3%'}}>
                        <h4>اگر صاحب کسب و کار هستید ما میتونیم به شما کمک کنیم :</h4>
                    
                    <Responsive {...Responsive.onlyMobile}>
                        <Slide right>
                            <Card
                                className="second_part_card"
                                card_text="کسب و کار خود را معرفی کنید"
                                image={introduction_icon}
                                image_height="150px"
                                image_width="150px"
                                border_color="#BCDECF"
                                background="rgba(233, 231, 227,.5)"
                                marginLeft="auto"
                                marginRight="auto"
                                width="94%"
                            />
                                
                            <br></br>
                            <Card
                                className="second_part_card"
                                card_text="سرویس های مختلف ایجاد کنید و برای هر کدام یک جدول زمانی ایجاد کنید"
                                image={timetable_icon}
                                image_height="150px"
                                image_width="150px"
                                border_color="#BCDECF"
                                background="rgba(233, 231, 227,.5)"
                                marginLeft="auto"
                                marginRight="auto"
                                width="94%"                    
                            />
                            
                            <br></br>   
                            <Card
                                className="second_part_card"
                                card_text="از سرویس رزرواسیون آنلاین استفاده کنید"
                                image={booked_icon}
                                image_height="150px"
                                image_width="150px"
                                border_color="#BCDECF"
                                background="rgba(233, 231, 227,.5)"
                                marginLeft="auto"
                                marginRight="auto"
                                width="94%"                    
                            />
                        </Slide>
                    </Responsive>
                    <Responsive minWidth={Responsive.onlyTablet.minWidth} >            
                        <Zoom>
                            
                            <div style={{ display:'flex',justifyContent:'space-between',marginTop:'3%'}}>
                                <Card
                                    className="second_part_card"
                                    card_text="کسب و کار خود را معرفی کنید"
                                    image={introduction_icon}
                                    image_height="150px"
                                    image_width="150px"
                                    border_color="#BCDECF"
                                    background="rgba(233, 231, 227,.5)"
                                />
                                
                                <Card 
                                    className="second_part_card"
                                    card_text="سرویس های مختلف ایجاد کنید و برای هر کدام یک جدول زمانی ایجاد کنید"
                                    image={timetable_icon}
                                    image_height="150px"
                                    image_width="150px"
                                    border_color="#BCDECF"
                                    background="rgba(233, 231, 227,.5)"
                                />
                                <Card
                                    className="second_part_card"
                                    card_text="از سرویس رزرواسیون آنلاین استفاده کنید"
                                    image={booked_icon}
                                    image_height="150px"
                                    image_width="150px"
                                    border_color="#BCDECF"
                                    background="rgba(233, 231, 227,.5)"
                                />
                            
                            </div>
                        </Zoom>
                    </Responsive>
                </div>
                <div style={{minHeight:'80vh',padding:'5% 3% 5% 3%',background:'#E7E8E7'}}>
                    <h4>اگر مشتری هستید ما میتونیم به شما کمک کنیم :</h4>
                    <Responsive {...Responsive.onlyMobile}>
                        <CardComponent 
                            amirhossein={true}
                            className="second_part_card"
                            card_text="در میان کسب و کارها جست و جو کنید"
                            image={list_icon}
                            image_height="150px"
                            image_width="150px"
                            border_color="#BCDECF"
                            background="white"
                            marginLeft="auto"
                            marginRight="auto"
                            width="94%"
                        />
                        <br></br>
                        <CardComponent 
                            amirhossein={true}
                            className="second_part_card"
                            card_text="از سرویس رزرواسیون آنلاین استفاده کنید"
                            image={booked_icon}
                            image_height="150px"
                            image_width="150px"
                            border_color="#BCDECF"
                            background="white"
                            marginLeft="auto"
                            marginRight="auto"
                            width="94%"
                        />
                        <br></br>
                        <CardComponent 
                            amirhossein={true}
                            className="second_part_card"
                            card_text="ایمیل های یادآوری دریافت کنید تا دیگر هیچ قراری را فراموش نکنید"
                            image={email_icon}
                            image_height="150px"
                            image_width="150px"
                            border_color="#BCDECF"
                            background="white"
                            marginLeft="auto"
                            marginRight="auto"
                            width="94%"
                        />
                
                    </Responsive>
                    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                        <Zoom>
                            
                            <div style={{display:'flex',justifyContent:'space-between',marginTop:'3%'}}>
                                <CardComponent 
                                    amirhossein={true}
                                    className="second_part_card"
                                    card_text="در میان کسب و کارها جست و جو کنید"
                                    image={list_icon}
                                    image_height="150px"
                                    image_width="150px"
                                    border_color="#BCDECF"
                                    background="white"
                                />
                                <CardComponent 
                                    amirhossein={true}
                                    className="second_part_card"
                                    card_text="از سرویس رزرواسیون آنلاین استفاده کنید"
                                    image={booked_icon}
                                    image_height="150px"
                                    image_width="150px"
                                    border_color="#BCDECF"
                                    background="white"
                                />
                                <CardComponent 
                                    amirhossein={true}
                                    className="second_part_card"
                                    card_text="ایمیل های یادآوری دریافت کنید تا دیگر هیچ قراری را فراموش نکنید"
                                    image={email_icon}
                                    image_height="150px"
                                    image_width="150px"
                                    border_color="#BCDECF"
                                    background="white"
                                
                                />
                            </div>
                        </Zoom>    
                    </Responsive>

                </div>
                <div style={{paddingTop:'2%' ,height:'100vh',background:'#BCDECF'}}>
                    <div style={{textAlign:'center',}}>
                        <h2>طرح های ما :</h2>                
                    </div>
                    <Zoom bottom>
                    
                        <div style={{display:'flex',justifyContent:'center',paddingTop:'5%'}}>
                        <div style={{textAlign:'right',width:'25vw', marginLeft:'2%' , height:'auto',background:'white'}}>
                            <div  style={{marginLeft:'auto',marginRight:'40%'}} >
                                <img src={bronze_icon}width="80px" height="80px" />
                                <h3>طرح برنزی</h3>
                                <p>رایگان</p>
                            </div>    
                            <ul>
                                <li>
                                    <div style={{display:'flex'}}>
                                        <p>تعداد سرویس : ۳</p>
                                    </div>
                                </li>
                                <br></br>
                                <li>
                                    <div style={{display:'flex'}}>
                                        <p> ایمیل یادآوری</p> <span style={{marginRight:'10px'}}><img  src={tick_icon} height="30px"  width="30px"/></span>
                                    
                                    </div>
                                </li>
                                <br></br>
                                <li>
                                    <div style={{display:'flex'}}>
                                        <p>پیامک یادآوری</p> <span style={{marginRight:'10px'}}><img  src={multiply_icon} height="30px"  width="30px"/></span>
                                    
                                    </div>
                                </li>

                                <br></br>
                                <li>
                                    <div style={{display:'flex'}}>
                                        <p>شخصی سازی صفحه ی کسب و کار</p> <span style={{marginRight:'10px'}}><img  src={multiply_icon} height="30px"  width="30px"/></span>
                                    
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div style={{textAlign:'right',width:'25vw' ,marginLeft:'2%', height:'auto',background:'white'}}>
                            <div style={{marginLeft:'auto',marginRight:'40%'}}>         
                                <img src={silver_icon}  width="80px" height="80px" />
                                <h3>طرح نقره ای</h3>
                                <p>۲۰,۰۰۰ تومان در ماه</p>
                            </div>
                            <ul>
                                <li>
                                    <div style={{display:'flex'}}>
                                        <p>تعداد سرویس : ۱۰</p>
                                    </div>
                                </li>
                                <br></br>
                                <li>
                                    <div style={{display:'flex'}}>
                                        <p> ایمیل یادآوری</p> <span style={{marginRight:'10px'}}><img  src={tick_icon} height="30px"  width="30px"/></span>
                                    
                                    </div>
                                </li>
                                <br></br>
                                <li>
                                    <div style={{display:'flex'}}>
                                        <p>پیامک یادآوری</p> <span style={{marginRight:'10px'}}><img  src={tick_icon} height="30px"  width="30px"/></span>
                                    
                                    </div>
                                </li>

                                <br></br>
                                <li>
                                    <div style={{display:'flex'}}>
                                        <p>شخصی سازی صفحه ی کسب و کار</p> <span style={{marginRight:'10px'}}><img  src={multiply_icon} height="30px"  width="30px"/></span>
                                    
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div style={{textAlign:'right',width:'25vw' , height:'auto',background:'white'}}>  
                            <div style={{marginLeft:'auto',marginRight:'40%'}} >
                                <img src={gold_icon} width="80px" height="80px" />                        
                                <h3>طرح طلایی</h3>
                                <p>۵۰,۰۰۰ تومان در ماه</p>
                            </div>

                            <ul>
                                <li>
                                    <div style={{display:'flex'}}>
                                        <p>تعداد سرویس :نامحدود</p>
                                    </div>
                                </li>
                                <br></br>
                                <li>
                                    <div style={{display:'flex'}}>
                                        <p> ایمیل یادآوری</p> <span style={{marginRight:'10px'}}><img  src={tick_icon} height="30px"  width="30px"/></span>
                                    
                                    </div>
                                </li>
                                <br></br>
                                <li>
                                    <div style={{display:'flex'}}>
                                        <p>پیامک یادآوری</p> <span style={{marginRight:'10px'}}><img  src={tick_icon} height="30px"  width="30px"/></span>
                                    
                                    </div>
                                </li>

                                <br></br>
                                <li>
                                    <div style={{display:'flex'}}>
                                        <p>شخصی سازی صفحه ی کسب و کار</p> <span style={{marginRight:'10px'}}><img  src={tick_icon} height="30px"  width="30px"/></span>
                                    
                                    </div>
                                </li>
                            </ul>
                        </div>      
                    </div>
                    </Zoom>

                </div>

            </div>
        )
    }
}


export default Landing_page;