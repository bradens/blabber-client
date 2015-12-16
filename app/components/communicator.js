import React from 'react';
import styles from './communicator.module.scss';

const { Component, PropTypes } = React;

export default class Communicator extends Component {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
    sendMessage: PropTypes.func.isRequired
  }

  state = { }

  onKeyPress = (e) => {
    if (e.nativeEvent.keyCode === 13)
      this.sendMessage()
  }

  onChange = (e) => {
    this.setState({ message: e.target.value })
  }

  sendMessage = () => {
    if (this.state.message === "" || !this.state.message)
      return

    this.props.sendMessage(this.props.currentUser, this.state.message);
    this.setState({ message: null })
  }

  render() {
    return (
      <section className={styles.communicator}>
        <input autoFocus={true} placeholder="Type a message..." className={styles.input} value={this.state.message} type="text" onKeyPress={this.onKeyPress} onChange={this.onChange} />
        <button className={styles.send} onClick={this.sendMessage}>Send</button>
      </section>
    );
  }
}
