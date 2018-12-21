import React from 'react'
import {connect} from 'react-redux'
import * as review_actions from '../../../core/review/review_actions'
import {Grid,Comment,Divider,Rating, Message,Button, Segment} from 'semantic-ui-react'

class Comments extends React.Component{

    state={
        endIndex : 6
    }

    async componentDidMount(){
        await this.props.get_review(this.props.business.id)
    }

    on_more_reviews_click = () =>{
        let endIndex = this.state.endIndex + 6
        this.setState(()=>({endIndex:endIndex}))
    }

    render(){
        let reviews = this.props.reviews && this.props.reviews.slice(0,this.state.endIndex)

        return(
            <div>
            
                <Grid centered>
                    <Grid.Column computer={15} textAlign="right">
                    {this.props.reviews.length === 0  && (
                        <div style={{width:'50%',margin:'3% auto 3% auto'}}>
                            <Message info>
                            
                                هیچ نظری ثبت نشده است!
                        
                            </Message>
                            
                            
                        </div>
                    )}
                    {reviews.map((review) => (
                        <Grid centered>
                            <Grid.Column computer={10} tablet={8} mobile={8}>
                                <Segment>
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
                                    
                                </Segment>
                            </Grid.Column>
                        
                        <br/>
                        </Grid>
                    ))}
                    </Grid.Column>
                </Grid>
                {(this.props.reviews && this.props.reviews.length > 6) && (
                    <div>
                        <Divider hidden section/>
                        <Grid centered >
                                <Button 
                                    disabled={this.state.endIndex >= this.props.reviews.length} 
                                    color="instagram" 
                                    onClick={this.on_more_reviews_click}
                                >
                                    بیشتر
                                </Button>
                        </Grid>
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        business : state.business_page_reducer.business ,
        reviews : state.review_reducer.reviews,
     }
}

const mapDispatchToProps = (dispatch) => {
    return{
        get_review:(business_id) => dispatch(review_actions.get_review(business_id))

    }
}
export default connect(mapStateToProps , mapDispatchToProps)(Comments);