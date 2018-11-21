import React from 'react'
import {Header} from 'semantic-ui-react'
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
                <div style={{height:'auto',background:'white',padding:'3%'}}>
                    <h4>اگر صاحب کسب و کار هستید ما میتونیم به شما کمک کنیم :</h4>
                
                    <div style={{margin:'5%'}}>
                        <CardComponent 
                            amirhossein={true}
                            className="second_part_card"
                            card_text="کسب و کار خود را معرفی کنید"
                            image={introduction_icon}
                            image_height="150px"
                            image_width="150px"
                            border_color="#BCDECF"
                            background="rgba(233, 231, 227,.5)"
                        />
                        <br></br>
                        <CardComponent 
                            amirhossein={true}
                            className="second_part_card"
                            card_text="سرویس های مختلف ایجاد کنید و برای هر کدام یک جدول زمانی ایجاد کنید"
                            image={timetable_icon}
                            image_height="150px"
                            image_width="150px"
                            border_color="#BCDECF"
                            background="rgba(233, 231, 227,.5)"
                            marginRight="31%"
                            width="32vw"
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
                            background="rgba(233, 231, 227,.5)"
                            marginRight="65%"
                        />
                    </div>
                </div>
                <div style={{height:'auto',padding:'3%',background:'#E7E8E7'}}>
                    <h4>اگر مشتری هستید ما میتونیم به شما کمک کنیم :</h4>
                    
                    <div style={{margin:'5%'}}>
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
                            marginRight="32%"
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
                            marginRight="65%"
                            width="32vw"
                        />
                

                    </div>

                </div>
                <div style={{paddingTop:'2%' ,height:'100vh',background:'#BCDECF'}}>
                    <div style={{textAlign:'center',}}>
                        <h2>طرح های ما :</h2>                
                    </div>
                    <div style={{display:'flex',justifyContent:'center',paddingTop:'5%'}}>
                        <div style={{textAlign:'right',width:'25vw', marginLeft:'2%' , height:'60vh',background:'white'}}>
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
                        <div style={{textAlign:'right',width:'25vw' ,marginLeft:'2%', height:'60vh',background:'white'}}>
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
                        <div style={{textAlign:'right',width:'25vw' , height:'60vh',background:'white'}}>
                            

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
                </div>

            </div>
        )
    }
}


export default Landing_page;