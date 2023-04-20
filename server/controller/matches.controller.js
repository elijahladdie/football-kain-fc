import { Matches } from "../migration/matches.model";
import { validateMatch } from "../helpers/Matches.validator";
export const MatchCreate = async (req, res) => {
  // check Validation
  const { error, value } = validateMatch(req.body);
  if (error) {
    return res.send({ error: error.details[0].message });
  }
  await Matches.create(req.body);
  return res.send({ message: "New Match Created" });
};

export const testJoi = (req, res) => {
  const schema = Joi.object({});
};

export const deleteMatch = async (req, res) => {
  const id = req.params.id;
  const alive = await Matches.findOne({
    where: {
      Mt_id: id,
    },
  });
  if (!alive) {
    return res.send({ message: " Match Already deleted" });
  } else {
    Matches.destroy({
      where: {
        Mt_id: id,
      },
    });
    return res.send({ message: " Match deleted" });
  }
};

export const allMatch = async (req, res) => {
  const match = await Matches.findAll();

  return res.send({ match });
};
export const getMatch = async (req, res) => {
  const id = req.params.id;
  const match = await Matches.findByPk(id);
  return res.send({ match });
};

export const updateMatch = async (req, res) => {
  const id = req.params.id;
  const updateMatch = await Matches.update(req.body, { where: { Mt_id: id } });
  return res.send({ message: "Match successfull updated" });
};
