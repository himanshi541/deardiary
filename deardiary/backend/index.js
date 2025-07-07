const connecttoMongo = require("./db");

const express = require("express");
connecttoMongo();
const app = express();
const port = 5000;
app.use(express.json());
//Create a user using POST "/api/auth/" endpoint NO authentication required
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
