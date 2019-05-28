import React from 'react'
import { connect } from 'react-redux'
import { toggleInputAction, addInputAction, deleteManyPeopleAction, deleteCheckedPeopleAction} from '../../actions'
import './style.scss'
const listHeaderAddDelete = ({ 
    tableName,

    deleteItems, 
    length, 
    toggleInputAction, 
    addInputAction, 
    deleteManyPeopleAction,
    deleteCheckedPeopleAction }) => {
    const style = {
        display: (length > 1) ? 'inline' : 'none'
    }
    console.log(deleteItems)
    return(
        <div className='header-list-left'>
            <div className='table-name'> {(tableName) ? tableName : 'users'} </div>
            <div className='btn-container'>
                <button
                onClick={() => 
                    {
                    addInputAction(false, {firstName: '', lastName: '', country: ''})
                    toggleInputAction(true)
                    }}
                className='btn btn-add' data-toggle="modal" data-target="#myModal"> add user </button>
                <button
                onClick={() => {
                    deleteManyPeopleAction(deleteItems)
                    deleteCheckedPeopleAction(deleteItems)
                }}
                style={style}
                className='btn btn-delete'> delete items </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    length: state.deleteManyListReducer.length,
    deleteItems: state.deleteManyListReducer,
    tableName: state.toggleSettingReducer.tableName
})

const mapDispatchToProps = ({
    toggleInputAction,
    addInputAction,

    deleteManyPeopleAction,
    deleteCheckedPeopleAction
})


export default connect(mapStateToProps, mapDispatchToProps)(listHeaderAddDelete);