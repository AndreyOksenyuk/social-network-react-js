import { musicAPI } from "../api/apiMusic"

const SET_MUSIC = 'music-reducer/SET_MUSIC'
const SET_VALUE_SEARCH = 'music-reducer/SET_VALUE_SEARCH'
const ADD_MORE_MUSIC = 'music-reducer/ADD_MORE_MUSIC'
const SET_ISFEATCHING = 'music-reducer/SET_ISFEATCHING'
const SET_MESSAGE_NO_FOUND = 'music-reducer/SET_MESSAGE_NO_FOUND'

let initialState = {
   songs: [],
   valueSearch: 'rammstein',
   limit: 10,
   totalCount: null,
   isFeatching: false,
   messageNoFound: ''
}

const MUSIC_REDUSER = (state = initialState, action) => {
   switch (action.type) {
      case SET_MUSIC:
         return {
            ...state,
            songs: action.music,
            total: action.total
         }
      case SET_VALUE_SEARCH:
         return {
            ...state,
            valueSearch: action.value
         }
      case ADD_MORE_MUSIC:
         return {
            ...state,
            songs: [...state.songs, ...action.music]
         }
      case SET_ISFEATCHING:
         return {
            ...state,
            isFeatching: action.boolean
         }
      case SET_MESSAGE_NO_FOUND: 
         return{
            ...state,
            messageNoFound: action.text
         }
      default:
         return state
   }
}

const setMusic = (music, total) => ({
   type: SET_MUSIC,
   music, total
})

export const setValueSearch = (value) => ({
   type: SET_VALUE_SEARCH,
   value,
})

const setMoreMusic = (music) => ({
   type: ADD_MORE_MUSIC,
   music,
})
const setIsFeatching = (boolean) => ({
   type: SET_ISFEATCHING,
   boolean,
})

const setMessageNoFound = (text) => ({
   type: SET_MESSAGE_NO_FOUND,
   text
})


export const setMusicSearchTC = (query, limit) => (dispatch) => {

   musicAPI.getSearchMusic(query, limit).then(response => {
      if (response.data.total === 0) {
         dispatch(setMessageNoFound('По вашему запросу не чего не нашлось'))
         setTimeout(() => {
            dispatch(setMessageNoFound(''))
         }, 5000);
      }
      if (response.status === 200) {
         dispatch(setMusic(response.data.data, response.data.total)) 
      }

   })
}

export const addMoreMusicTC = (query, limit, index) => async (dispatch) => {
   await dispatch(setIsFeatching(true))
   await musicAPI.getSearchMusic(query, limit, index).then(response => {
      
      dispatch(setMoreMusic(response.data.data))
   })
   dispatch(setIsFeatching(false))
}

export default MUSIC_REDUSER;