
export const review_action_types = {
  ADD_REVIEW_SUCCESS:"ADD_REVIEW_SUCCESS",
  GET_REVIEW_SUCCESS:"GET_REVIEW_SUCCESS"  
};

export const get_review_success =({review}) => {
    return {
        type:review_action_types.GET_REVIEW_SUCCESS,
        review:{
            point:review.point,
            description:review.description,
            service_id:review.service_id
        }
    };
};

export const add_review_success=(review_id) => {
    return {
        type:review_action_types.ADD_REVIEW_SUCCESS,
        review_id:review_id
    };
}