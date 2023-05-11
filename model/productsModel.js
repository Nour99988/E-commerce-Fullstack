const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    descripion: { type: String, required: true },
    price: { type: Number, required: true },
    rate: { type: Number },
    discount: { type: Number },
    date: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", productsSchema);
