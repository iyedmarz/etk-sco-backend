import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Client {

    @PrimaryColumn({ nullable: false, type: 'varchar' })
    id: string;

    @Column({ nullable: false, type: 'int' })
    num_tel: number;

    @Column({ type: 'varchar', length: 50 })
    qr_code: string;

    @Column({ type: 'varchar', length: 50 })
    nom: string;

    @Column({ type: 'varchar', length: 50 })
    addresse: string;

    @Column({ type: 'varchar', length: 50 })
    code_postal: string;
}