const { errorResponse, successResponse } = require("../utils/lambda-response");
const PlanetService = require("../services/PlanetService");

module.exports.handler = async (event) => {
  let result;
  try {
    result = PlanetService.getAll();
  } catch (e) {
    console.log("error", e);
    result = errorResponse({ message: "Error interno.", data: null });
  }

  return result;
};
