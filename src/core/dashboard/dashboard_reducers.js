import {dashboard_action_types} from './dashboard_actions'

const initialState={
    allReservations:[],
    customers:[],
    busySanses:[],
    increaseReservePercentageForDay:0,
    increaseReservePercentageForMonth:0,
    increaseReservePercentageForWeek:0,
    numberOfReservesInCurrentMonth:0,
    numberOfReservesInCurrentWeek:0,
    numberOfReservesInDay:0,
    popularServices:[],
    upcomingReservations:[]

}

export const dashboard_reducer = (state=initialState,action) => {
    console.log(action)
    switch(action.type){
        case dashboard_action_types.GET_REPORST_SUCCESS:
            return{
                ...state,
                    allReservations:action.allReservations,
                    customers:action.customers,
                    busySanses:action.busySanses,
                    increaseReservePercentageForDay:action.increaseReservePercentageForDay,
                    increaseReservePercentageForMonth:action.increaseReservePercentageForMonth,
                    increaseReservePercentageForWeek:action.increaseReservePercentageForWeek,
                    numberOfReservesInCurrentMonth:action.numberOfReservesInCurrentMonth,
                    numberOfReservesInCurrentWeek:action.numberOfReservesInCurrentWeek,
                    numberOfReservesInDay:action.numberOfReservesInDay,
                    popularServices:action.popularServices,
                    upcomingReservations:action.upcomingReservations
                
            }
        default:
            return state
    }
}