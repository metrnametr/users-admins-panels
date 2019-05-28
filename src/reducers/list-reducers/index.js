const addPeople = ( people, item) => {
    const state = [...people, item]
    return state
}

const deletePeople = ( people, item ) => {
    const idx = people.findIndex( i => i === item)
    return [
        ...people.slice(0, idx),
        ...people.slice(idx + 1)
    ]

}

const editPeople = (people, prevItem, newItem) => {
    const idx = people.findIndex( i => i === prevItem)
    const editPeople = { ...people[idx], ...newItem}
    return [
        ...people.slice(0, idx),
        editPeople,
        ...people.slice(idx + 1)
    ]
}

const duplicatePeople = (people, item) => {
    const idx = people.findIndex( i => i === item)
    const duplicatePeople = {...people[idx], id: Math.random()}
    return [
        ...people.slice(0, idx + 1),
        duplicatePeople,
        ...people.slice(idx + 1)
    ]
} 

const deleteManyPeople = (people, payload) =>{
    return people.filter(itemOne => payload.findIndex( itemTwo => itemOne.id === itemTwo.id) === -1)

}

const peopleState = [ 
    { image: 'people.png', firstName: 'Alex', lastName: 'Dostoevski', country: 'UK', id: 1}
]

const listReducers = (state = peopleState, { type, payload, prevPeople, newPeople }) => {
    switch(type){
        case 'FETCH_DATA_START': return []
        case 'FETCH_DATA_SUCCESS': return [...state, ...payload]
        case 'FETCH_DATA_FAILURE': {
            return []
        }
        case 'ADD_PEOPLE': return addPeople(state, payload)
        case 'DELETE_PEOPLE': return deletePeople(state, payload)
        case 'EDIT_PEOPLE': return editPeople(state, prevPeople, newPeople)
        case 'DUPLICATE_PEOPLE': return duplicatePeople(state, payload)
        case 'DELETE_MANY_PEOPLE': return deleteManyPeople(state, payload)
        default: return state;
    }
}

const searchSortListState = { searchName: '', sortName: ''};
const searchSortListReducer = (state = searchSortListState, { type, payload }) => {
    switch(type){
        case 'SEARCH_BY_NAME': return { ...state, searchName: payload};
        case 'SORT_PEOPLE': return { ...state, sortName: payload}
        default: return state;
    }
}



const checkedPeople = (people, item) => {
    const state = [...people, item]
    return state
}

const uncheckedPeople = (people, item) => {
    const idx = people.findIndex( i => i === item)
    return [
        ...people.filter(i => i.id !== item.id)
    ]

}

const deleteCheckedPeople = (people, payload) => {
    return people.filter(itemOne => payload.findIndex( itemTwo => itemOne.id === itemTwo.id) === -1)
} 

const manyPeopleState = []
const deleteManyListReducer = (state = manyPeopleState, { type, payload}) => {
    switch(type){
        case 'CHECKED_PEOPLE': return checkedPeople(state, payload)
        case 'UNCHECKED_PEOPLE': return uncheckedPeople(state, payload)
        case 'DELETE_CHECKED_PEOPLE': return deleteCheckedPeople(state, payload)
        default: return state;
    }
}
export{
    listReducers,
    searchSortListReducer,
    deleteManyListReducer
}