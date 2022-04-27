var FakeServer = require("fake-json-api-server/src/nodeServer")
var stations = require("./scripts/stations")

const randomNumber = (min, max) => {
  return parseFloat(((Math.random() * (max - min) + min) * 100).toFixed(2))
}

st = stations.map((s) => {
  return {
    type: "channel",
    id: s.id,
    longitude: s.longitude,
    latitude: s.latitude,
    field1: randomNumber(0.18, 0.25),
    field2: randomNumber(0.2, 0.85),
  }
})

new FakeServer({
  port: 8080,
  baseApiUrl: "/",

  resources: {
    stations: {
      data: st,
    },
  },
})
