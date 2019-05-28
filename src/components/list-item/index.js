import React, { Component } from 'react'
import { deletePeopleAction,
         editPeopleAction,
         duplicatePeopleAction,
         checkedPeopleAction,

         toggleInputAction,
         editInputAction } from '../../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './style.scss'

class ListItem extends Component{

  
    handleChange = (e) => {
        const { checkedPeopleAction } = this.props
        const checked = e.target.checked;
        const item = JSON.parse(e.target.name)
        return (() => checkedPeopleAction(checked, item))()
    }

    render(){
        const { 
            people, 
            deletePeopleAction, 
            duplicatePeopleAction,

            editInputAction,
            toggleInputAction } = this.props
            console.log(people.image)
        return(
            <li className='item-list'>
                <div className='information'>
                    <div className='check'>
                        <label className='container'>
                            <input
                            name={JSON.stringify(people)}
                            onChange={this.handleChange}
                            type="checkbox" className="checkbox" id="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className='people-min-img'>
                        <img src={'./images/' + people.image} alt='people'/>
                    </div>
                    <div className='people-name-country'>
                        <div className='people-names'>
                            <Link to={'/' + people.id} >
                                <span className='people-first-name'> { people.firstName } </span>
                                <span className='people-last-name'> { people.lastName } </span>
                            </Link>
                        </div>
                        <div className='people-with-country'>
                            <span className='people-country'> { people.country} </span>
                        </div>
                    </div>
                </div>
                <div className='btn-container-item'>
                    <button 
                    onClick={() => duplicatePeopleAction(people)}
                    className='btn btn-duplicate'> duplicate </button>
                    <button
                    onClick={ () => {
                        editInputAction(true, people)
                        toggleInputAction(true)
                    }}
                    className='btn btn-edit'> edit </button>
                    <button 
                    onClick={() => deletePeopleAction(people)}
                    className='btn btn-delete'> delete </button>
                </div>
            </li>
        )
    }
}
const mapDispatchToProps = ({
    deletePeopleAction,
    editPeopleAction,
    duplicatePeopleAction,
    checkedPeopleAction,

    editInputAction,
    toggleInputAction
})
export default connect(null, mapDispatchToProps)(ListItem);