import jwt from 'jsonwebtoken';

interface User {
    id: number
    username: string
}

class JWTUtils {

    static async generateToken(data: User): Promise<string> {
        return await jwt.sign(data, process.env.JWT_SECRET);
    }

    static async decode(token: string): Promise<object> {
        return await jwt.verify(token, process.env.JWT_SECRET);
    }
}

export default JWTUtils;
