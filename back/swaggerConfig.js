const swaggerJsdoc = require("swagger-jsdoc");
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Exemplo com Swagger",
      version: "1.0.0",
      description: "API para exemplo de documentação Swagger",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: [
    "./src/http/routes/Historico/*.js",
    "./src/http/routes/Prescricao/*.js",
    "./src/http/routes/Remedio/*.js",
    "./src/http/routes/Usuario/*.js",
  ], // Define onde os endpoints estão descritos
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);
module.exports = swaggerDocs;
