import { SEND_MESSAGE } from '../actions/message';
import React, { Component } from 'react';
import { Link } from 'react-router';
import Sidebar from './sidebar';
import Feed from './feed';
import Communicator from './communicator';

import styles from "./home.module.scss";

export default class Home extends Component {
  render() {
    return (
      <section className={styles.main}>
        <Sidebar {...this.props} />
        <section className={styles.innerView}>
          <Feed {...this.props} />
          <Communicator {...this.props} />
        </section>
      </section>
    );
  }
}
