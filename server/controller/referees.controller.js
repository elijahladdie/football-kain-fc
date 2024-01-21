import { Referees } from "../migration/referees.model";
import { validateReferee } from "../helpers/referees.validator";
export const refereeCreate = async (req, res) => {
  // check Validation
  const { error, value } = validateReferee(req.body);
  if (error) {
    return res.send({ error: error.details[0].message });
  }
  await Referees.create(req.body);
  return res.send({ message: "New referee registered." });
};

export const testJoi = (req, res) => {
  const schema = Joi.object({});
};

export const deleteReferee = async (req, res) => {
  const id = req.params.id;
  const alive = await Referees.findOne({
    where: {
      Ref_id: id,
    },
  });
  if (!alive) {
    return res.send({ message: " Referee already deleted." });
  } else {
    Referees.destroy({
      where: {
        Ref_id: id,
      },
    });
    return res.send({ message: " Referee deleted." });
  }
};

export const allReferee = async (req, res) => {
  const referee = await Referees.findAll();

  return res.send({ referee });
};
export const getReferee = async (req, res) => {
  const id = req.params.id;
  const referee = await Referees.findByPk(id);
  return res.send({ referee });
};

export const updateReferee = async (req, res) => {
  const id = req.params.id;
  const updatereferee = await Referees.update(req.body, { where: { Ref_id: id } });
  return res.send({ message: "Referee  updated." });
};
