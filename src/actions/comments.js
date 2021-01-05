export const addComment = (comment, discussionId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/discussions/${discussionId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(comment)
    })
      .then(resp => resp.json())
      .then(discussion => {
        dispatch({ type: 'ADD_COMMENT', payload: discussion });
      });
  };
};
