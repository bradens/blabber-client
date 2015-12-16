import { expect } from 'chai';
import currentUser from '../../app/reducers/current_user.js';
import { SET_CURRENT_USER } from '../../app/actions/current_user.js';

describe('reducers', () => {
  describe('current_user', () => {
    it('should handle SET_CURRENT_USER', () => {
      let nextState = { username: 'bradens', user_id: '123' };
      expect(currentUser({}, { type: 'SET_CURRENT_USER', user: { username: 'bradens', user_id: '123' }})).to.deep.equal(nextState);
    });

    it('should return the previous state if an unknown action is given', () => {
      let prevState = {};
      expect(currentUser(prevState, { type: 'unknown' })).to.equal(prevState);
    });
  });
});
