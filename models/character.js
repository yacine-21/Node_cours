const mongoose = require("mongoose");

const characterShema = new mongoose.Schema({
    body: {
        nom:  String,
        Power: String,
        Background: String,
        prime: Number
      },
  },{
    timestamps: true,
  });

module.exports = mongoose.model("character", characterShema)