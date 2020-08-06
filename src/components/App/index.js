import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import style from './App.module.scss'
import Nav from '../Nav/Nav'
import Footer from '..//Footer/Footer';
import Music from '../Music/Music';
import Setting from '../Settings/SettingsContainer';
import UsersContainer from '../Users/UsersContainer';
import HeaderContainer from '../Header/HeaderContainer';
import LoginContainer from '../Authorization/Login/LoginContainer';
import MyProfileContainer from '../Profile/MyProfile/MyProfileContainer';
import { whitSuspense } from '../../hoc/withSuspense';
const ProfileContainer = React.lazy(() => import('../Profile/Profile.container'));
const MessageContainer = React.lazy(() => import('../Message/MessageContainer'));
const News = React.lazy(() => import('../News/NewsContainer'));

const SocialNetworkApp = (props) => {

   return (
      <HashRouter>
         <div className={style.App}>

            <div className={
               props.error && props.textError 
                  ? style.AppError_active 
                  : style.AppError
               }>
               <h5>{props.error}</h5>
               <p>{props.textError}</p>
            </div>

            <HeaderContainer />
            <Nav />
            <div className={style.mainContent}>
               <Route
                  path='/login'
                  render={() => <LoginContainer />}
               />
               <Route
                  path="/Myprofile"
                  render={() => <MyProfileContainer />}
               />
               <Route
                  path="/profile/:userId?"
                  render={whitSuspense(ProfileContainer)}
               />
               <Route
                  path="/message"
                  render={whitSuspense(MessageContainer)} />

               <Route
                  path="/news"
                  render={whitSuspense(News)}
               />

               <Route
                  path="/music"
                  component={Music}
               />
               <Route
                  path="/users"
                  component={UsersContainer}
               />

               <Route
                  path="/setting"
                  component={Setting}
               />
            </div>
            <Footer />
         </div>
      </HashRouter>
   );
}

export default SocialNetworkApp;
