import { DataTypes } from "sequelize";
import sequelize from "./db";
import { User } from "./user.model";
import { Adversary } from "./adversary.model";

// Table Matches
const Matches = sequelize.define(
  "Matches",
  {
    Mt_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Date: {
      type: DataTypes.DATE,
    },
    Play_Ground: {
      type: DataTypes.STRING,
    },
    Ref_id: {
      type: DataTypes.INTEGER,
    },
    Ad_id: {
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
  }, {
  sequelize,
}
);



sequelize
  .sync()
  .then(() => console.log(" Matches"))
  .catch((error) => console.log(error.message));
export { Matches }