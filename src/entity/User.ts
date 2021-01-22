import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('users')
export class User {
    @Column('text')
    bio: string;

    @Column()
    email: string;

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    image: string;

    @Column()
    username: string;
}
