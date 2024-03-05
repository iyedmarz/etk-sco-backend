import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Product {

    @PrimaryColumn({ nullable: false, type: 'varchar', length: 13 })
    barcode: string;

    @Column({ type: 'varchar', length: 50 })
    name: string;

    @Column({ type: 'int' })
    price: number;

    @Column({ type: 'int' })
    quantity: number;
}
