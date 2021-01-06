export const increment = () =>{
    return {
        type:'INCREMENT'

    }
}

export const decrement = () =>{
    return {
        type: 'DECREMENT'
    }
}
export const removeMi = () =>{
    return {
        type: 'REMOVE_MI'
    }
}
export const addMi = () =>{
    return {
        type: 'ADD_MI'
    }
}
export const add = () =>{
    return {
        type: 'ADD'
    }
}
export const ADD_ITEM = (data) =>{
    return {
        type: 'ADD_ITEM',
        payload: data
    }
}
export const ADD_ZOOM = (data) =>{
    return {
        type: 'ADD_ZOOM',
        payload: data
    }
}
export const ADD_FILTER = (data) =>{
    return {
        type: 'ADD_FILTER',
        payload: data
    }
}
export const removeFilter = (data) =>{
    return {
        type: 'REMOVE_FILTER',
        payload: data
    }
}
export const anonymus = (data) =>{
    return {
        type: 'REMOVE_FILTER',
        payload: data
    }
}
export const addSearch = (data) =>{
    return {
        type: 'ADD_SEARCH',
        payload: data
    }
}
export const addRange = (data) =>{
    return {
        type: 'RANGE',
        payload: data
    }
}