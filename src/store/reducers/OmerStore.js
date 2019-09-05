const initialState = {}

export default (state = initialState, action) => {
  // console.log('reducer: TimePoints state: ', state, ", action.type: ", action)
  switch (action.type) {
    case 'setTimePoints':
      return action.payload;
    case 'setSocialNetworks':
      return action.payload;
    default:
      return state;
  }
}