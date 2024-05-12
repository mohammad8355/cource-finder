export const aparaturlmaker = (searchquery, maxResults = 10) => {
  const url = `https://www.aparat.com//etc/api/userBySearch/text/${searchquery}/perpage/${maxResults}`;
  return url;
};
