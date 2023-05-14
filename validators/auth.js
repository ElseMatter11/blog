import { body } from "express-validator";

export const loginValidator = [
    body('email', 'Wrong mail format').isEmail(),
    body('password', 'Pasword require at list 6 symbols').isLength({min: 6})
];

export const registerValidator = [
    body('email', 'Wrong mail format').isEmail(),
    body('password', 'Pasword require at list 6 symbols').isLength({min: 6}),
    body('name', 'Name require at list 2 symbols').isLength({min:2})
];