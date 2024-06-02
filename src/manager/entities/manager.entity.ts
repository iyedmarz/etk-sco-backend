import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Manager {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 50 })
    name: string;

    @Column({ type: 'varchar', length: 50 })
    accessCode: string;
}


