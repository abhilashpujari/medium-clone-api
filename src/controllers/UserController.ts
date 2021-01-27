import {Request, Response} from "express";
import UserService from "../services/UserService";

const login = async (req: Request, res: Response) => {
    res.json({
        message: 'Login routes....'
    });
}

const register = async (req: Request, res: Response) => {
    await UserService.register(req.body.user);

    res.status(201).json({message: 'User registered successfully'});
}

export default {
    login,
    register
};
