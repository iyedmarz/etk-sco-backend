import { IsNotEmpty, IsOptional, IsInt, IsNumber, IsString, IsDate, IsObject, ArrayMinSize } from 'class-validator';

export class CreateCommandeDto {
    @IsInt()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsOptional()
    bornID?: string;

    @IsDate()
    @IsOptional()
    dateCommande?: Date;

    @IsInt()
    @IsOptional()
    client_id?: number;

    @IsNotEmpty()
    @ArrayMinSize(1)
    Products: {

        barcode: string;

        name: string;

        UnitPrice: number;

        qte: number;

        promoDiscount: {

            promoid: string;

            libelle: string;

            discountMontant: number;
        };

        TotalPriceProd: number;

        pointFidProd: number;
    };

    @IsObject()
    @IsOptional()
    globalDiscount?: {

        promoId: string;

        libelle: string;

        percentage: number;

        discountMontant: number;
    };

    @IsNumber()
    @IsOptional()
    pointFidTotal?: number;

    @IsNumber()
    totalPrice: number;

    @IsString()
    @IsOptional()
    deviseCode?: string;

    @IsObject()
    @IsOptional()
    reglement?: {

        payementMode: string;

        payementAmount: string;
    };
}

