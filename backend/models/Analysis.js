const mongoose = require("mongoose");

const analysisSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    feedbackText: {
      type: String,
      required: true,
    },
    aspects: [
      {
        aspect: { type: String },
        sentiment: { type: String, enum: ["positive", "negative", "neutral"] },
      },
    ],
    overallSentiment: {
      type: String,
      enum: ["positive", "negative", "neutral"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Analysis", analysisSchema);
