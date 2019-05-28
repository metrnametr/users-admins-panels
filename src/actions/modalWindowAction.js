const toggleInputAction =  (payload) => ({
    type: 'TOGGLE_INPUT',
    payload
})

const toggleSettingAction = (payload) => ({
    type: 'TOGGLE_SETTING',
    payload
})

const editInputAction =  (edit, payload) => ({
    type: 'EDIT_INPUT',
    edit,
    payload
})

const addInputAction =  (edit, payload) => ({
    type: 'ADD_INPUT',
    edit,
    payload
})


const toggleTableNameAction = (payload) => ({
    type: 'TOGGLE_NAME_TABLE',
    payload
})
const toggleFontAction = (payload) => ({
    type: 'TOGGLE_FONT',
    payload
})

const toggleThemeAction = (payload) => ({
    type: 'TOGGLE_THEME',
    payload
})

export {
    toggleInputAction,
    editInputAction,
    toggleSettingAction,
    addInputAction,

    toggleTableNameAction,
    toggleFontAction,
    toggleThemeAction
}