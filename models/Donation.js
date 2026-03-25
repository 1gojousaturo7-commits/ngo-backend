const mongoose = require("mongoose");

const DonationSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true
  },
  username: {
    type: String,
    required: true
  }
}, { timestamps: true }); // ✅ needed for sorting

module.exports = mongoose.model("Donation", DonationSchema);
