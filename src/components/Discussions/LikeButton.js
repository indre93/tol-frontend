import React from 'react';

const LikeButton = () => {
  const [count, setCount] = React.useState(0);
  const btnClicked = React.useRef(false);

  const handleClick = () => {
    (!btnClicked.current)
      ? setCount((prevCount) => prevCount + 1)
      : setCount((prevCount) => prevCount - 1);
    btnClicked.current = !btnClicked.current;
  };

  return (
    <button onClick={handleClick}>
      {count} Likes(s)
    </button>
  );
};

export default LikeButton;

