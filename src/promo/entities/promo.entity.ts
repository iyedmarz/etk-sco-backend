import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Promo {
    @PrimaryColumn({ nullable: false, type: 'varchar' })
    code: string;

    @Column({ type: 'int' })
    promotion: number;
}
