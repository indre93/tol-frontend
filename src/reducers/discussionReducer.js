const discussionReducer = (state = { discussions: [] }, action) => {

  switch (action.type) {
    case 'FETCH_DISCUSSIONS':
      return { discussions: action.payload };

    case 'ADD_DISCUSSION':
      return {
        ...state,
        discussions: [...state.discussions, action.payload]
      };

    case 'ADD_COMMENT':
      const discussions = state.discussions.map(discussion => {
        if (discussion.id === action.payload.id) {
          return action.payload;
        } else {
          return discussion;
        }
      });
      return { ...state, discussions: discussions };

    default:
      return state;
  }

};

export default discussionReducer;
