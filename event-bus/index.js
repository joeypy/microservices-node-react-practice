const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;
  console.log("Received Events", req.body.type);

  events.push(event);

  try {
    axios.post("http://localhost:4000/events", event); // posts
    axios.post("http://localhost:4001/events", event); // comments
    axios.post("http://localhost:4002/events", event); // query
    axios.post("http://localhost:4003/events", event); // moderation
  } catch (e) {
    console.error(e);
  }

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log("Listening on port 4005 | event-bus");
});
