import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    ManyToOne, 
    OneToMany, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from 'typeorm';

import { UserEntity } from './user.entity';


@Entity('posts')
export class PostEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    slug: string;

    @ManyToOne(() => UserEntity, user => user.posts, { eager: true })
    author: UserEntity

    @Column()
    title: string;

    @Column() 
    description: string;

    @Column({default: 0}) 
    favoritedCount: number;

    @Column('simple-array')
    tagList: string[];

    @OneToMany(() => PostAbstractEntity, abstract => abstract.post)
    abstracts: PostAbstractEntity[];
    
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}


@Entity('abstracts')
export class PostAbstractEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    order: number;

    @Column()
    title: string;

    @Column()
    text: string;

    @Column('simple-array')
    tagList: string[];

    @Column({default: 0})
    favouritesCount: number;

    @ManyToOne(() => PostEntity, post => post.abstracts)
    post: PostEntity;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
