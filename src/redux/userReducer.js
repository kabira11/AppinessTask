import { CHECK_USER } from './userActionType'

const initialState = {
    user :
    { 
        username:"hruday@gmail.com",
        password :'hruday123' 
    },
    loggedIn: false
}


const userReducer = (state = initialState , action) => {
    switch(action.type) {
        case CHECK_USER: return {
            ...state,
            loggedIn: true
        }

        default: return state
    }
}

export default userReducer