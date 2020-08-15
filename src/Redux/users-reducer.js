import {followedAPI, userAPI} from '../api'

const FOLLOW = 'user-reduser/FOLLOW';
const UNFOLLOW = 'user-reduser/UNFOLLOW';
const SET_USERS = 'user-reduser/SET-USERS';
const SET_PAGE = 'user-reduser/SET-PAGE';
const SET_TOTAL_COUNT = 'user-reduser/SET-TOTAL-COUNT'
const IS_FETCHING = 'user-reduser/IS_FETCHING'
const DISABLE_SUBSCRIBE_BTN = 'user-reduser/DISABLE_SUBSCRIBE_BTN'
const SET_IS_FRIEND = 'user-reduser/set-friend-value/SET_IS_FRIEND'
const SET_TERM_FIEND_USER = 'user-reduser/set-value-term/SET_TERM_FIEND_USER'

let initialState = {
   users: [],
   numberOfPages: 1,
   numberOfUsers: 6,
   totalUsersCount: 0,
   isFetching: false,
   portitionSize: 10,
   disableSubscribeBtn: [],
   isFriend: 'all',
   term: '',
}

let USERS_REDUCER = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW: 
         return {
            ...state,
            users: state.users.map(e => {
               if (e.id === action.id ) {
                  return {...e, followed: true}
               }
               return e
            })
         }                
      case UNFOLLOW: 
         return {
            ...state,
            users: state.users.map(e => {
               if (e.id === action.id ) {
                  return {...e, followed: false}
               }
               return e
            })
         };
      case SET_USERS:
         return {
            ...state,
            users: action.users
         }               
      case SET_PAGE:
         return {
            ...state,
            users: [],
            numberOfPages: action.page
         }               
      case SET_TOTAL_COUNT:
         return {
            ...state,
            totalUsersCount: action.number
         }                            
      case IS_FETCHING:
         return {
            ...state,
            isFetching: action.isFetching,
         }                            
      case DISABLE_SUBSCRIBE_BTN:
         return {
            ...state,
            disableSubscribeBtn: action.isFeatching 
               ?  [...state.disableSubscribeBtn, action.userId] 
               :  state.disableSubscribeBtn.filter(id => id !== action.userId) 
               
         } 
      case SET_IS_FRIEND:
         return{
            ...state,
            isFriend: action.friend
         }  
      case SET_TERM_FIEND_USER:
         return{
            ...state,
            term: action.value
         }                      
      default:
         return state;
   }
}

export let follow = (id) => {
   return {
      type: FOLLOW,
      id: id,
   }
}
export let unfollow = (id) => {
   return {
      type: UNFOLLOW,
      id,
   }
}
export let setUsers = (users) => {
   return {
      type: SET_USERS,
      users,
   }
}
export let setPage = (page) => {
   return {
      type: SET_PAGE,
      page,
   }
}
export let setTotalCount = (number) => {
   return {
      type: SET_TOTAL_COUNT,
      number,
   }
}
export let isFetching = (isFetching) => {
   return {
      type: IS_FETCHING,
      isFetching,
   }
}
export let disableBtn = (userId, isFeatching) => {
   return {
      type: DISABLE_SUBSCRIBE_BTN,
      userId, isFeatching

   }
}

export const setIsFriend = (friend) => ({
   type: SET_IS_FRIEND,
   friend
})

export const setTermSearch = (value) => ({
   type: SET_TERM_FIEND_USER,
   value
})


export const getUsersThankCreator = (numberOfPages, numberOfUsers, friend, term) => {
   return (dispatch) => {
      dispatch(isFetching(true))
      userAPI.getUsers(numberOfPages, numberOfUsers, friend, term).then(data => {
         dispatch(setUsers(data.items))
         dispatch(setTotalCount(data.totalCount))
         dispatch(isFetching(false))
      })
   }
}

export const unfollowThunk = (id) => {
   return (dispatch) => {
      dispatch(disableBtn(id, true))
      followedAPI.deleteFollow(id).then(data => {
         if (data.resultCode === 0) {
            dispatch(unfollow(id))
         }
         dispatch(disableBtn(id, false))
      })
   }
}
export const followThunk = (id) => {
   return (dispatch) => {
      dispatch(disableBtn(id, true))
      followedAPI.postFollow(id).then(data => {
         if (data.resultCode === 0) {
            dispatch(follow(id))
         }
         dispatch(disableBtn(id, false))
      }) 
   }
}

export default USERS_REDUCER;