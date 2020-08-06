import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setErrorAC } from '../../Redux/App-reducer';
import SocialNetworkApp from './index';

const SocialNetworkAppContainer = (props) => {

   let catchAllUnhandledError = (e) => {
      props.setErrorAC(e.reason.toJSON().name, e.reason.toJSON().message)
      setTimeout(() => {
         props.setErrorAC(null, null)
      }, 4000);
   }

   useEffect(() => {
      window.addEventListener('unhandledrejection', catchAllUnhandledError)
      return () => {
         window.removeEventListener('unhandledrejection', catchAllUnhandledError)
      }
   })

   return <SocialNetworkApp {...props}/>
}

let mapStateToProps = (state) => ({
   error: state.App.Error,
   textError: state.App.textError,
})

export default compose(

   connect(mapStateToProps, {
      setErrorAC,
   })
)(SocialNetworkAppContainer)


