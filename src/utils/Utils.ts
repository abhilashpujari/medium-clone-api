import bcrypt from 'bcrypt';

class Utils {

    static async hashPassword(password): Promise<string> {
        return await bcrypt.hash(password, 10);
    }

    static async comparePassword(password, hashPassword): Promise<boolean> {
        return await bcrypt.compare(password, hashPassword);
    }
}

export default Utils;
