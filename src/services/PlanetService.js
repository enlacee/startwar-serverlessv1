const {
  successResponse,
  errorResponse,
  customResponse,
} = require("../utils/lambda-response");
const axios = require("axios");
const Planet = require('../models/entities/Planet')
const swapiURL = process.env.SWAPI_URL;

class PlanetService {

  static async getAll() {
    try {
      console.log("Request to Swar Wars API...");
      const rs = await axios.get(swapiURL + "/planets/");

      const result = rs.data.results.map((item) => {
        return new Planet(item);
      });

      // result 
      return successResponse({
        message: "Exito",
        data: {
          cantidad: rs.data.count,
          resultado: result,
        },
      });

    } catch (e) {
      console.log("error", e);
      return errorResponse({ message: "Error Interno", data: null });
    }
  }

}

module.exports = PlanetService;
