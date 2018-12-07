import dashboard_api from '../api/dashboard_api'

export const dashboard_action_types = {
    GET_REPORST_SUCCESS :'GET_REPORTS_SUCCESS'
}

export const get_reports_success = (
    {
        allReservations,
        customers,
        busySanses,
        increaseReservePercentageForDay,
        increaseReservePercentageForMonth,
        increaseReservePercentageForWeek,
        numberOfReservesInCurrentMonth,
        numberOfReservesInCurrentWeek,
        numberOfReservesInDay,
        popularServices,
        upcomingReservations
    })=>{
    console.log({
        allReservations,
        customers,
        busySanses,
        increaseReservePercentageForDay,
        increaseReservePercentageForMonth,
        increaseReservePercentageForWeek,
        numberOfReservesInCurrentMonth,
        numberOfReservesInCurrentWeek,
        numberOfReservesInDay,
        popularServices,
        upcomingReservations
    })
    return{
        type:dashboard_action_types.GET_REPORST_SUCCESS,
        allReservations:allReservations,
        customers:customers,
        busySanses:busySanses,
        increaseReservePercentageForDay:increaseReservePercentageForDay,
        increaseReservePercentageForMonth:increaseReservePercentageForMonth,
        increaseReservePercentageForWeek:increaseReservePercentageForWeek,
        numberOfReservesInCurrentMonth:numberOfReservesInCurrentMonth,
        numberOfReservesInCurrentWeek:numberOfReservesInCurrentWeek,
        numberOfReservesInDay:numberOfReservesInDay,
        popularServices:popularServices,
        upcomingReservations:upcomingReservations
        
    }
}

export const get_reports = (business_id) => {
    return function(dispatch){
        return dashboard_api.get_reports(business_id)
                            .then((response)=>{
                                if(response){
                                    console.log('response from dashboard api : ', response)
                                    dispatch(get_reports_success(response))
                                }
                            })
    }
}