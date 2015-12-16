import React from 'react';
import styles from './sidebar.module.scss';

const { PropTypes, Component } = React;

export default class Sidebar extends Component {
  static propTypes = {
    users: PropTypes.array,
    currentUser: PropTypes.object
  }

  state = {
    changingCurrentUser: false
  }

  toggleChangingCurrentUser = () => {
    this.setState({ changingCurrentUser: !this.state.changingCurrentUser })
  }

  onKeyUp = (e) => {
    let key = e.nativeEvent.keyCode
    // Esc
    if (key === 27)
      this.toggleChangingCurrentUser()
    // Enter
    else if (e.nativeEvent.keyCode === 13) {
      // Can't steal someone's username
      if (_.find(this.props.users, (u) => u.username === this.state.username)) return false
      this.props.setCurrentUser({ user_id: this.props.currentUser.id, username: this.state.username })
      this.toggleChangingCurrentUser();
    }
  }

  onChangeUsername = (e) => {
    this.setState({ username: e.target.value });
  }

  render() {
    return (
      <section className={styles.sidebar}>
        <h3 className={styles.header}>
          Members
        </h3>
        <ul className={styles.memberList}>
          { this.props.users && this.props.users.map((u, i) =>
              <li key={i} className={styles.userListItem}>
                { u.username }
              </li>
            )
          }
        </ul>
        <section className={styles.setUser}>
          { this.state.changingCurrentUser ?
            <section className={styles.wrapper}>
              <input
                autoFocus={true}
                type="text"
                placeholder="Set your username"
                value={this.state.username}
                onChange={this.onChangeUsername}
                onKeyUp={this.onKeyUp} />
            </section>
            :
              <section className={styles.wrapper}>
                <span className={styles.currentUser}>{ this.props.currentUser.username || 'anonymous' }</span>
                <a onClick={this.toggleChangingCurrentUser} className={styles.changeUserButton}>Change</a>
              </section>
          }
        </section>
      </section>
    );
  }
}
