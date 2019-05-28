import React from 'react'
import { connect } from 'react-redux'
import { searchPeopleNameAction, sortPeopleAction } from '../../actions'
import './style.scss'
const listHeaderSearchFilter = ({ filterValue, searchPeopleNameAction, sortPeopleAction}) => {
    const inputSearchName = (e) => {
        searchPeopleNameAction(e.target.value)
    }
    const inputSortCountry = (e) => {
        sortPeopleAction(e.target.value)
    }
    return(
        <div className='header-list-right'>
            <div className='filter-container'>
                <select
                onChange={inputSortCountry}
                className="form-control">
                    <option value=''>Default</option>
                    <option value='country'>Sort by Country</option>
                </select>
            </div>
            <div className='search-container'>
                <input
                value={filterValue}
                onChange={inputSearchName}
                type='text' className='form-control' placeholder='search By Name'/>
            </div>
            <div>
                <button className='btn btn-loop'>
                    <img src='images/loop.png' alt='loop'/>
                </button>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    filterValue: state.searchSortListReducer.searchName
})
const mapDispatchToProps = ({
    searchPeopleNameAction,
    sortPeopleAction
})
export default connect(mapStateToProps, mapDispatchToProps)(listHeaderSearchFilter) ;