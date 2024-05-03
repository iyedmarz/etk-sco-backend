import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Promo {

    @PrimaryColumn({ type: 'varchar' })
    codePromo: string;

    @Column({ type: 'varchar' })
    libelle: string;

    @Column({ type: 'numeric' }) //exp : 0.1 for 10%
    percentage: number;

    @Column({ type: 'int' })
    totalNumberOfUse: number;

    @Column({ type: 'int' })
    leftToUse: number;

    @Column({ type: 'timestamp' })
    offerDate: Date;

    @Column({ type: 'timestamp' })
    offerValidity: Date;

    @Column({ type: 'varchar' })
    offeredBybrand: string;
}
