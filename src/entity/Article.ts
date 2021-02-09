import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
    JoinTable
} from "typeorm";
import {User} from "./User";
import {Tag} from "./Tag";

@Entity('articles')
export class Article {
    @Column('text')
    body: string;

    @CreateDateColumn()
    createdAt: string;

    @Column({
        type: "varchar",
        length: 255
    })
    description: string;

    @Column({default: 0})
    favoritesCount: number;

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar",
        unique: true,
        length: 255
    })
    slug: string;

    @Column({
        type: "varchar",
        unique: true,
        length: 255
    })
    title: string;

    @UpdateDateColumn()
    updatedAt: string;

    @ManyToOne(() => User)
    author: User;

    @ManyToMany(() => Tag)
    @JoinTable()
    tagList: Tag[];
}
