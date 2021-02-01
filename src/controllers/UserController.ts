import {NextFunction, Request, Response} from "express";
import UserService from "../services/UserService";

const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const responseData = await UserService.authenticate(req.body);
        res.status(200).json(responseData);
    } catch (error) {
        next(error);
    }
}

const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const responseData = await UserService.register(req.body);
        res.status(201).json(responseData);
    } catch (error) {
        next(error);
    }
}

export default {
    login,
    register
};
