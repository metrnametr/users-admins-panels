const addPeopleAction = (payload) => ({
    type: 'ADD_PEOPLE',
    payload
})

const deletePeopleAction = (payload) => ({
    type: 'DELETE_PEOPLE',
    payload
})

const editPeopleAction = (prevPeople, newPeople) => ({
    type: 'EDIT_PEOPLE',
    prevPeople,
    newPeople
})

const duplicatePeopleAction = (payload) => ({
    type: 'DUPLICATE_PEOPLE',
    payload
})
const checkedPeopleAction = (checked, payload) => {
    if(checked){
        return {
            type: 'CHECKED_PEOPLE',
            payload
        }
    } else {
        return {
            type: 'UNCHECKED_PEOPLE',
            payload
        }
    }
}

const deleteCheckedPeopleAction = (payload) => ({
    type: 'DELETE_CHECKED_PEOPLE',
    payload
})

const deleteManyPeopleAction = (payload) => ({
    type: 'DELETE_MANY_PEOPLE',
    payload
})
const searchPeopleNameAction = (payload) => ({
    type: 'SEARCH_BY_NAME',
    payload
})

const sortPeopleAction = (payload) => ({
    type: 'SORT_PEOPLE',
    payload
}) 


export{
    addPeopleAction,
    deletePeopleAction,
    editPeopleAction,
    duplicatePeopleAction,
    deleteManyPeopleAction,

    checkedPeopleAction,
    deleteCheckedPeopleAction,
    

    searchPeopleNameAction,
    sortPeopleAction
}