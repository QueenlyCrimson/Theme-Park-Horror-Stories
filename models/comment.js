const { Schema } = require("mongoose");

const Comment = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", Comment);
