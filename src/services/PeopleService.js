const {
  successResponse,
  errorResponse,
  customResponse,
} = require("../utils/lambda-response");
const PeopleModel = require("../models/People");
const axios = require("axios");
const peopleModel = new PeopleModel();
const swapiURL = process.env.SWAPI_URL;

/*
 * Service People   
*/
class PeopleService {

  static async create(request) {
    try {

      let dataJSON = JSON.parse(request.body);
      let rs = await peopleModel.create(dataJSON); // create new person

      return successResponse({
        message: "Exito",
      });
    } catch (e) {
      console.log("error", e);
      
      return errorResponse({ message: "Error Interno" });
    }
  }

  static async getAll() {
    try {
      const data = await peopleModel.getAll();

      if (Object.keys(data).length === 0) {
        return customResponse(
          {
            message: "Empty",
          },
          404
        );
      }

      return successResponse({
        message: "Exito",
        data: data.Items,
      });
    } catch (e) {
      console.log("error", e);
      return errorResponse({ message: "Error Interno", data: null });
    }
  }
}

module.exports = PeopleService;
