import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import compose from '../../utils/compose'
import withLocalApi from '../hoc/withLocalApi'
import { toggleSettingAction, 
    toggleTableNameAction, 
    toggleFontAction, 
    toggleThemeAction,
    fetchSetting } from '../../actions'
import './style.scss'

class PageSetting extends Component{
 
    toggleFont = (e) => {
        this.props.toggleFontAction(e.target.value)
    }

    toggleTheme = (e) => {
        this.props.toggleThemeAction(e.target.value)
    }

    toggleTableName = (e) => {
        this.props.toggleTableNameAction(e.target.value)
    }

    componentDidMount(){
        this.props.fetchSetting()
    }
    componentDidUpdate(prevProps){
        if(this.props.setting !== prevProps.setting){
            console.log(prevProps.setting)
            console.log(this.props.setting)
        if(prevProps.setting.tableName || prevProps.setting.tableName || prevProps.setting.themeStyle){
            console.log('qweqwe')
            this.props.localApi.setStorage('setting', (prevProps.setting) ? {...prevProps.setting, isOpen: false} : null)

        }
        }
    }
    render(){
        const { isOpen, toggleSettingAction, setting} = this.props
        const styleModal = {
            display: (isOpen) ? 'block' : 'none'
        }

        return(
           <div style={styleModal} className='modal-window'>
               <div className='modal-header header-color'>
                   <div className='title'>
                        Setting
                   </div>
                   <div 
                   className='close'><i 
                   onClick={() => toggleSettingAction(false)}
                   className="fa fa-times" aria-hidden="true"></i></div>
               </div>
               <div className='form-input'>
                    <div className='form-group'>
                        <label>Title of Table</label>
                        <input 
                            onChange={this.toggleTableName}
                            placeholder={setting.tableName}
                            className='form-control' 
                            />
                    </div>
                    <div className='form-group'>
                        <label> Select font </label>
                        <select 
                            onChange={this.toggleFont}
                            value={setting.fontStyle}
                            className="form-control" name='selectedFont'>
                            <option value='monserrat-fonts'> monserrat </option>
                            <option value='lato-fonts'> lato </option>
                            <option value='chenla-fonts'> Chenla </option>
                        </select>
                    </div>
                    <div className="form-group d-flex">
                        <label>Color theme</label>
                        <select 
                        onChange={this.toggleTheme}
                        value={setting.themeStyle}
                        className="form-control form-color ml-2" name='selectedColor'>
                            <option value='your-theme' className='blackTheme'></option>
                            <option value='my-theme' className='blueTheme'></option>
                        </select>
                    </div>
                   <div className='form-group text-rigth'>
                       </div>
               </div>
           </div>
        )
    }
   
}

const mapStateToProps = (state) => ({
    isOpen: state.toggleSettingReducer.isOpen,
    setting: state.toggleSettingReducer
})

const mapDispatchToProps = (dispatch, { localApi } ) => {
    return bindActionCreators({
        toggleSettingAction,
        toggleTableNameAction,
    
        toggleFontAction,
        toggleThemeAction,
        fetchSetting: fetchSetting(localApi)
    }, dispatch)
}
export default compose( withLocalApi(),
    connect(mapStateToProps, mapDispatchToProps)
    )(PageSetting);