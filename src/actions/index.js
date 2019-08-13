// Actions are payloads of information that send data from your application to your store. 
// They are the only source of information for the store.
// An Action is the plain object describing WHAT HAPPENED.
// The following are Action Creators.

export const increment = (num) => {
  return {
    type: 'INCREMENT',
    payload: num
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}