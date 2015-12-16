import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../components/home';
import * as CurrentUserActions from '../actions/current_user.js';
import * as MessageActions from '../actions/message';

let mapStateToProps = (state) => {
  return {
    messages: state.message,
    users: state.user,
    currentUser: state.currentUser
  };
}

let mapDispatchToProps = (dispatch) => {
  return { ...bindActionCreators(MessageActions, dispatch), ...bindActionCreators(CurrentUserActions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
