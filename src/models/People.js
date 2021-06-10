// vars requires
const moment = require("moment");
const { v4: uuidv4 } = require("uuid");
const Model = require("./Model");

// vars
const TABLE_NAME = process.env.TABLE_NAME_PEOPLE;

/**
 * Model People   
 */
class PeopleModel extends Model {

  async create(data) {
    if (!data.id) {
      const id = uuidv4();
      data.id = id;
    }

    const params = {
      TableName: TABLE_NAME,
      Item: data,
    };

    return await this.dynamoDb.put(params).promise();
  }

  async getAll() {
    const params = {
      TableName: TABLE_NAME,
    };

    return await this.dynamoDb.scan(params).promise();
  }
}

module.exports = PeopleModel;
