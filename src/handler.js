const uuidv4 = require('uuid');
var AWS = require('aws-sdk');

module.exports.hello = async event => {
  const uid = uuidv4.v4();
  var documentClient = new AWS.DynamoDB.DocumentClient();

  var params = {
    TableName : 'LoanTable',
    Item: {
       loanId: uid,
       status: 'New'
    }
  };

  try {
    const resp = await documentClient.put(params).promise();
    console.log(resp);
  } catch(err) {
    console.error(err);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Request accepted',
        requestId: uid
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
