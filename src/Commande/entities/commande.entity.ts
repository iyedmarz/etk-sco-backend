import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Commande {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', default: "SCO-1" })
    bornID: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    dateCommande: Date;

    @Column({ nullable: true, type: 'int' })
    client_id: number;

    @Column({ type: 'json', nullable: true }) //, array: true 
    Products: {
        barcode: string;
        name: string;
        UnitPrice: number;
        qte: number;
        promoDiscount: {
            promoId: string;
            libelle: string;
            percentage: number;
            discountMontant: number;
        };
        totalPriceProd: number;
        pointFidProd: number;
    }

    @Column({ type: 'json', nullable: true })
    globalDiscount: {
        promoId: string;
        libelle: string;
        percentage: number;
        discountMontant: number;
    }

    @Column({ type: 'int', nullable: true })
    pointFidTotal: number;

    @Column({ type: 'numeric', precision: 10, scale: 2 })
    totalPrice: number;

    @Column({ type: 'varchar', default: "euro" })
    deviseCode: string;

    @Column({ type: 'json', nullable: true })
    reglement: {
        payementMode: string;
        payementAmount: string;
    }

}
