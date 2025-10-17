const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");
const User = require("../models/User");

// Mock Analysis Function (replace with your actual NLP logic later)
function analyzeText(text) {
  const aspects = [
    { aspect: "Service", sentiment: "positive" },
    { aspect: "Product", sentiment: "neutral" },
    { aspect: "Delivery", sentiment: "negative" },
  ];
  const overallSentiment = "positive"; // Simplified mock result
  return { aspects, overallSentiment };
}

// POST /api/analysis
router.post("/", async (req, res) => {
  try {
    const { userId, text } = req.body;
    if (!userId || !text) {
      return res.status(400).json({ message: "Missing userId or text" });
    }

    const { aspects, overallSentiment } = analyzeText(text);

    // Save to MongoDB
    const feedback = new Feedback({
      userId,
      text,
      aspects,
      overallSentiment,
    });
    await feedback.save();

    res.json(feedback);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});
// GET /api/analysis/all — Fetch all feedbacks for admin
router.get("/all", async (req, res) => {
  try {
    const feedbacks = await Feedback.find().populate("userId", "username email");
    res.json(feedbacks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error fetching feedbacks" });
  }
});

module.exports = router;
