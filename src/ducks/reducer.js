const initialState = {
    username_id: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    incrementIfCartUpdated: 1,
    cart: []
}

const QUANTITY = 'QUANTITY'
const ADD_CART = 'ADD_CART';
const GANG_MEMBER = 'GANG_MEMBER';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY'

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

export function quantity(item){
    return {
        type: QUANTITY,
        payload: item
    }
}

export function updateQuantity(action, product_id){
   return{
    type: UPDATE_QUANTITY,
    payload:{ action, product_id }
   } 
    
}

export default function reducer (state = initialState, action){
    const {type, payload} = action 
    switch(type){
        case GANG_MEMBER:
            console.log(payload)
            const {username_id, first_name, last_name, email} = payload;
            return {...state, username_id, first_name, last_name, email };
            // return {...state, id, first, last}
        case ADD_CART: 
            const cartState = {...state}
            cartState.cart.push(payload)
            return cartState
        case UPDATE_QUANTITY:
            let newState = {...state}
            const {product_id, action} = payload
            const itemToUpdate = newState.cart[newState.cart.findIndex((item) => product_id === item.product_id)]
            if(action === 'up'){
                itemToUpdate.quantity++
            } else {
                itemToUpdate.quantity--
            }
            newState.incrementIfCartUpdated ++
            return newState;
            
        // case QUANTITY: 
            // const newQuantity = {...state}
            // const {cart} = payload;
            // const itemCopy = {...payload};
            // itemCopy.quantity++;
            // return {...state, }
        default:
            console.log('default')
            return state;
    }
}

