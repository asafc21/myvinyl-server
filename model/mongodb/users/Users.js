import mongoose from "mongoose";
import Name from "./Name.js";
import Address from "./Address.js";
import Image from "./Image.js";

const UserSchema = new mongoose.Schema({
  name: Name,
  phone: {
    type: String,
    required: true,
    maxLength: 11,
    match: RegExp(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/),
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/),
  },
  password: {
    type: String,
    required: true,
  },
  image: Image,
  address: Address,
  isAdmin: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("user", UserSchema);

export default User;
