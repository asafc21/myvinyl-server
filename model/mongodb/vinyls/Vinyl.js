import mongoose from "mongoose";
import {
  DEFAULT_REQUIRED_STRING_VALIDATION,
  DEFAULT_STRING_VALIDATION,
} from "../helper/defaultStringValidation.helper.js";
import Image from "./Image.js";

const VinylSchema = new mongoose.Schema({
  title: DEFAULT_REQUIRED_STRING_VALIDATION,
  artistName: DEFAULT_REQUIRED_STRING_VALIDATION,
  label: DEFAULT_STRING_VALIDATION,
  genre: { type: String, minLength: 2, maxLength: 256 },
  yearReleased: {
    type: Number,
    length: 4,
  },
  vinylCondition: DEFAULT_REQUIRED_STRING_VALIDATION,
  sleeveCondition: DEFAULT_STRING_VALIDATION,
  phone: {
    type: String,
    required: true,
    maxLength: 11,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: false,
  },
  price: { type: Number },
  image: Image,
  likes: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Vinyl = mongoose.model("vinyl", VinylSchema);

export default Vinyl;
