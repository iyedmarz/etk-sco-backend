import { Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsInt, IsNumber, IsString, IsDate, IsObject, ArrayMinSize, ValidateNested, IsArray } from 'class-validator';

class DiscountDto {
    @IsString()
    promoId: string;

    @IsString()
    libelle: string;

    @IsNumber()
    percentage: number;

    @IsNumber()
    discountMontant: number;
}

class ReglementDto {
    @IsString()
    payementMode: string;

    @IsString()
    payementAmount: string;
}

class commandeProductDto {
    @IsString()
    barcode: string;

    @IsString()
    name: string;

    @IsNumber()
    UnitPrice: number;

    @IsNumber()
    qte: number;

    @ValidateNested()
    @Type(() => DiscountDto)
    promoDiscount: DiscountDto;

    @IsNumber()
    totalPriceProd: number;

    @IsNumber()
    pointFidProd: number;
}

// ** Creating Commande
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
    @IsArray()
    @ValidateNested()
    @Type(() => commandeProductDto) // Specify the type as Object since the structure is dynamic
    Products: commandeProductDto;
    // @IsNotEmpty()
    // @ValidateNested({ each: true })
    // @Type(() => commandeProductDto)
    // Products: commandeProductDto[]

    @ValidateNested()
    @Type(() => DiscountDto)
    @IsOptional()
    globalDiscount?: DiscountDto;

    @IsNumber()
    @IsOptional()
    pointFidTotal?: number;

    @IsNumber()
    totalPrice: number;

    @IsString()
    @IsOptional()
    deviseCode?: string;

    @ValidateNested()
    @Type(() => ReglementDto)
    @IsOptional()
    reglement?: ReglementDto;
}

