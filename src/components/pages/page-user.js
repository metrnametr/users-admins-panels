import React, { Component } from 'react'
import { connect } from 'react-redux'
import './page-user.scss'
class PageUser extends Component {

    state = {
        items: [],
        idx: 0
    }
    
    componentWillMount(){
        const { items, idx } = this.props
        this.setState({ items, idx })
    }

    getItems = () => {
        const { items, idx } = this.state
        return items.find( item => item.id === Number(idx))
    }
    render(){
       const people  = this.getItems()
        return(
            <div className='page-user'>
                <div className='page-people-images'>
                    <img src={'./images/' + people.image} alt='people'/>
                </div>
                <div className='page-people-names'>
                    <span>{people.firstName}</span>
                    <span>{people.lastName}</span>
                </div>
                <div className='page-people-country'>
                    <span>{people.country}</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.listReducers
})
export default connect(mapStateToProps)(PageUser);