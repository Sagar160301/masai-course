const mongoose = require("mongoose");

const connect = () => {
  mongoose.connect(
    "mongodb+srv://Sagar:Sagar@cluster0.d57qd.mongodb.net/c3evl?retryWrites=true&w=majority"
  );
};

module.exports = connect;
