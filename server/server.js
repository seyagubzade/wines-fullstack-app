const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const PORT = 8080;
const WineRouter = require("./routes/Wine.routes");

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://seyagubzade:seyagubzade123@cluster0.2wwolad.mongodb.net/"
  )
  .then(() => console.log("connected to db"));

app.use("/wine", WineRouter);

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
