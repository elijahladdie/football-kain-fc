import Joi from "joi";
export const validateReferee = (RefereeData) => {
  const RefereeRules = Joi.object({
    F_Name: Joi.string().min(5).max(100).required(),
    L_Name: Joi.string().min(5).max(100).required(),
    Age: Joi.date().required(),
    Sex: Joi.string().required(),
    Telephone: Joi.number().integer().required(),
  });
  return RefereeRules.validate(RefereeData);
};

