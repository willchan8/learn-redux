// Reducer computes the new state in response to actions sent to the store.
// Reducer takes in two arguments: the current state tree and the action
// Matches the action type and returns the new state.

const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return !state;
    default:
      return state;
  }
};

export default loggedReducer;