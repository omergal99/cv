const initialState = {
  currUser: 'my friends'
}

export default (state = initialState, action) => {
  // console.log('reducer: USER state: ', state, ", action.type: ", action)

  switch (action.type) {
    default:
      return state;
  }
}

