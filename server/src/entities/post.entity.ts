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

    @ManyToOne(() => UserEntity, (user) => user)
    author: UserEntity

    @Column()
    title: string;

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
    postId: number;

    @Column()
    order: number;

    @Column()
    title: string;

    @Column()
    text: string;

    @ManyToOne(() => PostEntity, post => post.abstracts)
    post: PostEntity;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
