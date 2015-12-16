export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      console.log('setting current user', action.user)
      return { ...action.user };
    default:
      return state;
  }
}
