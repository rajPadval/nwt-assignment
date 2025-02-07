const { createUser } = require("../controllers/userController");
const { userSchema } = require("../validators/userValidator");

module.exports = [
  {
    method: "POST",
    path: "/api/users",
    options: {
      validate: {
        payload: userSchema,
        failAction: (request, h, error) => {
          throw error;
        },
      },
    },
    handler: createUser,
  },
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Hello World";
    },
  },
];
