import {DataTypes} from "sequelize";
import {sequelize} from "../db/connect";

const Auth = sequelize.define("Auth2", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {timestamps: true});

const sync = async () => {
    try {
        Auth.sync();
        console.log("Auth Tablosu Oluşturuldu");
    } catch (error) {
        console.log(error, "Table Error!");
    }
    
}

sync();


export default Auth;
