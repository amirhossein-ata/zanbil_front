import review_api from '../api/review_api';
export const review_action_types = {
  ADD_REVIEW_SUCCESS:"ADD_REVIEW_SUCCESS",
  GET_REVIEW_SUCCESS:"GET_REVIEW_SUCCESS"  
};

export const get_review_success =(reviews) => {
    console.log("the return is",reviews)
    return {
        type:'FU2',
        reviews:reviews
    };
};

export const add_review_success=(review_id) => {
    return {
        type:review_action_types.ADD_REVIEW_SUCCESS,
        review_id:review_id
    };
}

export const get_review = (business_id) => {
    console.log("calleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed it" , business_id)
    return function(dispatch){
        return (review_api.get_review(business_id))
                                    .then((response) => {
                                        if(response){
                                            console.log('response from get_review',response)
                                            dispatch(get_review_success(response));
                                        }
                                        
                                    })
    }
}
export const add_review = (description, rating,service_id) =>{
    return function(dispatch){
        return (review_api.add_review(description, rating,service_id))
                                .then((response) => {
                                    if(response){
                                        console.log('response from add_review',response)
                                        dispatch(add_review_success(response));
                                    }
                                    
                                })
}
}
