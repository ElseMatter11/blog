import { validationResult } from "express-validator";
import jwt from 'jsonwebtoken';
import { ValidationError } from "sequelize";
import bcrypt from "bcrypt";
import * as model from "../models/models.js" ;

const {User,Post} = model;

export const registration =  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }
    try{
    const {email, password, name} = req.body 
    console.log(req.body);
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = await User.create({email, name, password:passwordHash});

    const token = jwt.sign({
        id: user.id,

    },
    'secret',
    {
        expiresIn: '15d'
    }
    );

    const {dataValues, ...otherData} = user;
    res.status(201).json({...dataValues});
    }catch(error){
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const login = async (req, res) => {
    try {
        const {email, password} = req.body 
        const user = await User.findOne({where:{email}});

        if (!user) {
            return req.status(404).json({
                message: 'Wrong email or password'
            });
        }

        const isValidPassword = bcrypt.compare(password, user.password);

        if (!isValidPassword){
            return res.status(400).json({
                message: 'Wrong email or password'
            });
        }

        const token = jwt.sign(
        {
            id: user.id,
        },
        'secret',
        {
            expiresIn: '15d'
        }
        );
        const {dataValues, ...otherData} = user;
        
        res.status(201).json({...dataValues,token});
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'Unable to authorize' });
    }
}

export const getUser = async (req, res) => {
    const id = req.userId;
    console.log(id);
    try {
        const user = await User.findOne({where: {id}});
        if (!user){
            return res.status(404).json({
                message: 'User not found'
            });
        }

        const {dataValues, ...otherData} = user;
        const {password, ...usefulData} = dataValues;
        res.status(201).json({...usefulData});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'No acsees' });
    }
}