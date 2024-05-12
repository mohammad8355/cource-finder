export const urlmaker = (searchparameter, maxResults = 25) => {
  searchparameter = "tutorial:";
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${searchparameter}&key=AIzaSyCYEbO9wyTsojO_bKFfRnvbK14ObuhhmSo`;
  return url;
};
