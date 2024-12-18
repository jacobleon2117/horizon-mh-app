module.exports = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Horizon Mental Health API",
      version: "1.0.0",
      description: "API documentation for Horizon Mental Health platform",
      contact: {
        name: "API Support",
        email: "support@horizonmentalhealth.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};
