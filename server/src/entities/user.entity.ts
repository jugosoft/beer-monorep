import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    JoinTable, 
    ManyToMany, 
    OneToMany, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from 'typeorm';
import { PostEntity } from './post.entity';

import { RoleEntity } from './role.entity';


@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column({ unique: true })
    email: string;

    @OneToMany(() => PostEntity, post => post.author)
    posts: PostEntity[];

    @ManyToMany(() => RoleEntity)
    @JoinTable()
    roles: RoleEntity[];

    @Column({ unique: true })
    name: string;

    @Column({select: false})
    password: string;

    @Column({ nullable: true })
    hashedRT: string;
}
