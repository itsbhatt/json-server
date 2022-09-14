const db = require('../db.json');
const parseResponse = require('./parseResponse');

const generateResponse = (req) => {
  const paths = [];

  const splittedPaths = req.path.split('/');
  const splittedPathsLength = splittedPaths.length;

  for (let i = 0; i < splittedPathsLength; i++) {
    if (i > 1 && paths.length === 0) return { error: true };

    if (splittedPaths[i] !== '') {
      paths.push(`/${splittedPaths[i]}`);
    }
  }

  if (paths.length === 0) paths.push('/');

  let pathRes = parseResponse(req, paths, 0, db);

  return pathRes;
};

module.exports = generateResponse;
