const matchResponseBody = require('./matchResponseBody');

const parseResponse = (req, paths, index, db) => {
  let pathRes = db[paths[index]];

  if (
    !pathRes ||
    index >= paths.length ||
    (pathRes.use && req.method !== pathRes.use)
  ) {
    return ({ error: true });
  }

  if (pathRes.responseBody) {
    if (pathRes.use === 'POST') {
      return matchResponseBody(req, pathRes.responseBody, 'body');
    }
    return matchResponseBody(req, pathRes.responseBody, 'query');
  }

  return parseResponse(req, paths, index + 1, pathRes);
};

module.exports = parseResponse;
