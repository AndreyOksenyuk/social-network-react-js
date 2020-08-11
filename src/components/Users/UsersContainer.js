import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {
   isFetching,
   setPage,
   getUsersThankCreator,
   setIsFriend,
   setTermSearch
} from '../../Redux/users-reducer';

class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.getUsers(this.props.numberOfPages, this.props.numberOfUsers)
   }

   onSetPage = (page) => {
      this.props.getUsers(page, this.props.numberOfUsers, this.props.isFriend, this.props.term)
      this.props.setPage(page);
   }

   render() {
      return <Users
         users={this.props.users}
         numberOfPages={this.props.numberOfPages}
         numberOfUsers={this.props.numberOfUsers}
         totalUsersCount={this.props.totalUsersCount}
         onSetPage={this.onSetPage}
         fetching={this.props.fetching}
         portitionSize={this.props.portitionSize}
         setIsFriend={this.props.setIsFriend}
         setTermSearch={this.props.setTermSearch}
      />
   }
}

const mapStateToProps = (state) => {
   return {
      text: state.usersPage.text,
      users: state.usersPage.users,
      numberOfPages: state.usersPage.numberOfPages,
      numberOfUsers: state.usersPage.numberOfUsers,
      totalUsersCount: state.usersPage.totalUsersCount,
      fetching: state.usersPage.isFetching,
      portitionSize: state.usersPage.portitionSize,
      isFriend: state.usersPage.isFriend,
      term: state.usersPage.term,
   }
}

export default connect(mapStateToProps, {
   isFetching, setPage,
   getUsers: getUsersThankCreator,
   setIsFriend,
   setTermSearch,
})(UsersContainer);