import { Adversary } from "../migration/adversary.model";
import { validateAdversary} from "../helpers/adversary.validator";
export const adversaryCreate = async (req, res) => {
  // check Validation
  const { error, value } = validateAdversary(req.body);
  if (error) {
    return res.send({ error: error.details[0].message });
  }
  await Adversary.create(req.body);
  return res.send({ message: "New adversary created" });
};

export const testJoi = (req, res) => {
  const schema = Joi.object({});
};

export const deleteAdversary = async (req, res) => {
  const id = req.params.id;
  const alive = await Adversary.findOne({
    where: {
      Ad_id: id,
    },
  });
  if (!alive) {
    return res.send({ message: " Adversary already deleted" });
  } else {
    Adversary.destroy({
      where: {
        Ad_id: id,
      },
    });
    return res.send({ message: " Adversary deleted" });
  }
};

export const allAdversary = async (req, res) => {
  const adversary = await Adversary.findAll();

  return res.send({ adversary });
};
export const getAdversary = async (req, res) => {
  const id = req.params.id;
  const adversary = await Adversary.findByPk(id);
  return res.send({ adversary });
};

export const updateAdversary = async (req, res) => {
  const id = req.params.id;
  const updateAdversary = await Adversary.update(req.body, { where: {   Ad_id: id,} });
  return res.send({ message: "Adversary successfull updated" });
};
