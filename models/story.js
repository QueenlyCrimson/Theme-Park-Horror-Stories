const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Story = new Schema(
    {
        title: { type: String, required: true },
        image: { type: String, required: false },
        park: { type: String, required: true },
        date: { type: String, required: true },
        content: { type: String, required: true },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Story', Story)
