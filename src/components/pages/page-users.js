import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleInputAction } from '../../actions'
import PageHeader from '../page-header'
import List from '../list'
import ListInput from '../list-input'
import PageSetting from '../page-setting'
import './page-users.scss'
class PageUsers extends Component{


    render(){
        const { isOpenModalInput, isOpenModalSetting, classFonts, classTheme } = this.props
        const styleOverlay = {
            display: (isOpenModalInput || isOpenModalSetting) ? 'block' : 'none'
        }
        const classThemes = `main ${classFonts} ${classTheme}`
        return(
            <div className={classThemes}>
              <PageHeader/>
              <List/>
              <ListInput/>
              <PageSetting/>
              <div style={styleOverlay} className='overlay'></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isOpenModalInput: state.toggleInputReducer,
    isOpenModalSetting: state.toggleSettingReducer.isOpen,
    classFonts: state.toggleSettingReducer.fontStyle,
    classTheme: state.toggleSettingReducer.themeStyle
})

const mapDispatchToProps = ({
    toggleInputAction
})
export default connect(mapStateToProps, mapDispatchToProps)(PageUsers);