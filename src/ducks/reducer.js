const initialState = {
    user: {
        username_id: '',
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    }
}

const GANG_MEMBER = 'GANG_MEMBER';

export function gangMember(gangObj){
    return {
        type: GANG_MEMBER,
        payload: gangObj
    }
}

export default function reducer (state = initialState, action){
    const {type, payload} = action 
    switch(type){
        case GANG_MEMBER:
        const newState = {...state}
        newState.user = payload
        return newState
        // const {username_id: id, first_name: first, last_name: last} = payload;
        // return {...state, id, first, last}
    default:
        return state;
    }
}

