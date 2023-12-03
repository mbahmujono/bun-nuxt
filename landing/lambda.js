const { handler } = require('./.output/server/index.mjs');

exports.lambdaHandler = async (event, context) => {
  // your code to handle the request
  return await handler(event, context);
};
