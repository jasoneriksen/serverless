'use strict';

// Load ENV
var ServerlessHelpers = require('serverless-helpers-js');
ServerlessHelpers.loadEnv();

// Lambda Handler
module.exports.handler = function(event, context) {
  return context.done(null, { message: '"three" lambda function has run successfully' });
};