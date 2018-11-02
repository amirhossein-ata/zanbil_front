export const active_panel_action_types = {
    CHANGE_ACTIVE_PANEL_SUCCESS:'CHANGE_ACTIVE_PANEL_SUCCESS'
}

export const change_panel =  (panel) => ({
    type:active_panel_action_types.CHANGE_ACTIVE_PANEL_SUCCESS,
    panel:panel
})