// imported module and files
const express = require("express");
require("dotenv").config();
const port = process.env.PORT;
const connect = require("./connect");
const { userRouter } = require("./routes/userRoute");
const cors = require('cors')

//app and inbuit middleware
const app = express();
app.use(express.json());
app.use('/api',userRouter);
app.use(cors())

//home route or main route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Home Page</h1>");
});

//listenar
app.listen(port, () => {
  connect();
  console.log(`port is running on port ${port}`);
});
