import { combineReducers } from 'redux'
import { listReducers, searchSortListReducer, deleteManyListReducer } from './list-reducers'
import { toggleInputReducer, editInputReducer, toggleSettingReducer } from './window-reducer'
export default combineReducers({
    listReducers,
    searchSortListReducer,
    deleteManyListReducer,

    toggleInputReducer, 
    editInputReducer,
    toggleSettingReducer
})