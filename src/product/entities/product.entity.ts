import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Product {

    @PrimaryColumn({ type: 'varchar' })
    barcode: string;

    @Column({ type: 'varchar' })
    brand: string;

    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'varchar' })
    category: string;

    @Column({ type: 'numeric' })
    priceUnit: number;

    @Column({ type: 'int' })
    quantity: number;

    @Column({ type: 'int' })
    pts_fid: number;
}
