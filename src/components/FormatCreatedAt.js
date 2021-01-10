export const datePosted = (created_date) => {
  const formatDate = new Date(`${created_date}`);
  const date = formatDate.toLocaleString();
  return date;
};
