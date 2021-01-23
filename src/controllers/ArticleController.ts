import {Request, Response} from "express";

const create = async (req: Request, res: Response) => {
    res.json({
        message: 'Create Article....'
    });
}

export default {
    create
};
