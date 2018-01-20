const initialState = {
  placeholder: false,
};

function appReducer(state = initialState, action) {
  switch(action.type) {
    case 'PLACEHOLDER':
      return {
        ...state, placeholder: !state.placeholder
      };
      default:
        return state
  }
}

export default appReducer;
