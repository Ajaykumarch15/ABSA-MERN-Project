const Feedback = require("../models/Feedback");

// Save new feedback
exports.createFeedback = async (req, res) => {
  try {
    const { productName, reviewText, sentiment, aspects } = req.body;

    const feedback = new Feedback({
      user: req.user ? req.user.id : null, // optional if auth not added yet
      productName,
      reviewText,
      sentiment,
      aspects,
    });

    await feedback.save();
    res.status(201).json({ message: "Feedback saved successfully", feedback });
  } catch (error) {
    console.error("Error creating feedback:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get all feedback
exports.getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().populate("user", "email");
    res.status(200).json(feedbacks);
  } catch (error) {
    console.error("Error fetching feedbacks:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
