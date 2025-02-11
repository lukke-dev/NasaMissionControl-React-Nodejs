const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

const planetsRouter = require("./routes/planets.routes");
const launchesRouter = require("./routes/launches.routes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);
app.use(morgan("combined"));
app.use(express.json());
// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(planetsRouter);
app.use(launchesRouter);
app.get("/*", (req, res) => {
  // eslint-disable-next-line no-undef
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
