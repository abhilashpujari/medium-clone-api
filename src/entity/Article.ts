import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {User} from "./User";

@Entity('articles')
export class Article {
    @Column('text')
    body: string;

    @Column({
        length: 255
    })
    description: string;

    @Column()
    favoritesCount: number;

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    slug: string;

    @Column()
    title: string;

    @ManyToOne(() => User)
    author: User;
}
