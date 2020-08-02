import { combineReducers, createStore, applyMiddleware } from 'redux'
import profilePage from './profile-reducer'
import messagePage from './message-reducer'
import newsPage from './news-reducer'
import usersPage from './users-reducer'
import auth from './auth-reducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
   profilePage,
   messagePage,   
   usersPage,
   newsPage,
   auth,
   form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store;