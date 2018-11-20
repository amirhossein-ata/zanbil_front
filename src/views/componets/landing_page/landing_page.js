import React from 'react'
import {Header} from 'semantic-ui-react'
import IconComponent from '../Icon/icon'
import timetable_icon from '../../../assessts/icons/calendar.svg'
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
                    <p>اگر صاحب کسب و کار هستید ما میتونیم به شما کمک کنیم :</p>
                    <div style={{margin:'5%'}}>
                        <div style={{display:'flex' , justifyContent:'space-between',width:'30vw',background:'rgba(233, 231, 227,.5)',padding:'3%'}}>
                            <div style={{height:'100%'}}>
                                <p style={{marginTop:'30%'}}>
                                    کسب و کار خود را معرفی کنید     

                                </p>
                            </div>
                            <img src={timetable_icon} height="150px" width="150px"/>

                        </div>
                        <br></br>
                        <div style={{marginRight:'32%',display:'flex' , justifyContent:'space-between',width:'30vw',background:'rgba(233, 231, 227,.5)',padding:'3%'}}>
                            <div style={{height:'100%'}}>
                                <p style={{marginTop:'20%'}}>
                                    سرویس های مختلف ایجاد کنید و برای هر کدام یک جدول زمانی ایجاد کنید                        
                                </p>
                            </div>
                            <img src={timetable_icon} height="150px" width="150px"/>

                        </div>
                        <br></br>
                        <div style={{marginRight:'65%',display:'flex' , justifyContent:'space-between',width:'30vw',background:'rgba(233, 231, 227,.5)',padding:'3%'}}>
                            <div style={{height:'100%'}}>
                                <p style={{marginTop:'30%'}}>
                                    از سرویس رزرواسیون آنلاین استفاده کنید                        
                                </p>
                            </div>
                            <img src={timetable_icon} height="150px" width="150px"/>

                        </div>
                        
                    </div>
                </div>
                <div style={{height:'100vh',background:'#E7E8E7'}}></div>
                <div style={{height:'100vh',background:'#4EAF55'}}></div>

            </div>
        )
    }
}


export default Landing_page;