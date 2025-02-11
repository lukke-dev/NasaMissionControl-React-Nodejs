const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: "keppler mission X",
  rocket: "keppler rocket",
  launchDate: new Date("December 27, 2030"),
  destination: "keppler destination",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

module.exports = {
  launches,
};
