const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL);
mongoose.connection
  .once("open", () => {
    console.log("good to go!");
  })
  .on("error", (error) => {
    console.warn("Warning", error);
  });
