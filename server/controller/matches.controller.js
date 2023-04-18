import { Match } from "../migration/matches.model";
import { validateMatch } from "../helpers/Matches.validator";
export const MatchCreate = async (req, res) => {
  // check Validation
  const { error, value } = validateMatch(req.body);
  if (error) {
    return res.send({ error: error.details[0].message });
  }
  await Match.create(req.body);
  return res.send({ message: "New Match Created" });
};

export const testJoi = (req, res) => {
  const schema = Joi.object({});
};

export const deleteMatch = async (req, res) => {
  const id = req.params.id;
  const alive = await Match.findOne({
    where: {
      id: id,
    },
  });
  if (!alive) {
    return res.send({ message: " Match Already deleted" });
  } else {
    Match.destroy({
      where: {
        id: id,
      },
    });
    return res.send({ message: " Match deleted" });
  }
};

export const allMatch = async (req, res) => {
  const Match = await Match.findAll();

  return res.send({ Match });
};
export const getMatch = async (req, res) => {
  const id = req.params.id;
  const Match = await Match.findByPk(id);
  return res.send({ Match });
};

export const updateMatch = async (req, res) => {
  const id = req.params.id;
  const updateMatch = await Match.update(req.body, { where: { id: id } });
  return res.send({ message: "Match successfull updated" });
};
