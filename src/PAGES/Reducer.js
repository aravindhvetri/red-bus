export const initialState = {
    edit : [],
    map:[],
    reporter:[]
}

export const stateReducer = (state, action) => {
    switch(action.type){
        case "TASK":
         return{
            ...state,
            edit: action.payload
         }
         case "MAP":
          return{
            ...state,
            map : action.payload
          }
            case "REPORTER":
                return{
                  ...state,
                  reporter: action.payload
                }
         default :{
            return state
         }
    }
}