import { IsInt } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

class DiscountDto {
    @Column({ type: 'varchar' })
    codePromo: string;
    @Column({ type: 'numeric' })
    discountMontant: number;
}

class ReglementDto {
    @Column({ type: 'varchar' })
    payementMode: string;

    @Column({ type: 'numeric' })
    payementAmount: number;
}

class commandeProductDto {
    @Column({ type: 'varchar' })
    barcode: string;

    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'numeric' })
    UnitPrice: number;

    @IsInt()
    qte: number;

    @Column({ type: 'numeric' })
    promoDiscount: DiscountDto;

    @Column({ type: 'numeric' })
    totalPriceProd: number;

    @Column({ type: 'numeric' })
    pointFidProd: number;
}

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
    Products: commandeProductDto[]

    @Column({ type: 'jsonb', nullable: true })
    globalDiscount: DiscountDto

    @Column({ type: 'int' })
    pointFidTotal: number;

    @Column({ type: 'numeric', precision: 10, scale: 3 })
    totalPrice: number;

    @Column({ type: 'varchar', default: "euro" })
    deviseCode: string;

    @Column({ type: 'json', nullable: true }) //, array: true 
    reglement: ReglementDto[]

}
