require("dotenv").config();
const Hapi = require("@hapi/hapi");
const routes = require("./routes/userRoutes");
const rateLimit = require("hapi-rate-limit");

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 5000,
    host: process.env.HOST || "0.0.0.0",
  });

  await server.register({
    plugin: rateLimit,
    options: {
      userLimit: 100, // 100 requests per user per hour
      pathLimit: 50,
      headers: true,
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

// This will invoke the init function when the script is run
init();
