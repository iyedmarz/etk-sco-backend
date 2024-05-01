import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Commande {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', default: "SCO-1" })
    bornID: string;

    @Column({ type: 'timestamp' })
    dateCommande: Date;

    @Column({ type: 'varchar', nullable: true })
    client_id: string;

    @Column({ type: 'json' }) //, array: true 
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

    @Column({ type: 'int' })
    pointFidTotal: number;

    @Column({ type: 'numeric', precision: 10, scale: 2 })
    totalPrice: number;

    @Column({ type: 'varchar', default: "euro" })
    deviseCode: string;

    @Column({ type: 'json' }) //, array: true 
    reglement: {
        payementMode: string;
        payementAmount: number;
    }

}
