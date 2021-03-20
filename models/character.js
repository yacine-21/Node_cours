const mongoose = require("mongoose");

const characterShema = new mongoose.Schema({
    body: {
        name:  String,
        Power: String,
        Background: String,
        prime: Number
      },
  },{
    timestamps: true,
  });

module.exports = mongoose.model("character", characterShema)