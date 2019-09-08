const initialState = {}

export default (state = initialState, action) => {
  // console.log('reducer: TimePoints state: ', state, ", action.type: ", action)
  switch (action.type) {
    case 'setOmerInit':
      return action.payload;
    default:
      return state;
  }
}