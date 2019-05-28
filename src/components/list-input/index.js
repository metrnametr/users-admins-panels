import React, { Component } from 'react'
import { addPeopleAction, editPeopleAction, toggleInputAction } from '../../actions'
import { connect } from 'react-redux'
import './style.scss'

class ListInput extends Component{
    state = {
        image: '',
        valueFirstName: '',
        valueLastName: '',
        selected: '',
        country: [
            { name: 'UK', id: Math.random()},
            { name: 'Belarus', id: Math.random()},
            { name: 'russia', id: Math.random()},
            { name: 'Ukrain', id: Math.random()},
            { name: 'USA', id: Math.random()},
            { name: 'Poland', id: Math.random()}
        ]
    }
    toggleName = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
    clearInput = () => {
        this.setState({ valueFirstName: '', valueLastName:'', selected: ''})
    }
    componentWillUpdate(prevProps){
        const { people } = this.props;
        const prevPeople = prevProps.people
        if(people !== prevPeople){
            this.setState({
                image: 'people.png',
                valueFirstName: prevPeople.firstName,
                valueLastName: prevPeople.lastName,
                selected: prevPeople.country,
            })
        }
    }

   
    render(){
        const { isOpen, isEdit, people, addPeopleAction, editPeopleAction, toggleInputAction } = this.props;
        const { country, valueFirstName, valueLastName, selected } = this.state;
        const styleModal = {
            display: (isOpen) ? 'block' : 'none'
        }
        const newPeople =  { ...people, 
            image: 'people.png',
            firstName: valueFirstName, 
            lastName: valueLastName, 
            country: selected,
            id: Math.random()  }
        
        return(
           <div style={styleModal} className='modal-window'>
               <div className='modal-header header-color'>
                   <div className='title'>
                        { (isEdit) ? 'Edit' : 'Input'}
                   </div>
                   <div 
                   onClick={() => toggleInputAction(false)}
                   className='close'><i className="fa fa-times" aria-hidden="true"></i></div>
               </div>
               <div className='form-input'>
                    <div className='form-group'>
                        <label>First name</label>
                        <input 
                            value={valueFirstName}
                            name='valueFirstName'
                            onChange={this.toggleName}
                            className='form-control' 
                            placeholder="Enter first-name"/>
                    </div>
                    <div className='form-group'>
                        <label>Last name</label>
                        <input 
                            value={ valueLastName}
                            name='valueLastName'
                            onChange={this.toggleName}
                            className='form-control' 
                            placeholder="Enter last-name"/>
                    </div>
                    <div className="form-group">
                        <label>Choose Country</label>
                        <select 
                            className="form-control"
                            name='selected'
                            onChange={this.toggleName}
                            value={selected}>
                        { country.map( item => 
                            <option 
                                key={item.id} 
                                value={item.name}>{item.name}</option>)}
                        </select>
                    </div>
                   <div className='form-group text-rigth'>
                        <button
                        onClick={() => {
                            if(isEdit){
                                if(people.firstName.length > 1)
                                {
                                    editPeopleAction(people, newPeople)
                                    toggleInputAction(false)
                                }
                            } else {
                                if(newPeople.firstName.length > 1)
                                addPeopleAction(newPeople) 
                            }
                            this.clearInput()
                            }    
                        }
                        className='btn btn-add'>{(isEdit) ? 'edit' : 'add'}</button>
                   </div>
               </div>
           </div>
        )
    }
   
}

const mapStateToProps = (state) => ({
    isOpen: state.toggleInputReducer,
    isEdit: state.editInputReducer.edit,
    people: state.editInputReducer.item
})

const mapDispatchToProps = ({
    addPeopleAction,
    toggleInputAction,
    editPeopleAction
})
export default connect(mapStateToProps, mapDispatchToProps)(ListInput);