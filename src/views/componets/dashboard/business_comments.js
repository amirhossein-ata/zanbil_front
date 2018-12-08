import React from 'react'
import {connect} from 'react-redux'
import * as review_actions from '../../../core/review/review_actions'
import {Grid,Comment,Divider,Rating, Message} from 'semantic-ui-react'

class Comments extends React.Component{

    async componentDidMount(){
        await this.props.get_review(this.props.business.id)
    }

    render(){
        return(
            <Grid centered>
                <Grid.Column computer={15} textAlign="right">
                {this.props.reviews.length === 0  && (
                    <div style={{width:'50%',margin:'3% auto 3% auto'}}>
                        <Message info>
                        
                            هیچ نظری ثبت نشده است!
                    
                        </Message>
                        
                        
                    </div>
                )}
                {this.props.reviews && this.props.reviews.map((review) => (
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
                    <Divider />
                    <br/>
                    </div>
                ))}
                </Grid.Column>
            </Grid>
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