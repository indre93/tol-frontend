export const fetchDiscussions = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/discussions')
      .then(resp => resp.json())
      .then(discussions => {
        dispatch({ type: 'FETCH_DISCUSSIONS', payload: discussions });
      });
  };
};

export const addDiscussion = (data) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/discussions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(resp => resp.json())
      .then(discussion => {
        dispatch({ type: 'ADD_DISCUSSION', payload: discussion });
      });
  };
};
