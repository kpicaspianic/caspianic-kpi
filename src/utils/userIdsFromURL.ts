export const userIdsFromURL = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const evaluatedId = urlParams.get('evaluated');

  return evaluatedId;
};
