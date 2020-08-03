import React from 'react';
import './App.css';
import { Route, HashRouter } from 'react-router-dom';
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer';
import News from './components/News/NewsContainer';
import Music from './components/Music/Music';
import Setting from './components/Settings/SettingsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Authorization/Login/LoginContainer';
import MyProfileContainer from './components/Profile/MyProfile/MyProfileContainer';
import { whitSuspense } from './hoc/withSuspense';
const ProfileContainer = React.lazy(() => import('./components/Profile/Profile.container')) ;
const MessageContainer = React.lazy(() => import('./components/Message/MessageContainer'));

function App(props) {
   return (
      <HashRouter>
         <div className="App">
            <HeaderContainer />
            <Nav />
            <div className="mainContent">
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
                  render={whitSuspense(MessageContainer)}/>

               <Route 
                  path="/news" 
                  render={() => <News />}
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

export default App;
