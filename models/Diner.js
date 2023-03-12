const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dinerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    establishmentType: {
      type: String,
      enum: [
        "Cafe",
        "Hawker Stall",
        "Foodcourt Stall",
        "Regular Restaurant",
        "Fine Dining Restaurant",
        "Fastfood Restaurant",
        "Bar/Pub",
        "Casual Eatery",
        "Takeaway Stand",
        "Non-physical",
      ],
      default: "Cafe",
      required: true,
    },
    cuisineType: {
      type: String,
      enum: [
        "Japanese",
        "Korean",
        "Italian",
        "French",
        "Malay",
        "Chinese",
        "Indian",
        "Thai",
        "Vietnamese",
        "American",
        "Mexican",
        "Spanish",
        "Mediterranean",
        "Others",
      ],
      default: "Japanese",
      required: true,
    },
    halal: {
      type: String,
      enum: ["Unsure", "Yes", "No"],
      default: "Unsure",
    },
    pricingLevel: {
      type: String,
      enum: ["Low", "Fairly Low", "Medium", "Fairly High", "High"],
      default: "Low",
      required: true,
    },
    region: {
      type: String,
      enum: ["Central", "East", "North East", "North", "West"],
      default: "Central",
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    contactNo: {
      type: Number,
    },
    operatingDays: {
      type: String,
    },
    operatingHours: {
      type: String,
    },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

const reviewSchema = new Schema({
  rating: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    default: 1,
    required: true,
  },
  dateVisited: {
    type: Date,
  },
  dinerNo: {
    type: Number,
    default: 2,
    required: true,
  },
  billTotal: {
    type: Number,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Diner", dinerSchema);
