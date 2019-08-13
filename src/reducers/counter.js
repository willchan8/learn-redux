// Reducer computes the new state in response to actions sent to the store.
// Reducer takes in two arguments: the current state tree and the action.
// Matches the action type and returns the new state.

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;