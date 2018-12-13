export const router_panel_actions = {
    PUSH_TO_ROUTER : 'PUSH_TO_ROUTER',
    GO_BACK : 'GO_BACK',
    SELECT_PAGE:'SELECT_PAGE',
    NEW_ROUTE : 'NEW_ROUTE'
}

export const push_to_router = (page) => {
    return{
        type:router_panel_actions.PUSH_TO_ROUTER,
        page:page
    }
}

export const go_back = () => {
    return{
        type:router_panel_actions.GO_BACK
    }
}

export const select_page = (page) => {
    return{
        type:router_panel_actions.SELECT_PAGE,
        page:page
    }
}

export const new_route = (page) => {
    return{
        type:router_panel_actions.NEW_ROUTE,
        page:page
    }
}