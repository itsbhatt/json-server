const matchQuery = require('./matchQuery');

const matchResponseBody = (req, responseBody, field = 'query') => {
  let response = responseBody;

  if (responseBody[field]) {
    const isError = matchQuery(responseBody[field], req[field]);
    if (isError) return ({ error: true });
    response = responseBody;
  }

  if (Array.isArray(responseBody)) {
    response = responseBody.find((res) => {
      const isError = matchQuery(res[field], req[field]);
      return !isError;
    });

    if (!response) return ({ error: true });
  }

  return { status: response.status, response: response.response };
};

module.exports = matchResponseBody;
