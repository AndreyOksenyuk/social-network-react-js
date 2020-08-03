import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {authMeThankCreator, logoutThankCreator} from '../../Redux/auth-reducer'

class HeaderContainer extends React.Component {
   componentDidMount() {
      this.props.authMe()
   }
   render() {
      return (
         <Header {...this.props.data} 
            logout={this.props.logoutThankCreator}
            isAuth = {this.props.isAuth}
            login = {this.props.login}
            myPhoto={this.props.myPhoto}
         />
      );
   }
}

let mapStateToProps = (state) =>{
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login,
      myPhoto: state.profilePage.User.photos
   }
}

export default connect(mapStateToProps, {
   authMe: authMeThankCreator,
   logoutThankCreator,
})(HeaderContainer)
