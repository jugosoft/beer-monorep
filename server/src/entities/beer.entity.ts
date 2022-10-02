import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity('beers')
export class BeerEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column({type: 'decimal', precision: 2, default: 0.0})
  alcohol: number;

  @Field()
  @Column({type: 'decimal', precision: 2, default: 0.0})
  bitterness: number;

  @Field({ nullable: true })
  @Column({ nullable: true, type: 'decimal', precision: 2, default: 0.0})
  original_gravity: number;

  @Field({ nullable: true })
  @Column({ nullable: true, type: 'decimal', precision: 2, default: 0.0})
  final_gravity: number;

  @Field({ nullable: true })
  @Column({ nullable: true, type: 'decimal', precision: 2, default: 0.0})
  colour_srm: number;

  @Field({ nullable: true })
  @Column({ nullable: true, type: 'decimal', precision: 2, default: 0.0})
  colour_ebc: number;

  @Field({ nullable: true })
  @Column({ nullable: true, type: 'decimal', precision: 2, default: 0.0})
  barrel_aged: number;
}
