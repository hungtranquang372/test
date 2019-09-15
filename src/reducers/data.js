import * as types from '../constant/ActionType';
var initialState = {
    username: '',
    password: '',
    isAuthenticate: false
}
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN: {
          if(!action.data){
              return action.data
          } 
          else return state 
        }
        default: return state
    }
}
export default myReducer;