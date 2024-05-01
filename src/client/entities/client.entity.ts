import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Client {

    @PrimaryColumn({ nullable: false, type: 'varchar' })
    cin: string;

    @Column()
    id: string;

    @Column({ nullable: false, type: 'int' })
    num_tel: number;

    @Column({ type: 'varchar', length: 50, nullable: true })
    num_cartfid: string;

    @Column({ type: 'varchar', length: 50, nullable: true })
    qr_code: string;

    @Column({ type: 'varchar', length: 50 })
    nom: string;

    @Column({ type: 'varchar', length: 50 })
    addresse: string;

    @Column({ type: 'varchar', length: 50 })
    code_postal: string;

    @Column({ type: 'int' })
    pts_Fidality: number;

    @BeforeInsert()
    async generateid() {
        if (!this.id) {
            this.id = uuidv4().substr(0, 6);
        }
    }
}

