import {Sequelize} from "sequelize";

const sequelize = new Sequelize("fc_games", "root", "", {
    host: "localhost",
    dialect: "mysql",
    /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });
  try {
    sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  export default sequelize;