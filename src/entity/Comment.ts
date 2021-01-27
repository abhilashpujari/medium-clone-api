import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {User} from "./User";
import {Article} from "./Article";

@Entity('comments')
export class Comment {
    @Column('text')
    body: string;

    @CreateDateColumn()
    createdAt: string;

    @PrimaryGeneratedColumn()
    id: number;

    @UpdateDateColumn()
    updatedAt: string;

    @ManyToOne(() => Article)
    article: Article;

    @ManyToOne(() => User)
    author: User;
}
