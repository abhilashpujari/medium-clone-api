import jwt from 'jsonwebtoken';

interface User {
    id: number
    username: string
}

class JWTUtils {

    async generateToken(data: User): Promise<string | null> {
        try {
            return await jwt.sign(data, process.env.JWT_SECRET);
        } catch (e) {
            console.log('JWT token generation error:: ', e.message);
            return null;
        }
    }

    async decode(token: string): Promise<object | null> {
        try {
            return await jwt.verify(token, process.env.JWT_SECRET);
        } catch (e) {
            return null;
        }
    }
}

export default JWTUtils;
