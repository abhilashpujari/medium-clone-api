import {Request, Response} from "express";
import UserService from "../services/UserService";
import validateData from "../middlewares/validateData";
import UserValidation from "../validations/UserValidation";

const login = async (req: Request, res: Response) => {
    res.json({
        message: 'Login routes....'
    });
}

const register = async (req: Request, res: Response, next) => {
    res.status(201).json({message: 'User registered successfully'});
}

export default {
    login,
    register
};
