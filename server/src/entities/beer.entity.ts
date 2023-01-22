import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('beers')
export class BeerEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column()
    name: string;

    @Column({ type: 'decimal', precision: 2, default: 0.0 })
    alcohol: number;

    @Column({ type: 'decimal', precision: 2, default: 0.0 })
    bitterness: number;

    @Column({ nullable: true, type: 'decimal', precision: 2, default: 0.0 })
    original_gravity: number;

    @Column({ nullable: true, type: 'decimal', precision: 2, default: 0.0 })
    final_gravity: number;

    @Column({ nullable: true, type: 'decimal', precision: 2, default: 0.0 })
    colour_srm: number;

    @Column({ nullable: true, type: 'decimal', precision: 2, default: 0.0 })
    colour_ebc: number;

    @Column({ nullable: true, type: 'decimal', precision: 2, default: 0.0 })
    barrel_aged: number;
}
