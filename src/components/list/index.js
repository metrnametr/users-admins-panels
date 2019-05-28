import React from 'react'
import { connect } from 'react-redux'
import { toggleSettingAction } from '../../actions'
import ListHeaderAddDelete from '../list-header-add-delete'
import ListHeaderSearchFilter from '../list-header-search-filter'
import ListBody from '../list-body'
import './style.scss'

const list = ({ toggleSettingAction }) => {
    return(
        <div className='container-fluid'>
            <div className='row'>
                <div className='container header-table'>
                    <div className='row'>
                        <div className='col-lg-12 header-list  header-color'>
                            <ListHeaderAddDelete/>
                            <ListHeaderSearchFilter/>
                        </div>
                        <div className='col-lg-12 body-list'>
                            <ListBody/>
                        </div>
                    </div>
                </div>
                <div className='icon-setting col-xl-1 col-lg-1'>
                    <i
                    onClick={() => toggleSettingAction(true)}
                    className="fa fa-sliders fa-2x" aria-hidden="true"></i>
                </div>
                
                
            </div>
            <div className='row'>
                
            </div>
        </div>
    )
}

const mapDispatchToProps = ({
    toggleSettingAction
})
export default connect(null, mapDispatchToProps)(list);