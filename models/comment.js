const mongoose = require("mongoose")
const { Schema } = require("mongoose")

const Comment = new Schema(
  {
    username: { type: String, required: true },
    content: { type: String, required: true },
    story_id: { type: Schema.Types.ObjectId, ref: "Story" },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Comment", Comment)
