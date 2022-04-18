const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });

const connectDB = async () => {
  await mongoose.connect("mongodb+srv://viron04:DyxSjBi57Zhh4B1Q@cluster0.iavio.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  });

  console.log("MongoDB Connected");
};

module.exports = connectDB;
