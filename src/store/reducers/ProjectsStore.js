const initialState = '2222';

export default (state = initialState, action) => {
  // console.log('reducer: Projects state: ', state, ", action.type: ", action)
  // console.log(action.payload)
  // var copy;
  switch (action.type) {
    case 'setProjects':
      return action.payload;
    default:
      return state;
  }
}

