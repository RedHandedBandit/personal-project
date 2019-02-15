const initialState = {
        username_id: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        cart: []
}

const ADD_CART = 'ADD_CART'
const GANG_MEMBER = 'GANG_MEMBER';

export function gangMember(gangObj){
    return {
        type: GANG_MEMBER,
        payload: gangObj
    }
}

export function addCart(item){
    return {
        type: ADD_CART,
        payload: item
    }
}

export default function reducer (state = initialState, action){
    const {type, payload} = action 
    switch(type){
        case GANG_MEMBER:
        return {...state, payload}
        // const {username_id: id, first_name: first, last_name: last} = payload;
        // return {...state, id, first, last}
        case ADD_CART: 
        const cartState = {...state}
        cartState.cart.push(payload)
        return cartState
    default:
        console.log('default')
        return state;
    }
}

