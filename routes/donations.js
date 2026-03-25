const express = require("express");
const router = express.Router();
const Donation = require("../models/Donation");

// ✅ ADD donation
router.post("/", async (req, res) => {
  try {
    const { amount, username } = req.body;

    const donation = new Donation({
      amount,
      username
    });

    await donation.save();
    res.json(donation);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ✅ GET all donations (LATEST FIRST)
router.get("/", async (req, res) => {
  try {
    const donations = await Donation.find().sort({ createdAt: -1 });
    res.json(donations);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
