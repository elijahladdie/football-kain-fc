import { DataTypes } from "sequelize";
import sequelize from "./db";

// Table Adversary
 const Adversary = sequelize.define(
  "Adversary",
  {
    Ad_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
  }
);

sequelize
  .sync()
  .then(() => console.log("Adversery"))
  .catch((error) => console.log(error.message));
 
export  {Adversary}
 



