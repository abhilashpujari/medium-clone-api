import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate} from "typeorm";
import Utils from "../utils/Utils";

@Entity('users')
export class User {
    @Column('text')
    bio: string;

    @Column({unique: true})
    email: string;

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    image: string;

    @Column()
    password: string;

    @Column({unique: true})
    username: string;

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword(): Promise<void> {
        if (this.password) {
            this.password = await Utils.hashPassword(this.password);
        }
    }
}
