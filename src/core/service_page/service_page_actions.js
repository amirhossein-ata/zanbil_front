import service_page_api from '../api/service_page_api'
export const service_page_action_types = {
    GET_SERVICE_PAGE_INFO_SUCCESS:'GET_SERVICE_PAGE_INFO_SUCCESS'
}

export const get_service_page_info_success = ({service,sanses,start_of_week_date}) => {
    console.log(service,sanses,start_of_week_date)
    return{
        type:service_page_action_types.GET_SERVICE_PAGE_INFO_SUCCESS,
        service:{
            id:service.id,
            business_id:service.business,
            name:service.name,
            fee:service.fee,
            rating:service.rating,
            timetable_id:service.timetable,
            pictures: service.pictures,
            is_protected: service.is_protected,
            cancellation_range: service.cancellation_range
        },
        start_of_week_date:start_of_week_date,
        sanses:sanses

    }
}

export const get_services_page_info = (service_id,date) => {
    return function(dispatch){
        return (service_page_api.get_service_page_info(service_id,date))
                                    .then((response) => {
                                        if(response){
                                            console.log('response from get_service_page',response)
                                            dispatch(get_service_page_info_success(response));
                                        }
                                        
                                    })
    }
}