export const fetchDiscussions = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/discussions')
      .then(resp => resp.json())
      .then(discussions => {
        dispatch({ type: 'FETCH_DISCUSSIONS', payload: discussions });
      });
  };
};
