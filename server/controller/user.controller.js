import { validateUser } from "../helpers/user.validator";
import { User } from "../migration/user.model";
import { signToken } from "../helpers/authentication";

export const signup = async (req, res) => {

  //check validataion
  const { error, value } = validateUser(req.body);
  const { u_Name } = req.body;

  const user = await User.findOne({
    where: {
      u_Name
    },
  });

  if (error) {
    return res.send({ error: error.details[0].message });
  }
  if (user) {
    return res.send({ error: "User already registered" });

  }

  await User.create(req.body);
  return res.send({ message: "New user is created", user: req.body, token: signToken(User) });
};

export const getAllUsers = async (req, res) => {
  const user = await User.findAll();
  return res.send({ user });
};

export const signin = async (req, res) => {
  const { u_password, u_Name } = req.body;
  const user = await User.findOne({
    where: {
      u_Name,
      u_password,
    },
  });
  if (!user) {  
    return res.send({ error: "Invalid Username or Password", status: 400 });
  }

  return res.send({ user, token: signToken(user) });
};
