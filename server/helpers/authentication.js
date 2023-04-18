import jwt from "jsonwebtoken";
export const signToken = ({ Username, name, }) => {
  const token = jwt.sign(
    {
      Username,
      name,
    
    },
    "secret",
    { expiresIn: "1h" }
  );
  return token;
};
export const verify = (token) => {
  return jwt.verify(token, "secret", function (err, decoded) {
    return decoded;
  });
};
