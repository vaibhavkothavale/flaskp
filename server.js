const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(`
    <form method="POST" action="/send">
      <input type="text" name="name" placeholder="Enter your name" required />
      <input type="email" name="email" placeholder="Enter your email" required />
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post("/send", async (req, res) => {
  try {
    const response = await axios.post("http://backend:5000/submit", {
      name: req.body.name,
      email: req.body.email,
    });
    res.send(response.data);
  } catch (error) {
    res.send("Error connecting to backend");
  }
});

app.listen(3000, () => console.log("Frontend running on port 3000"));
