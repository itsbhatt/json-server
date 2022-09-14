const matchQuery = (queryParam, reqQueryParam) => {
  return Object.keys(queryParam).find((queryParamKey) => {
    return (
      String(queryParam[queryParamKey]) !== String(reqQueryParam[queryParamKey])
    );
  });
};

module.exports = matchQuery;
