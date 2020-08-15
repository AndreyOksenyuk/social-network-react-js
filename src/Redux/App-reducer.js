const SET_ERROR = 'app-reducer/SET_ERROR'
const SET_COLOR_THEME_APP = 'app-reducer/SET_COLOR_THEME_APP'

let initialState = {
   Error: null,
   textError: null,
   ColorThemeApp: '#006d75',
}

const APP_REDUCER = (state = initialState, action) => {
   switch (action.type) {
      case SET_ERROR:
         return{
            Error: action.error,
            textError: action.text,
         }
      case SET_COLOR_THEME_APP:
         return{
            ...state,
            ColorThemeApp: action.color,
         }
      default:
         return state
   }
}

const setErrorAC = (error, text) => ({
   type: SET_ERROR,
   error, text
})

export const setColorThemeApp = (color) => ({
   type: SET_COLOR_THEME_APP,
   color
})

export const setErroTC = (error, text) => async (dispatch) => {
   await  dispatch(setErrorAC(error, text))
   setTimeout(() => {
      dispatch(setErrorAC(null, null))
   }, 4000);
}



export default APP_REDUCER;