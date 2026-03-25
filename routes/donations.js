const express = require("express");
const router = express.Router();
const Donation = require("../models/Donation");


// ✅ ADD DONATION
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
    res.status(500).json({ error: err.message });
  }
});


// ✅ GET DONATIONS (LATEST FIRST 🔥)
router.get("/", async (req, res) => {
  try {
    const donations = await Donation.find()
      .sort({ createdAt: -1 }); // 🔥 newest on top

    res.json(donations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
