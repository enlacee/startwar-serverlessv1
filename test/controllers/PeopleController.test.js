const PeopleController = require("../../src/controllers/PeopleController");

it("Test Fn(handler - getAll)", async () => {
  const event = {
    headers: {},
    path: "/people",
    pathParameters: {},
    requestContext: {},
    resource: "/people",
    httpMethod: "GET",
    queryStringParameters: null,
    stageVariables: null,
    body: "",
    isOffline: true,
  };

  const data = await PeopleController.handler(event);
  expect(data.statusCode).toBe(200);
});

it("Test Fn(handler - create)", async () => {
  const event = {
    headers: {},
    path: "/people",
    pathParameters: {},
    requestContext: {},
    resource: "/people",
    httpMethod: "POST",
    queryStringParameters: null,
    stageVariables: null,
    body:
      '{"nombre": "Juan", "apellido": "Perez"}',
    isOffline: true,
  };

  const data = await PeopleController.handler(event);
  expect(data.statusCode).toBe(200);
});
