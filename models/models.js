import sequelize from '../db.js';
import {DataTypes} from "sequelize";

export const User = sequelize.define('user',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    }
});

export const Post = sequelize.define('post',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    text:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    author:{
        type:DataTypes.STRING,
        allowNull:false
    },
    picture:{
        type:DataTypes.STRING,
        allowNull:true
    }
    

});

User.hasMany(Post);
Post.belongsTo(User);

