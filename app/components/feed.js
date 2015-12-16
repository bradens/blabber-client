import React from 'react';
import ReactDOM from 'react-dom';
import styles from './feed.module.scss';

const { Component, PropTypes } = React;

export default class Feed extends Component {
  static propTypes = {
    messages: PropTypes.array
  }

  componentDidUpdate() {
    // Definitely don't use this code in production
    let node = ReactDOM.findDOMNode(this.refs.feed);
    node.scrollTop = node.scrollHeight;
  }

  render() {
    return (
      <ul ref='feed' className={styles.feed}>
        { this.props.messages.map((message, i) =>
            <li key={i} className={styles.messageListItem}>
              <span className={styles.username}>{message.user.username}</span>
              <span className={styles.messageContent}>{ message.body }</span>
            </li>
          )
        }
      </ul>
    );
  }
}
