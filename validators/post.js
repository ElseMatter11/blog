import { body } from "express-validator";

export const postValidation = [
    body('text', 'You have missed the text').isLength({min: 10}).isString(),
    body('author', 'You have missed the author').isLength({min: 2}).isString(),
    body('picture', 'Name require at list 2 symbols').optional().isURL()
];