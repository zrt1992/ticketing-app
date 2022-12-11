import express, { Request, Response } from 'express';
import { body } from 'express-validator';

const router = express.Router();

router.post(
    '/api/user/signup',
    [
        body('email')
            .isEmail()
            .withMessage('Email must be valid'),
        body('password')
            .trim()
            .isLength({ min: 4, max: 20 })
            .withMessage('Password must be between 4 and 20 characters')
    ],
    (req: Request, res: Response) => {
        const { email, password } = req.body;
        console.log(req.body);
        // res.status(200).send('i am sign up route');
        if (!email || typeof email !== 'string') {
            res.status(400).send('Provide a valid email');
        } else {
            res.status(200).send('everything looks good');
        }
    }
);

export { router as signupRouter };
