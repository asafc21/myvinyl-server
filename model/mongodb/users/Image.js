import mongoose from "mongoose";
import { DEFAULT_STRING_VALIDATION } from "../helper/defaultStringValidation.helper.js";
import URL from "../helper/UrlStringValidation.helper.js";
const Name = new mongoose.Schema({
  url: URL,
  alt: DEFAULT_STRING_VALIDATION,
});

export default Name;
