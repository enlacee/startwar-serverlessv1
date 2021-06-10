const AWS = require('aws-sdk');

/*
 * Model Class   
*/
class Model {
  constructor() {
    this.dynamoDb = new AWS.DynamoDB.DocumentClient();
  }
}

module.exports = Model;
