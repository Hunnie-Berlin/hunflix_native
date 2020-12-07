export const formatDate = (date) => {
  const theDate = new Date(date);
  return theDate.toLocaleDateString("de-DE", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
