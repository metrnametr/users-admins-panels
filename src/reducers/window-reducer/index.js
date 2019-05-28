const toggleState = false;

const toggleInputReducer = (state = toggleState, { type, payload}) => {
    switch(type){
        case 'TOGGLE_INPUT': return payload;
        default: return state;
    }
}

const editState = { edit: false, item: {} };

const editInputReducer = (state = editState, { type, edit, payload}) => {
    switch(type){
        case 'EDIT_INPUT': return { edit, item: payload };
        case 'ADD_INPUT': return { edit, item: payload }
        default: return state;
    }
}

const toggleSettingState = {
    isOpen: false,
    tableName: '',
    fontStyle: '',
    themeStyle: ''
};
const toggleSettingReducer = (state = toggleSettingState, { type, payload}) => {
    switch(type){
        case 'FETCH_SETTING_START': return {}
        case 'FETCH_SETTING_FAILUR': return {}
        case 'FETCH_SETTING_SUCCESS': {
            console.log(payload)
            return {...state, ...payload}
        }
        case 'TOGGLE_SETTING': return {...state, isOpen: payload};
        case 'TOGGLE_NAME_TABLE': return {...state, tableName: payload}
        case 'TOGGLE_FONT': return {...state, fontStyle: payload}
        case 'TOGGLE_THEME': return {...state, themeStyle: payload}
        default: return state;
    }
}


export{
    toggleInputReducer,
    editInputReducer,

    toggleSettingReducer
}