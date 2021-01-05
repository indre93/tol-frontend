
const discussionReducer = (state = { discussions: [] }, action) => {
  switch (action.type) {
    case 'FETCH_DISCUSSIONS':
      return { discussions: action.payload };
    case 'ADD_DISCUSSION':
      return {
        ...state,
        discussions: [...state.discussions, action.payload]
      };
    default:
      return state;
  }
};

export default discussionReducer;
