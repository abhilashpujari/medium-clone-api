import {Request, Response} from "express";

const login = async (req: Request, res: Response) => {
    res.json({
        message: 'Login routes....'
    });
}

export default {
    login
};
