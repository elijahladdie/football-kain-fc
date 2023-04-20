import Joi from "joi";

export const validateUser = (userData) => {
  // rules to be followed for user data from clients

  const userRules = Joi.object({
    u_Name: Joi.string().min(5).max(30).required(),
    u_password: Joi.string().min(5).max(30).required(),
  });

  return userRules.validate(userData); // user data from clients
};
