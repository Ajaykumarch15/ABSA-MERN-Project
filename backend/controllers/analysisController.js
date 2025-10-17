const Analysis = require("../models/Analysis");

// --- Simple mock function for now (replace later with real ABSA logic)
const mockAspectAnalysis = (text) => {
  const aspects = ["service", "food", "price", "ambience"];
  return aspects.map((aspect) => ({
    aspect,
    sentiment: ["positive", "negative", "neutral"][
      Math.floor(Math.random() * 3)
    ],
  }));
};

// --- POST /api/analysis
exports.createAnalysis = async (req, res) => {
  try {
    const { userId, feedbackText } = req.body;
    if (!userId || !feedbackText)
      return res.status(400).json({ message: "Missing fields" });

    const aspects = mockAspectAnalysis(feedbackText);
    const sentiments = aspects.map((a) => a.sentiment);

    let overallSentiment = "neutral";
    const pos = sentiments.filter((s) => s === "positive").length;
    const neg = sentiments.filter((s) => s === "negative").length;

    if (pos > neg) overallSentiment = "positive";
    else if (neg > pos) overallSentiment = "negative";

    const newAnalysis = await Analysis.create({
      userId,
      feedbackText,
      aspects,
      overallSentiment,
    });

    res.status(201).json(newAnalysis);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// --- GET /api/analysis/:userId
exports.getAnalysisByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const analyses = await Analysis.find({ userId }).sort({ createdAt: -1 });
    res.json(analyses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
