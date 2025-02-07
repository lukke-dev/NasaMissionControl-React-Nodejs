// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 8000;
const http = require("http");
const app = require("./app");

const { loadPlanets } = require("./models/planets.model");

const server = http.createServer(app);

async function startServer() {
  await loadPlanets();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT} ...`);
  });
}

startServer();
