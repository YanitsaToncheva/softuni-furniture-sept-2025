import { Router } from 'express';
import userService from '../services/userService';

const userController = Router();

userController.post('/register', async (req, res) => {
    const { email, password } = req.body;

    const { email, password } = req.body;

    const  result = await userService.register(email, password)

    res.status(201).end();
})


export default userController;