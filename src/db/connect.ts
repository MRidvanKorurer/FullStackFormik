import {Sequelize} from "sequelize";
import config from "../config/config";

const sequelize = new Sequelize(config.db.database ,config.db.username, config.db.password, {
    host: config.db.host,
    dialect: "mysql"
}); 

const conn = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connection success");
    } catch (error) {
        console.log(error, "Db Error!");
    }
}


export {conn, sequelize};