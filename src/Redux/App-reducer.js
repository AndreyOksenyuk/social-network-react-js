const SET_ERROR = 'SET_ERROR'

let initialState = {
   Error: null,
   textError: null,
}

const APP_REDUCER = (state = initialState, action) => {
   switch (action.type) {
      case SET_ERROR:
         return{
            Error: action.error,
            textError: action.text,
         }
      default:
         return state
   }
}

export const setErrorAC = (error, text) => ({
   type: SET_ERROR,
   error, text
})



export default APP_REDUCER;