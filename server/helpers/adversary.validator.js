import Joi from "joi";

export const validateAdversary = (AdversaryData) => {
  // rules to be followed for Adversary data from clients

  const AdversaryRules = Joi.object({
    Name: Joi.string().min(5).max(30).required(),
  });

  return AdversaryRules.validate(AdversaryData); // Adversary data from clients
};
