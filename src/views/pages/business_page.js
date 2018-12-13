import React from 'react'
import {connect} from 'react-redux'
import Card from '../componets/card/card'
import { Segment, Grid, Divider, Header ,Image,Button,Breadcrumb,Comment,Rating} from 'semantic-ui-react';
import * as business_page_actions from '../../core/business_page/business_page_actions'
import {change_panel} from '../../core/main_page/active_panel_actions'
import * as service_page_actions from '../../core/service_page/service_page_actions'
import * as review_actions from '../../core/review/review_actions'
import RouterPanel from '../componets/router-panel/router-panel'
import {push_to_router} from '../../core/router/router_panel_actions'

import moment from 'jalali-moment' 

class Business_page extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            counter:5,
            index:0
        }
        this.on_service_click = this.on_service_click.bind(this)
    }
    async componentDidMount(){
        await this.props.get_review(this.props.business.id)
        await this.props.get_business_info(this.props.business.id)    
        console.log('reviews areeeeeeeeeeeeeeeeee: ', this.props.reviews)
        
        if(this.state.counter > this.props.reviews.length){  
            await this.set_to_length();
        }
      
    }
    async on_service_click({id,name}){
        const today_date = moment().locale('fa').format('YYYY/MM/DD')
        await this.props.get_service_page_info(id,today_date)
        this.props.push_to_router({
            text:name,
            value:'service_page'
        })
        this.props.change_panel('service_page')
    }
    on_show_more_click= () => {
        if(this.state.counter + 5 < this.props.reviews.length){
            this.setState(() => ({counter:this.state.counter + 5}))
        }
        else{
            this.setState(() => ({counter:this.props.reviews.length}))    
        }    
    }
    set_to_length = () => (
        this.setState(() => ({counter:this.props.reviews.length}))
    )
    render(){
        console.log("counter is :", this.state.counter);
        console.log("length is :", this.props.reviews.length);
        
        console.log('active panel is : ',this.props.active_panel)
        
          let tmp = this.props.reviews.slice(0,this.state.counter -1);
          let c = this.props.reviews[this.state.counter - 1]
          console.log("c is :",c)
        
        return(
            <Grid centered>
                <Grid.Column computer={15}>
                            <RouterPanel />
                
                    <br></br>
                    <Header dividing textAlign="center">صفحه ی کسب و کار</Header>
                    <br></br>

                    <Grid textAlign="right" centered>
                        <Grid.Column tablet={12} mobile={12} computer={12} style={{marginTop:'2%'}}>
                            <Image 
                                src={this.props.business.pictures[0] ?  require(`../../assessts/ZanbilBackEnd/uploads/${this.props.business.pictures[this.props.business.pictures.length - 1].id}`) : "https://tehdooni.com/wp-content/uploads/2017/12/7715_%DA%A9%D8%A7%D9%81%D9%87-%D8%AA%D9%88-%DA%A9%D8%A7%D9%81%D9%87-%D8%AC%D9%87%D8%A7%D9%86-%D8%A2%D8%B1%D8%A7.jpg"}
                                bordered
                                size="massive" 
                            />
                        </Grid.Column>
                    </Grid>
                    {this.props.business && (
                        <Grid centered>
                        
                            <Grid.Column tablet={4} mobile={8} computer={4} style={{marginTop:'2%'}}>
                                
                                    <div >
                                        <Segment padded="very" color="teal"  raised textAlign="right">
                                            <p>مشخصات : </p>
                                            <p>{this.props.business.name}</p>
                                            <p>{this.props.business.description}</p>
                                            <Breadcrumb>
                                                <Breadcrumb.Section>
                                                    {this.props.business.email}
                                                </Breadcrumb.Section>
                                                <Breadcrumb.Divider ></Breadcrumb.Divider>
                                                <Breadcrumb.Section >
                                                    {this.props.business.phone_number}
                                                </Breadcrumb.Section>
                                            </Breadcrumb>          
                                        </Segment>
                                        
                                    </div>  
                                
                            </Grid.Column>
                        </Grid>
                    )}
                    
                    <Divider
                        section
                    />
                    <Header size='medium' textAlign="center">سرویس ها</Header>
                    <br></br>
                    <Grid centered >
                        <Grid.Column computer={14} mobile={15} tablet={15}>
                            <Grid centered textAlign="right">
                                {this.props.services[0] && this.props.services[0].map((service) => (
                                    <Grid.Column computer={5} tablet={8} mobile={16}>
                                        <div onClick={()=>this.on_service_click(service)}>
                                            <Card
                                                info={true}
                                                image="https://tehdooni.com/wp-content/uploads/2017/12/7715_%DA%A9%D8%A7%D9%81%D9%87-%D8%AA%D9%88-%DA%A9%D8%A7%D9%81%D9%87-%D8%AC%D9%87%D8%A7%D9%86-%D8%A2%D8%B1%D8%A7.jpg"
                                                header={service.name}
                                                rating={service.rating}
                                                description={service.fee}
                                            />
                                        </div>    
                                    </Grid.Column>
                                ))}
                            </Grid>
                        </Grid.Column>

                    </Grid>
                    <Divider horizontal section>نظرات</Divider> <br/>
                    <Grid centered>
                        <Grid.Column centered >
                                
                        {!this.props.reviews && <span>هیچ نظری ثبت نشده است!</span>}
                        {this.props.reviews  && tmp.map((review) => (
                            <div>
                            <Comment>
                                <Comment.Content>
                                    <Comment.Author as='a'> <Grid textAlign="right"><b>{review.user.username}</b> </Grid></Comment.Author>
                                    <Comment.Metadata>
                                    <Grid textAlign="right">
                                    
                                    <div><br/>امتیاز:<Rating defaultRating={1} maxRating={1}/>{review.rating}/10 <br/></div>
                                    </Grid>
                                    </Comment.Metadata>
                                    <Grid textAlign = "right">
                                    <Comment.Text><br/>{review.description}</Comment.Text>
                                    </Grid>
                                    </Comment.Content>
                            </Comment>
                            <Divider section/>
                            <br/>
                            </div>
                        )
                        
                        
                        )
                    }
                        {c && <div>
                            <Comment>
                                    <Comment.Content>
                                        <Comment.Author as='a'> <Grid textAlign="right"><b>{c.user.username}</b> </Grid></Comment.Author>
                                        <Comment.Metadata>
                                        <Grid textAlign="right">
                                        
                                        <div><br/>امتیاز:<Rating defaultRating={1} maxRating={1}/>{c.rating}/10 <br/></div>
                                        </Grid>
                                        </Comment.Metadata>
                                        <Grid textAlign = "right">
                                        <Comment.Text><br/>{c.description}</Comment.Text>
                                        </Grid>
                                        </Comment.Content>
                                </Comment>
                            { this.state.counter < this.props.reviews.length && <Grid centered>
                                <Button basic onClick={this.on_show_more_click} color="teal"> مشاهده‌ی نظرات بیشتر</Button>
                                </Grid>

                            }
                                

                            }


                        </div>}
                        </Grid.Column>
                    </Grid>        
                </Grid.Column>
            </Grid>
            )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        business : state.business_page_reducer.business ,
        services : state.business_page_reducer.services,
        reviews : state.review_reducer.reviews,
        active_panel:state.active_panel_reducer.active_panel
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        get_business_info : (business_id) => dispatch(business_page_actions.get_business_info(business_id)),
        change_panel:(panel_name) => dispatch(change_panel(panel_name)),
        get_service_page_info : (service_id,date) => dispatch(service_page_actions.get_services_page_info(service_id,date)),
        get_review:(business_id) => dispatch(review_actions.get_review(business_id)),
        push_to_router:(page) => dispatch(push_to_router(page))

    }
}
export default connect(mapStateToProps , mapDispatchToProps)(Business_page);