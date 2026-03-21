const mongoose = require("mongoose");

const DonationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  amount: Number,
  message: String
}, { timestamps: true });

module.exports = mongoose.model("Donation", DonationSchema);
