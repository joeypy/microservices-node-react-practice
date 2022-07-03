const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/events", async (req, res) => {
  const { type, data } = req.body;
  console.log(data);
  const status = data.content.includes("orange") ? "rejected" : "approved";

  await axios.post("http://localhost:4005/events", {
    type: "CommentUpdated",
    data: { ...data, status },
  });

  res.send({});
});

app.listen(4003, () => {
  console.log("Listening on 4003 | moderation");
});
