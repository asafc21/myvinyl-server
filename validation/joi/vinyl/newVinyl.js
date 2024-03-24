import Joi from "joi";

const newVinylSchema = Joi.object({
  title: Joi.string().min(2).max(256).required(),
  artistName: Joi.string().min(2).max(256).required(),
  label: Joi.string().min(2).max(256).allow(""),
  genre: Joi.string().min(2).max(256).allow(""),
  yearReleased: Joi.number().integer().min(1930).max(2024),
  vinylCondition: Joi.string().min(2).max(256).required(),
  sleeveCondition: Joi.string().min(2).max(256).allow(""),
  phone: Joi.string()
    .pattern(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/)
    .required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(500)
    .required(),
  price: Joi.number().required(),
  image: Joi.object().keys({
    url: Joi.string().uri({ scheme: ["http", "https"] }),
    alt: Joi.string().min(2).max(256).allow(""),
  }),
});

const newVinylSchemaValidation = (userInput) => {
  return newVinylSchema.validateAsync(userInput);
};

export default newVinylSchemaValidation;
