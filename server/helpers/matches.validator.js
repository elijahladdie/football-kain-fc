import Joi from "joi";
export const validateMatch = (MatchData) => {
  const MatchRules = Joi.object({
    Date:Joi.date().required(),
    Play_Ground: Joi.string().min(5).max(100).required(),
    Ref_id: Joi.number().integer().required(),
    Ad_id: Joi.number().integer().required(),
    user_id: Joi.number().integer().required(),
  });
  return MatchRules.validate(MatchData);
};

