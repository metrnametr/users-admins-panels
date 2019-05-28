import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './style.scss'
const pageHeader = ({tableName}) => {
    return(
        <div className='container-fluid'>
            <div className='row header'>
                <div className='logo'>
                    <img src='./images/logo.png' alt='logo'></img>
                </div>
                <div className='container nav-menu header-color'>
                    <div className='row'>
                        <div className='nav-menu-list'>
                            <Link to='/' className='nav-item'>
                            {(tableName) ? tableName : 'users'}
                            </Link>
                            <Link to='/page-admins' className='nav-item'>
                                Admins
                            </Link>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    tableName: state.toggleSettingReducer.tableName
})
export default connect(mapStateToProps, null)(pageHeader);