import { expect } from 'chai';
import user from '../../app/reducers/user.js';
import { DISCONNECT_USERS, CONNECT_USERS, SET_USERNAME } from '../../app/actions/user.js';

describe('reducers', () => {
  describe('user', () => {
    it('should handle DISCONNECT_USERS', () => {
      let initialState = [ { user_id: '123', username: 'bradens' } ];
      expect(user(initialState, { type: 'DISCONNECT_USERS', user_id: '123' })).to.deep.equal([]);
    });

    it('should handle SET_USERNAME', () => {
      let initialState = [ { user_id: '123', username: 'bradens' } ];
      expect(user(initialState, { type: 'SET_USERNAME', user: { user_id: '123', username: 'newname' }}))
        .to.deep.equal([ { user_id: '123', username: 'newname' } ]);
    });

    it('should return the previous state if an unknown action is given', () => {
      let prevState = [];
      expect(user(prevState, { type: 'unknown' })).to.equal(prevState);
    });
  });
});
