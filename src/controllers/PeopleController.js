const { errorResponse, successResponse } = require("../utils/lambda-response");
const PeopleService = require("../services/PeopleService");

module.exports.handler = async (event) => {
  let result;
  
  try {
    const request = event;
    const action = event.pathParameters.action || "";

    switch (action) {
      case "create":
        result = PeopleService.create(request);
        break;
      case "getAll":
        result = PeopleService.getAll();
        console.log('result', result);
        break;
      default:
        result = successResponse({});
    }
  } catch (e) {
    console.log("error", e);
    result = errorResponse({ message: "Error interno.", data: null });
  }

  return result;
};
