var AWS = require('aws-sdk');

module.exports.dblistner = async event => {
  console.log(JSON.stringify(event));
};
