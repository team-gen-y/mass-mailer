const express = require("express");
const app = express();
const mailer = require("./app");

app.use(express.json());

app.use("/", mailer);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
