import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import ListItem from '../list-item'
import { connect } from 'react-redux'
import compose from '../../utils/compose'
import  withLocalApi  from '../hoc/withLocalApi'
import { fetchList } from '../../actions'
import './style.scss'

class ListBody extends Component{

    componentDidMount(){
        this.props.fetchList()
    }

    componentWillUpdate(prevProps){
        if(this.props.items !== prevProps.items){
            this.props.localApi.setStorage('users', prevProps.items)
        }
    }
    filterList = () => {
        const { filterName, items, sortValue } = this.props;
        const regex = new RegExp("^[a-zA-Z0-9а-яА-Я]+$");
        const filterNoSpace = filterName.replace( /\s/g, '');
        
        const filter = filterNoSpace.match(regex);
        const regular = new RegExp(`${filter}`, 'ig')
        
        const filterItems = items.filter( item => {
            const filterName = item.firstName + item.lastName;
            return filterName.match(regular) !== null
        })
        if( sortValue && filterName ){
            const sortItems = [...filterItems];
            return sortItems.sort((a,b) => (a[sortValue] > b[sortValue]) ? 1 : ((b[sortValue] > a[sortValue]) ? -1 : 0));
        }
        else if( sortValue && !filterName ){
            const sortItems = [...items];
            return sortItems.sort((a,b) => (a[sortValue] > b[sortValue]) ? 1 : ((b[sortValue] > a[sortValue]) ? -1 : 0));
        }
        else if( !sortValue && filterName ){
            return filterItems
        }
        else if( !sortValue && !filterName ) return items
    }

    render(){
        if(this.filterList().length <= 0) return <div className='text-center'>Нет записей</div>
        return(
                <ul>
                    { this.filterList().map( people => <ListItem key={people.id} people={people}/>) }
                </ul>
        )
    }
}



const mapStateToProps = (state) => ({
    items: state.listReducers,
    filterName: state.searchSortListReducer.searchName,
    sortValue: state.searchSortListReducer.sortName
})

const mapDispatchToProps = (dispatch, { localApi }) =>{
    return bindActionCreators({
        fetchList: fetchList(localApi)
    }, dispatch)
   }
export default compose(withLocalApi(), connect(mapStateToProps, mapDispatchToProps)
)(ListBody);