import bcrypt from 'bcrypt';
import slug from 'slug';

class Utils {

    static async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 10);
    }

    static async comparePassword(password: string, hashPassword: string): Promise<boolean> {
        return await bcrypt.compare(password, hashPassword);
    }

    static slugify(text: string): string {
        return slug(text);
    }
}

export default Utils;
