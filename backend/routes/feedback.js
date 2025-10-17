const express = require("express");
const router = express.Router();
const { createFeedback, getFeedbacks } = require("../controllers/feedbackController");

// Create new feedback
router.post("/", createFeedback);

// Get all feedback
router.get("/", getFeedbacks);

module.exports = router;
