const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  reviewerName: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    default: 1,
    required: true,
  },
  dateVisited: {
    type: Date,
  },
  paxNo: {
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
        "Takeaway Kiosk",
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
        "Australian",
        "American",
        "Mexican",
        "Spanish",
        "Mediterranean",
        "Other Asian",
        "Other Western",
        "Others",
      ],
      default: "Japanese",
      required: true,
    },
    halal: {
      type: String,
      enum: ["Unconfirmed", "Yes", "No"],
      default: "Unconfirmed",
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
      type: String,
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

module.exports = mongoose.model("Diner", dinerSchema);
